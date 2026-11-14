# Supabase Storage image setup for this project

This guide describes how to move this website's image files to the Supabase Storage bucket you created and then use each image's HTTPS URL in the project. It is a setup and migration plan only; no application code has been changed.

## Recommendation for this project

Keep the existing **Next.js + React** application. The repository is already a Next.js 14 TypeScript site (`package.json`), and React is the UI library that Next.js is built around. Flask is a Python web framework; choosing it would mean creating or moving to a separate backend and would not make static images load from Supabase more easily. A Flask service is only worth adding if you later need Python-specific server work, such as data science, a Python API, or a Python upload service. It is unnecessary for serving public product and marketing images.

For the current site, use the Supabase Storage **public object URL** in image `src` values and CSS backgrounds. Use the S3-compatible credentials to upload/manage files with an S3 client, if desired. The S3 endpoint is an API endpoint; it is not the URL you put in an `<img>` tag. Supabase's standard public URL looks like:

```text
https://<project-ref>.supabase.co/storage/v1/object/public/<bucket>/<object-path>
```

Example (replace every placeholder with your own values):

```text
https://abcdefgh.supabase.co/storage/v1/object/public/site-images/CFT_Machinery/Continous%20fryer%20Line%20Process.png
```

Supabase says public bucket assets can be fetched by anyone who has the URL. That is suitable for public website images, but not confidential files. Public access lets visitors retrieve files; upload, delete, and other changes still require authorized access.

## Important credential rule

The S3 Access Key ID and Secret Access Key issued in Supabase project settings are server-side credentials. Supabase documents that these keys have broad access to S3 operations across buckets and bypass Storage RLS. Never put either value in browser code, a `NEXT_PUBLIC_...` variable, a public JSON file, or a URL. Never commit them or paste them into a support message.

For this one-time migration, the easiest safe route is uploading with the Supabase Dashboard. If you use an S3 tool instead, enter the credentials only in that trusted local tool or a server-side environment. Keep the secret out of the image URL: browser visitors need only the public image URL.

## Step-by-step setup

### 1. Gather the project and bucket details

In the Supabase Dashboard, open the project and note:

1. The project reference (`project-ref`) from the project URL/settings.
2. The exact bucket name you created.
3. The project region.
4. The S3 endpoint shown in Storage's S3 configuration. The current hosted endpoint format is `https://<project-ref>.storage.supabase.co/storage/v1/s3`.
5. Your S3 Access Key ID and Secret Access Key. Store these privately; do not include them in this document or a frontend setting.

The S3 protocol may need to be enabled in the Storage settings. Follow the S3 configuration page in your own project; use the endpoint and region it displays rather than guessing them.

### 2. Make the website image bucket public

In **Storage**, open the bucket's settings and enable **Public bucket** access. Use this bucket for assets intended to appear on a public company website: product photos, logos, brand marks, and public section imagery. Keep customer documents or other private uploads in a separate private bucket.

Public means a person can download an object if they know its URL. It does not mean visitors receive permission to upload or delete objects.

### 3. Decide on object paths before uploading

There are currently **109 files** under `public/images`. A low-friction migration is to upload the contents of that folder while preserving its directory structure and filenames. For example:

```text
Local file:  public/images/CFT_Machinery/Continous fryer Line Process-02.png
Object path: CFT_Machinery/Continous fryer Line Process-02.png
Public URL:  https://<project-ref>.supabase.co/storage/v1/object/public/<bucket>/CFT_Machinery/Continous%20fryer%20Line%20Process-02.png
```

The object path starts inside `public/images`; do not add `public/images/` to the object path unless you intentionally want that prefix in the bucket. Keep capitalization and punctuation identical for the first migration. Object paths are case-sensitive. Spaces and special characters must be URL encoded when placed in a URL; preserve the actual filename in Storage. For future uploads, simple lowercase names with hyphens are easier to handle, but renaming existing files requires updating every reference.

### 4. Upload the image files

Choose one of these approaches:

**Supabase Dashboard (recommended for this one-time move):**

1. Open **Storage → your bucket**.
2. Create the folders represented under `public/images` as needed (for example `CFT_Machinery`, `trusted_brands`, and `why_to_choose_section_images`).
3. Upload each folder's contents, keeping the same relative paths and filenames.
4. Compare the uploaded folder/file list with `public/images` so no logo, product image, or section image is missed. There are 109 local image files in that tree at the time this guide was written.

**S3-compatible desktop client or script:**

Use a client that supports custom S3 endpoints. Set its endpoint, region, bucket, Access Key ID, and Secret Access Key to the values from Supabase. Set the client to preserve the relative folder paths under `public/images`. For a command-line sync, confirm the source/destination direction and dry-run/list results before running the upload. Do not share a command containing the secret or save it in a checked-in script.

Supabase's S3 support is an interoperable way to upload and manage Storage objects. It does not require changing this React project into a Python application.

### 5. Create and verify each public URL

For an object with path `folder/file name.png`, form the URL as:

```text
https://<project-ref>.supabase.co/storage/v1/object/public/<bucket>/folder/file%20name.png
```

Encode spaces and other URL-reserved characters in the URL path. Do not encode the bucket name unless it contains a reserved character (prefer a simple bucket name). Open several URLs in a private/incognito browser window to confirm they load without login. Check at least one file from each directory and one filename containing spaces. A `404` usually means the object path or letter case differs; an authorization response usually means the bucket is private or the public URL is malformed.

