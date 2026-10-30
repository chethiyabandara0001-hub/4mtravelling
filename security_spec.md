# Security Specification (`security_spec.md`)

## 1. Data Invariants
1. **Default-Deny Catch-All**: All paths not explicitly matched are denied by `match /{document=**} { allow read, write: if false; }`.
2. **Verified Admin-Only Mutations**: Only verified administrators (`isAdmin()`) can create, update, or delete CMS documents (`site_config`, `tours`, `destinations`, `blogs`, `memories`, `videos`, `misc_attractions`, `r2_media`, `home_blocks`).
3. **Email Verification & Anti-Spoofing**: An administrator is identified either by an existing record in `/admins/$(request.auth.uid)` or by the bootstrapped owner email (`chethiyabandara0001@gmail.com`) **strictly paired** with `request.auth.token.email_verified == true`.
4. **PII Isolation**: `/admins/{adminId}` contains admin email addresses and is strictly restricted to `isOwner(adminId) || isAdmin()` on `get` and never exposes `list`.
5. **Path Variable Hardening (`isValidId`)**: All single-document operations (`get`, `create`, `update`, `delete`) validate path IDs with `isValidId(id)` (`id is string && id.size() <= 128 && id.matches('^[a-zA-Z0-9_\\-]+$')`).
6. **Validation Blueprints (`isValid[Entity]`)**: Every `create` and `update` operation begins with a standalone `isValid[Entity](incoming())` helper enforcing required keys (`hasAll`), allowed keys (`hasOnly`), string length bounds (`.size() <= MAX`), array bounds, `updatedBy == request.auth.uid`, and `updatedAt == request.time`.
7. **Secure List Queries**: Public content collections (`tours`, `destinations`, `blogs`, `memories`, `videos`, `misc_attractions`, `r2_media`, `home_blocks`, `site_config`) enforce `resource.data.updatedBy is string && resource.data.updatedBy.size() <= 128` on `allow list` without any `get()` or `exists()` calls.

## 2. The "Dirty Dozen" Payloads
1. **Unauthenticated Write**: Anonymous client attempts to create `/tours/hacked-tour` -> `PERMISSION_DENIED`.
2. **Unverified Admin Email Spoof**: User with `email == 'chethiyabandara0001@gmail.com'` but `email_verified == false` attempts to update `/site_config/main` -> `PERMISSION_DENIED`.
3. **Non-Admin Authenticated Write**: Verified regular user (`intruder@example.com`) attempts to create `/r2_media/img-1` -> `PERMISSION_DENIED`.
4. **Shadow Field Injection**: Admin sends valid `/tours/adventure` payload plus ghost key `isSuperHack: true` -> `PERMISSION_DENIED` (blocked by `keys().hasOnly(...)`).
5. **Identity Spoofing (`updatedBy`)**: Admin sends `/blogs/new-post` where `updatedBy` does not match `request.auth.uid` -> `PERMISSION_DENIED`.
6. **Timestamp Forgery (`updatedAt`)**: Admin sends `/destinations/ella` with a past/future `updatedAt != request.time` -> `PERMISSION_DENIED`.
7. **ID Poisoning Attack**: Client requests or writes `/tours/` with a 500-character ID or invalid characters -> `PERMISSION_DENIED` (blocked by `isValidId`).
8. **String Exhaustion (Denial of Wallet)**: Admin attempts to write a 10,000-character `title` to `/tours/sigiriya` -> `PERMISSION_DENIED` (blocked by `title.size() <= 300`).
9. **Array Overflow**: Admin attempts to write 500 elements to `routeStops` in `/tours/sigiriya` -> `PERMISSION_DENIED` (blocked by `routeStops.size() <= 60`).
10. **PII Leak on `/admins`**: Authenticated non-owner attempts `get` or `list` on `/admins/other-uid` -> `PERMISSION_DENIED`.
11. **Self-Privilege Escalation**: Non-admin user attempts to create `/admins/their-own-uid` -> `PERMISSION_DENIED`.
12. **Immutable Key Mutation on Update**: Admin attempts to change `slug` of an existing `/tours/adventure` document during `update` -> `PERMISSION_DENIED` (`incoming().slug == existing().slug`).
