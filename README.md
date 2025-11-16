# CFD & Hypersonics Scientific Blog

A modern, space-themed scientific blog focused on computational fluid dynamics, numerical methods, hypersonics, and space exploration technologies.

**Live Demo**: https://lkampoli.github.io/scientific-blog

## Features

- **Space/CFD Theme**: Dark aesthetic with cyan and orange accents inspired by hypersonic flow visualization
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Blog Functionality**: 
  - Full blog listing with search and category filtering
  - Individual post pages with LaTeX support
  - Comment system for reader engagement
  - Social sharing buttons
- **Monetization Ready**:
  - Ad spaces (top, bottom, sidebar)
  - Newsletter subscription with configurable provider
  - Buy Me a Coffee integration
- **Social Integration**: 14+ social media platforms (GitHub, LinkedIn, X, Instagram, YouTube, Reddit, TikTok, Telegram, WeChat, Mastodon, Substack, Medium, WordPress)
- **GitHub Pages Ready**: Static export configuration included
- **SEO Optimized**: Metadata, Open Graph, and Twitter Card support

## Quick Start

### Installation

1. **Using shadcn CLI** (Recommended):
\`\`\`bash
npx shadcn-cli@latest init -d
\`\`\`

2. **Or clone and install manually**:
\`\`\`bash
git clone https://github.com/lkampoli/v0-scientific-blog-design.git
cd v0-scientific-blog-design
npm install
npm run dev
\`\`\`

### Configuration

Update `lib/config.ts` with your details:

\`\`\`typescript
export const siteConfig = {
  siteName: 'CFD & Hypersonics Blog',
  siteUrl: 'https://lkampoli.github.io/scientific-blog',
  social: {
    github: 'https://github.com/lkampoli',
    linkedin: 'https://linkedin.com/in/yourprofile',
    twitter: 'https://x.com/yourhandle',
    // ... add more social links
  },
  newsletter: {
    provider: 'substack',
    endpoint: 'https://yourname.substack.com/api/v1/subscribe',
  },
}
\`\`\`

## Deployment

### Deploy to GitHub Pages

1. **Push to GitHub**:
\`\`\`bash
git push origin main
\`\`\`

2. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Source: GitHub Actions
   - Custom domain (optional): Add your domain

3. **GitHub Action Deployment**:
   - The workflow in `.github/workflows/deploy.yml` automatically builds and deploys on push
   - Your blog goes live at: https://lkampoli.github.io/scientific-blog

4. **Update next.config.mjs**:
   - Change `basePath: '/your-repo-name'` if using project pages
   - Remove `basePath` if using user/org pages

### Deploy to Vercel

\`\`\`bash
npm install -g vercel
vercel
\`\`\`

### Deploy to Netlify

\`\`\`bash
npm install -g netlify-cli
netlify deploy
\`\`\`

## Blog Management

### Adding New Posts

Edit `app/blog/page.tsx` and `app/blog/[slug]/page.tsx` to add post data:

\`\`\`typescript
const allPosts = [
  {
    id: 3,
    title: 'Your Article Title',
    excerpt: 'Brief description...',
    category: 'CFD Theory',
    date: '2025-01-15',
    image: '/placeholder.svg?key=unique',
    slug: 'your-article-slug',
    content: `<h2>Content here</h2>...`
  }
]
\`\`\`

### Integrations Setup

#### Newsletter (Substack)
1. Create Substack account
2. Get API endpoint from Substack settings
3. Update `lib/config.ts` with your endpoint

#### Comments (Disqus)
1. Create Disqus account
2. Add shortname to config
3. Implement in `components/comment-section.tsx`

#### Analytics (Google Analytics)
1. Create Google Analytics property
2. Add ID to config
3. Integrate in `app/layout.tsx`

#### Ads (Google AdSense)
1. Apply for Google AdSense
2. Add Publisher ID to config
3. Place ads in `components/ad-space.tsx`

## Directory Structure

\`\`\`
scientific-blog/
├── app/
│   ├── layout.tsx           # Root layout
│   ├── globals.css          # Global styles + theme
│   ├── page.tsx             # Homepage
│   ├── blog/
│   │   ├── page.tsx         # Blog listing
│   │   └── [slug]/
│   │       └── page.tsx     # Individual post
│   ├── about/page.tsx       # About page
│   └── contact/page.tsx     # Contact page
├── components/
│   ├── header.tsx           # Navigation header
│   ├── footer.tsx           # Footer with social links
│   ├── post-card.tsx        # Blog post card
│   ├── featured-post.tsx    # Featured article
│   ├── newsletter-box.tsx   # Newsletter signup
│   ├── comment-section.tsx  # Comments
│   ├── ad-space.tsx         # Ad placeholders
│   └── social-links.tsx     # Social media links
├── lib/
│   ├── config.ts            # Site configuration
│   └── metadata.ts          # SEO metadata
├── public/                  # Static assets
└── next.config.mjs          # Next.js config
\`\`\`

## Customization

### Color Scheme

Edit the design tokens in `app/globals.css`:

\`\`\`css
:root {
  --primary: oklch(0.25 0.15 260);      /* Deep blue */
  --secondary: oklch(0.6 0.15 200);     /* Cyan accent */
  --accent: oklch(0.65 0.2 40);         /* Orange accent */
}

.dark {
  --primary: oklch(0.7 0.15 200);       /* Bright cyan */
  --secondary: oklch(0.65 0.2 200);     /* Neon cyan */
  --accent: oklch(0.7 0.2 40);          /* Bright orange */
}
\`\`\`

### Typography

Fonts are configured in `app/layout.tsx` and `app/globals.css`:

\`\`\`typescript
import { Geist, Geist_Mono } from 'next/font/google'
\`\`\`

Change to your preferred Google Font:

\`\`\`typescript
import { Inter, JetBrains_Mono } from 'next/font/google'
\`\`\`

### Social Links

Update `components/social-links.tsx` with your actual profile URLs.

## Building for Production

\`\`\`bash
# Build static export
npm run build

# Output is in the 'out' directory
ls out/

# Test locally before deployment
npx serve out/
\`\`\`

## Technologies

- **Framework**: Next.js 16 with App Router
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod
- **Deployment**: GitHub Pages (or Vercel/Netlify)

## SEO Features

- Open Graph meta tags
- Twitter Card support
- Structured metadata
- Sitemap ready
- Mobile-optimized

## Performance

- Static site generation (SSG)
- Optimized images
- Minimal JavaScript
- Fast load times
- Lighthouse optimized

## License

MIT License - feel free to use for your scientific blog

## Support & Contributions

For issues, feature requests, or contributions, please open an issue on GitHub: https://github.com/lkampoli/v0-scientific-blog-design

---

Built with passion for CFD researchers, engineers, and space enthusiasts.
