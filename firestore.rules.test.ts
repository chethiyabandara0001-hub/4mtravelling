/**
 * Security Rules Verification Suite for 4Me Lanka Tours CMS & R2 Media Vault
 * Verifies all Dirty Dozen adversarial payloads return PERMISSION_DENIED.
 */

export interface SecurityTestCase {
  id: number;
  name: string;
  operation: 'get' | 'list' | 'create' | 'update' | 'delete';
  path: string;
  auth: { uid: string; email?: string; email_verified?: boolean } | null;
  payload?: Record<string, unknown>;
  expected: 'PERMISSION_DENIED' | 'ALLOWED';
}

export const DIRTY_DOZEN_TESTS: SecurityTestCase[] = [
  {
    id: 1,
    name: 'Unauthenticated Write to Tours',
    operation: 'create',
    path: '/tours/hacked-tour',
    auth: null,
    payload: { slug: 'hacked-tour', title: 'Hacked' },
    expected: 'PERMISSION_DENIED',
  },
  {
    id: 2,
    name: 'Unverified Email Spoof on Site Config',
    operation: 'update',
    path: '/site_config/main',
    auth: { uid: 'spoof-1', email: 'chethiyabandara0001@gmail.com', email_verified: false },
    payload: { brandName: 'Spoofed' },
    expected: 'PERMISSION_DENIED',
  },
  {
    id: 3,
    name: 'Non-Admin Authenticated Write to R2 Media',
    operation: 'create',
    path: '/r2_media/img-1',
    auth: { uid: 'user-2', email: 'visitor@example.com', email_verified: true },
    payload: { id: 'img-1', url: 'https://r2.example.com/a.webp' },
    expected: 'PERMISSION_DENIED',
  },
  {
    id: 4,
    name: 'Shadow Field Injection on Tours',
    operation: 'create',
    path: '/tours/adventure-tour',
    auth: { uid: 'admin-1', email: 'chethiyabandara0001@gmail.com', email_verified: true },
    payload: {
      slug: 'adventure-tour',
      type: 'multi-day',
      title: 'Adventure',
      heroImage: 'https://r2.example.com/hero.webp',
      priceUsd: 960,
      isShadowAdminField: true,
    },
    expected: 'PERMISSION_DENIED',
  },
  {
    id: 5,
    name: 'Identity Spoofing on updatedBy',
    operation: 'create',
    path: '/blogs/test-blog',
    auth: { uid: 'admin-1', email: 'chethiyabandara0001@gmail.com', email_verified: true },
    payload: {
      slug: 'test-blog',
      title: 'Test',
      heroImage: 'https://r2.example.com/b.webp',
      articleHtml: '<p>Hi</p>',
      updatedBy: 'someone-else',
    },
    expected: 'PERMISSION_DENIED',
  },
  {
    id: 6,
    name: 'Timestamp Forgery on updatedAt',
    operation: 'update',
    path: '/destinations/sigiriya',
    auth: { uid: 'admin-1', email: 'chethiyabandara0001@gmail.com', email_verified: true },
    payload: {
      slug: 'sigiriya',
      name: 'Sigiriya',
      heroImage: 'https://r2.example.com/s.webp',
      cardImage: 'https://r2.example.com/s.webp',
      updatedBy: 'admin-1',
      updatedAt: '1999-01-01T00:00:00Z',
    },
    expected: 'PERMISSION_DENIED',
  },
  {
    id: 7,
    name: 'ID Poisoning Attack with Invalid Characters',
    operation: 'get',
    path: '/tours/invalid$id!@#',
    auth: null,
    expected: 'PERMISSION_DENIED',
  },
  {
    id: 8,
    name: 'String Exhaustion Attack on Tour Title',
    operation: 'create',
    path: '/tours/long-title',
    auth: { uid: 'admin-1', email: 'chethiyabandara0001@gmail.com', email_verified: true },
    payload: {
      slug: 'long-title',
      type: 'day',
      title: 'A'.repeat(1000),
      heroImage: 'https://r2.example.com/a.webp',
      priceUsd: 50,
      updatedBy: 'admin-1',
    },
    expected: 'PERMISSION_DENIED',
  },
  {
    id: 9,
    name: 'Array Overflow on Route Stops',
    operation: 'create',
    path: '/tours/overflow-stops',
    auth: { uid: 'admin-1', email: 'chethiyabandara0001@gmail.com', email_verified: true },
    payload: {
      slug: 'overflow-stops',
      type: 'multi-day',
      title: 'Overflow',
      heroImage: 'https://r2.example.com/a.webp',
      priceUsd: 500,
      routeStops: new Array(100).fill('Colombo'),
      updatedBy: 'admin-1',
    },
    expected: 'PERMISSION_DENIED',
  },
  {
    id: 10,
    name: 'PII Leak on /admins Collection by Non-Owner',
    operation: 'get',
    path: '/admins/other-admin-uid',
    auth: { uid: 'regular-user', email: 'user@example.com', email_verified: true },
    expected: 'PERMISSION_DENIED',
  },
  {
    id: 11,
    name: 'Self-Privilege Escalation on /admins',
    operation: 'create',
    path: '/admins/regular-user',
    auth: { uid: 'regular-user', email: 'user@example.com', email_verified: true },
    payload: {
      uid: 'regular-user',
      email: 'user@example.com',
    },
    expected: 'PERMISSION_DENIED',
  },
  {
    id: 12,
    name: 'Immutable Slug Mutation on Tour Update',
    operation: 'update',
    path: '/tours/sigiriya-day-tour-in-sri-lanka',
    auth: { uid: 'admin-1', email: 'chethiyabandara0001@gmail.com', email_verified: true },
    payload: {
      slug: 'mutated-slug',
      type: 'day',
      title: 'Sigiriya Day Tour',
      heroImage: 'https://r2.example.com/s.webp',
      priceUsd: 150,
      updatedBy: 'admin-1',
    },
    expected: 'PERMISSION_DENIED',
  },
];
