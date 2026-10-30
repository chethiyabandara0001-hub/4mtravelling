import 'dotenv/config';
import express from 'express';
import multer from 'multer';
import path from 'path';
import {
  S3Client,
  PutObjectCommand,
  ListObjectsV2Command,
  DeleteObjectCommand,
} from '@aws-sdk/client-s3';
import { createServer as createViteServer } from 'vite';

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 25 * 1024 * 1024 }, // 25 MB max image size
});

function getR2Config() {
  const accountId = (process.env.R2_ACCOUNT_ID || '').trim();
  const accessKeyId = (process.env.R2_ACCESS_KEY_ID || '').trim();
  const secretAccessKey = (process.env.R2_SECRET_ACCESS_KEY || '').trim();
  const bucketName = (process.env.R2_BUCKET_NAME || '').trim();
  const publicUrl = (process.env.R2_PUBLIC_URL || '').trim().replace(/\/+$/, '');

  const missingVars: string[] = [];
  if (!accountId) missingVars.push('R2_ACCOUNT_ID');
  if (!accessKeyId) missingVars.push('R2_ACCESS_KEY_ID');
  if (!secretAccessKey) missingVars.push('R2_SECRET_ACCESS_KEY');
  if (!bucketName) missingVars.push('R2_BUCKET_NAME');
  if (!publicUrl) missingVars.push('R2_PUBLIC_URL');

  const configured =
    Boolean(accountId && accessKeyId && secretAccessKey && bucketName);

  const client = configured
    ? new S3Client({
        region: 'auto',
        endpoint: `https://${accountId}.r2.cloudflarestorage.com`,
        credentials: {
          accessKeyId,
          secretAccessKey,
        },
      })
    : null;

  return {
    configured,
    accountId,
    bucketName,
    publicUrl,
    missingVars,
    client,
  };
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json({ limit: '10mb' }));

  // 1. Check R2 Connection Status
  app.get('/api/r2/status', (_req, res) => {
    const cfg = getR2Config();
    res.json({
      configured: cfg.configured,
      bucketName: cfg.bucketName || null,
      publicUrl: cfg.publicUrl || null,
      missingVars: cfg.missingVars,
    });
  });

  // 2. List & Inspect All Objects and Folders in Cloudflare R2 Bucket
  app.get('/api/r2/list', async (req, res) => {
    const cfg = getR2Config();
    if (!cfg.configured || !cfg.client) {
      res.status(400).json({
        error: `Cloudflare R2 is not configured yet. Missing environment variables: ${cfg.missingVars.join(', ')}`,
        missingVars: cfg.missingVars,
      });
      return;
    }

    try {
      const prefix = typeof req.query.prefix === 'string' ? req.query.prefix : undefined;
      const fallbackDomain =
        (typeof req.query.publicDomain === 'string' ? req.query.publicDomain : '') ||
        cfg.publicUrl;
      const cleanDomain = fallbackDomain.replace(/\/+$/, '');

      const allContents: Array<{
        key: string;
        folder: string;
        fileName: string;
        size: number;
        lastModified: string | null;
        url: string;
      }> = [];
      const folders: Record<string, number> = {};

      let continuationToken: string | undefined = undefined;
      let safetyPages = 0;

      do {
        const cmd = new ListObjectsV2Command({
          Bucket: cfg.bucketName,
          Prefix: prefix,
          MaxKeys: 1000,
          ContinuationToken: continuationToken,
        });
        const result = await cfg.client.send(cmd);
        for (const obj of result.Contents || []) {
          if (!obj.Key || obj.Key.endsWith('/')) continue;
          const key = obj.Key;
          const parts = key.split('/');
          const fileName = parts[parts.length - 1] || key;
          const folder = parts.length > 1 ? parts.slice(0, -1).join('/') : '(root)';
          folders[folder] = (folders[folder] || 0) + 1;

          allContents.push({
            key,
            folder,
            fileName,
            size: obj.Size || 0,
            lastModified: obj.LastModified ? obj.LastModified.toISOString() : null,
            url: cleanDomain ? `${cleanDomain}/${key}` : key,
          });
        }
        continuationToken = result.IsTruncated ? result.NextContinuationToken : undefined;
        safetyPages++;
      } while (continuationToken && safetyPages < 25);

      res.json({
        ok: true,
        bucketName: cfg.bucketName,
        publicUrl: cleanDomain || null,
        totalCount: allContents.length,
        folders,
        objects: allContents,
      });
    } catch (err: any) {
      res.status(500).json({
        error: err?.message || 'Failed to list objects from Cloudflare R2 bucket.',
      });
    }
  });

  // 3. Upload Image File (or Folder File) Directly to Cloudflare R2 Bucket
  app.post('/api/r2/upload', upload.single('file'), async (req, res) => {
    const cfg = getR2Config();
    if (!cfg.configured || !cfg.client) {
      res.status(400).json({
        error: `Cloudflare R2 is not configured yet. Please add ${cfg.missingVars.join(', ')} in Environment Variables.`,
        missingVars: cfg.missingVars,
      });
      return;
    }

    const file = req.file;
    if (!file) {
      res.status(400).json({ error: 'No image file provided in request.' });
      return;
    }

    const category =
      (typeof req.body?.category === 'string' ? req.body.category : 'general')
        .replace(/[^a-zA-Z0-9/_-]/g, '') || 'general';
    const relativePath =
      typeof req.body?.relativePath === 'string'
        ? req.body.relativePath
            .trim()
            .replace(/\\/g, '/')
            .replace(/^\/+/, '')
        : '';
    const safeFilename = file.originalname.replace(/[^a-zA-Z0-9._-]/g, '-');

    let customKey = '';
    if (typeof req.body?.customKey === 'string' && req.body.customKey.trim()) {
      customKey = req.body.customKey.trim().replace(/^\/+/, '');
    } else if (relativePath) {
      // Preserve folder structure when uploading a folder
      customKey = relativePath;
    } else {
      customKey = `${category}/${Date.now()}-${safeFilename}`;
    }

    try {
      await cfg.client.send(
        new PutObjectCommand({
          Bucket: cfg.bucketName,
          Key: customKey,
          Body: file.buffer,
          ContentType: file.mimetype || 'image/webp',
        })
      );

      const fallbackDomain =
        (typeof req.body?.publicDomain === 'string' ? req.body.publicDomain : '') ||
        cfg.publicUrl;
      const cleanDomain = fallbackDomain.replace(/\/+$/, '');
      const cdnUrl = cleanDomain ? `${cleanDomain}/${customKey}` : customKey;

      res.json({
        ok: true,
        key: customKey,
        url: cdnUrl,
        size: file.size,
        contentType: file.mimetype,
      });
    } catch (err: any) {
      res.status(500).json({
        error: err?.message || 'Failed to upload image to Cloudflare R2.',
      });
    }
  });

  // 3b. High-Speed Parallel Batch Folder Upload (500+ to 5,000+ images)
  app.post('/api/r2/upload-batch', upload.array('files', 25), async (req, res) => {
    const cfg = getR2Config();
    if (!cfg.configured || !cfg.client) {
      res.status(400).json({
        error: `Cloudflare R2 is not configured yet. Please add ${cfg.missingVars.join(', ')} in Environment Variables.`,
        missingVars: cfg.missingVars,
      });
      return;
    }

    const files = (req.files as Express.Multer.File[]) || [];
    if (files.length === 0) {
      res.status(400).json({ error: 'No files provided in batch.' });
      return;
    }

    const category =
      (typeof req.body?.category === 'string' ? req.body.category : 'general')
        .replace(/[^a-zA-Z0-9/_-]/g, '') || 'general';
    const fallbackDomain =
      (typeof req.body?.publicDomain === 'string' ? req.body.publicDomain : '') ||
      cfg.publicUrl;
    const cleanDomain = fallbackDomain.replace(/\/+$/, '');

    let relativePaths: string[] = [];
    try {
      if (typeof req.body?.relativePaths === 'string') {
        relativePaths = JSON.parse(req.body.relativePaths);
      }
    } catch {
      relativePaths = [];
    }

    try {
      const uploaded = await Promise.all(
        files.map(async (file, idx) => {
          const relPath = (relativePaths[idx] || '')
            .trim()
            .replace(/\\/g, '/')
            .replace(/^\/+/, '');
          const safeFilename = file.originalname.replace(/[^a-zA-Z0-9._-]/g, '-');
          const key = relPath || `${category}/${Date.now()}-${idx}-${safeFilename}`;

          await cfg.client!.send(
            new PutObjectCommand({
              Bucket: cfg.bucketName,
              Key: key,
              Body: file.buffer,
              ContentType: file.mimetype || 'image/webp',
            })
          );

          const url = cleanDomain ? `${cleanDomain}/${key}` : key;
          return {
            key,
            url,
            fileName: file.originalname,
            size: file.size,
          };
        })
      );

      res.json({
        ok: true,
        count: uploaded.length,
        uploaded,
      });
    } catch (err: any) {
      res.status(500).json({
        error: err?.message || 'Batch upload to Cloudflare R2 failed.',
      });
    }
  });

  // 4. Delete Object from Cloudflare R2 Bucket
  app.delete('/api/r2/object', async (req, res) => {
    const cfg = getR2Config();
    if (!cfg.configured || !cfg.client) {
      res.status(400).json({
        error: `Cloudflare R2 is not configured yet. Missing: ${cfg.missingVars.join(', ')}`,
      });
      return;
    }

    const rawKey =
      typeof req.query.key === 'string'
        ? req.query.key
        : typeof req.body?.key === 'string'
        ? req.body.key
        : '';
    const key = rawKey.trim().replace(/^\/+/, '');
    if (!key) {
      res.status(400).json({ error: 'Missing R2 object key to delete.' });
      return;
    }

    try {
      await cfg.client.send(
        new DeleteObjectCommand({
          Bucket: cfg.bucketName,
          Key: key,
        })
      );
      res.json({ ok: true, deletedKey: key });
    } catch (err: any) {
      res.status(500).json({
        error: err?.message || 'Failed to delete object from Cloudflare R2.',
      });
    }
  });

  // Vite middleware for development; static files for production
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*all', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
