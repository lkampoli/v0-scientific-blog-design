# Deployment Guide

## GitHub Pages Deployment (Recommended)

### Step 1: Create GitHub Repository

\`\`\`bash
git init
git add .
git commit -m "Initial commit: Scientific blog"
git branch -M main
git remote add origin https://github.com/username/scientific-blog.git
git push -u origin main
\`\`\`

### Step 2: Configure Repository

1. Go to repository Settings → Pages
2. Source: Select "GitHub Actions"
3. (Optional) Add custom domain under "Custom domain"

### Step 3: Update Configuration

Edit `next.config.mjs`:

\`\`\`javascript
// For user/org pages (yourusername.github.io)
// Remove or comment out basePath

// For project pages (yourusername.github.io/scientific-blog)
basePath: '/scientific-blog',
assetPrefix: '/scientific-blog',
\`\`\`

### Step 4: Deploy

Push to main branch:
\`\`\`bash
git push origin main
\`\`\`

The GitHub Action will automatically build and deploy. Check Actions tab for status.

Your site will be live at:
- `https://yourusername.github.io/scientific-blog` (project pages)
- `https://yourusername.github.io` (user/org pages)

## Custom Domain Setup

### Using GitHub Pages with Custom Domain

1. **Update Configuration**:
   - Remove `basePath` from `next.config.mjs`
   - Update `.github/workflows/deploy.yml` CNAME section

2. **Add DNS Records** (depends on registrar):
   
   For CNAME (subdomain):
   \`\`\`
   CNAME  blog  yourusername.github.io
   \`\`\`
   
   For Apex Domain:
   \`\`\`
   A      @  185.199.108.153
   A      @  185.199.109.153
   A      @  185.199.110.153
   A      @  185.199.111.153
   \`\`\`

3. **Add to GitHub**:
   - Settings → Pages → Custom domain
   - Enter your domain name

4. **Update Site Config**:
   - `lib/config.ts`: Update `siteUrl`
   - `.env`: Update `NEXT_PUBLIC_SITE_URL`

## Vercel Deployment

\`\`\`bash
npm install -g vercel
vercel
\`\`\`

Connect your Git repository when prompted. Vercel will automatically detect Next.js and configure the build.

## Netlify Deployment

\`\`\`bash
npm install -g netlify-cli
netlify deploy --prod
\`\`\`

## Environmental Variables

Create `.env.local` with:

\`\`\`
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_NEWSLETTER_PROVIDER=substack
NEWSLETTER_API_ENDPOINT=https://yourname.substack.com/api/v1/subscribe
\`\`\`

## Building Locally

\`\`\`bash
npm run build
npm start
\`\`\`

Test the production build before deploying.

## Troubleshooting

### Site not loading after deployment

- Check repository is public
- Verify GitHub Pages is enabled
- Check Actions tab for build errors
- Ensure basePath matches your deployment URL

### Styles not loading

- Check `assetPrefix` is set correctly
- Clear browser cache
- Verify CSS is built in `.next/` or `out/`

### Images not displaying

- Use relative paths: `/image.jpg`
- Ensure images are in `public/` folder
- For GitHub Pages, include `basePath`: `/placeholder.svg?key=unique`

### 404 errors

- Check `trailingSlash: true` in config
- Verify routing paths match file structure