You can also use Supabase's `getPublicUrl` helper in a future app-side flow to construct public URLs from a bucket name and object path. For a static site migration, copying the generated URL into the existing image data is enough.

### 6. Build a mapping before changing references

Make a simple migration sheet with these columns:

| Current project path | Supabase object path | Verified public URL | References checked |
|---|---|---|---|
| `/images/CFT_Machinery/Continous fryer Line Process.png` | `CFT_Machinery/Continous fryer Line Process.png` | `https://<project-ref>.supabase.co/storage/v1/object/public/<bucket>/CFT_Machinery/Continous%20fryer%20Line%20Process.png` | pending |

This project references images from several places, so search for all of these patterns during the later code migration:

- `/images/...` paths in `data/products.ts` and React components.
- CSS `url(...)` backgrounds, including `components/Indutsries/Industries.css`.
- Inline `backgroundImage` values, including the hero slides and industry cards.
- `<img src=...>` values for logos, gallery/items, and testimonials. Product views in `app/products/page.tsx`, `app/products/[slug]/page.tsx`, and `components/Products.tsx` use Next.js `<Image>` with image values from `data/products.ts`.
- App metadata icons in `app/layout.tsx`.
- Existing third-party photo/avatar URLs such as Unsplash and pravatar. Those are already URLs, not files in `public/images`; decide separately whether to keep them or copy them into your bucket. If you want literally every project image served from your bucket, these third-party images also need to be uploaded and their URLs changed.

The project currently has local references in product data, hero slides, brand logos, industry cards, machine/feature sections, navigation/footer, gallery content, and app icons. One image may be referenced in more than one place. Reuse the same verified public URL for every occurrence of the same image.

### 7. Replace references in a later code change

When you are ready to make the actual code change, replace each local path with its verified public URL. This includes image data fields and both CSS and inline background URLs. Keep `alt` text, layout, sizing, and image presentation unchanged. Update app icons too if they should move to Storage.

For ordinary browser `<img>` elements and CSS backgrounds, a public HTTPS URL can be used directly. Product views in this project use Next.js `<Image>` (`next/image`), so add a narrow `images.remotePatterns` entry in `next.config.js` when changing their product image URLs. Next.js requires remote host configuration when its image optimizer fetches external images. Replace the placeholders below with your actual project reference and bucket name:

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '<project-ref>.supabase.co',
        pathname: '/storage/v1/object/public/<bucket>/**',
      },
    ],
  },
}

module.exports = nextConfig
```

The existing `next.config.js` currently has no image-host configuration. Restart the Next.js development server after changing this config. The native `<img>` and CSS background references need no `remotePatterns` entry for direct loading, though using one consistent public hostname is still easiest to maintain.

### 8. Test the migration before removing local copies

Once the code is updated:

1. Start the site locally and check the home page, product list/detail pages, industries, gallery, testimonials, navigation/footer, and app icon.
2. Check browser developer tools for failed image requests, especially `404`, mixed-content, and blocked remote-image errors.
3. Check that photos with spaces/capital letters load and that every duplicate reference uses the same path.
4. Check the deployed site as well as local development; deployment must use the same project/bucket and public URL.
5. Keep `public/images` until every page and deployed build has been verified. Removing local copies is a separate cleanup step.

## Optional: using the S3 credentials in a future server-side uploader

If you later automate uploads from this Next.js project, keep S3 credentials in server-only environment variables, for example:

```text
SUPABASE_S3_ENDPOINT=https://<project-ref>.storage.supabase.co/storage/v1/s3
SUPABASE_S3_REGION=<project-region>
SUPABASE_S3_BUCKET=<bucket-name>
SUPABASE_S3_ACCESS_KEY_ID=<server-only-access-key-id>
SUPABASE_S3_SECRET_ACCESS_KEY=<server-only-secret-access-key>
```

Use them only in a server route, build/deployment secret store, or a trusted local upload tool. Do not prefix them with `NEXT_PUBLIC_`. The repository's `.gitignore` ignores `.env`; verify secrets are not tracked before saving anything. Production deployments should use the host's secret/environment-variable settings. This project does not need a Flask service just to upload a fixed set of website images.

## Quick choice guide

| Need | Recommended approach |
|---|---|
| Display public product/brand images | Public Supabase Storage bucket + public HTTPS URL |
| Upload the current 109 files once | Supabase Dashboard, or a trusted S3-compatible client |
| Keep private images private | Private bucket + authenticated access or short-lived signed URLs |
| Automate uploads later | Server-side Next.js route/job or trusted build script with server-only S3 credentials |
| Choose the framework for this website | Stay with existing Next.js + React; use Flask only for a separate Python backend need |

## Official references

- [Supabase S3 compatibility](https://supabase.com/docs/guides/storage/s3/compatibility)
- [Supabase S3 authentication](https://supabase.com/docs/guides/storage/s3/authentication)
- [Supabase serving Storage assets](https://supabase.com/docs/guides/storage/serving/downloads)
- [Supabase Storage bucket access models](https://supabase.com/docs/guides/storage/buckets/fundamentals)
- [Next.js 14 Image component and remote patterns](https://nextjs.org/docs/14/app/api-reference/components/image)
