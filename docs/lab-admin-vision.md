# Lab — Serapio Labs Admin Portal (Future Vision)

## Current state
The "Lab" nav link on nickwhite.us points to `/app/recruiting` as a temporary destination.

## Intended end state

"Lab" becomes the entry point for a unified **Serapio Labs internal admin portal** — a single sign-in that gives authenticated admins access to super-admin tooling across all Serapio products.

### Flow

```
nickwhite.us → Lab
       ↓
/app/login  (Serapio Labs sign-in — email/password, single account)
       ↓
/app  (Project Picker — list of active Serapio products)
       ↓
/app/[project]  (Product-specific super admin settings)
```

### Project Picker
After sign-in, admins land on a project picker that lists all active Serapio Labs products (e.g. DishSync, BehaviorBuzz, future products). Each card links to that product's admin section.

### Per-product admin sections
Each product gets its own route under `/app/[project]` with super-admin capabilities relevant to that product — user management, feature flags, data inspection, etc. These are production settings, not dev tools.

### Auth
Single Supabase account (email/password, no public sign-up). The current `/app/login` page and Supabase project (`sglefycqqmirdvbpajie`) are the foundation for this.

## Implementation notes
- The `/app/recruiting` tracker is a personal tool that lives here temporarily; it may move or be gated separately once the project picker exists.
- The project picker UI should follow the dishsync-style design system (terracotta, desert-pattern, warm cream) for visual consistency across the admin portal.
- Keep sign-up disabled at the Supabase level — this portal is invite-only.
