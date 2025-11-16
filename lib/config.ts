/**
 * Blog Configuration
 * Update these values to customize your blog
 */

export const siteConfig = {
  // Site metadata
  siteName: 'CFD & Hypersonics Blog',
  siteDescription: 'Deep dive into computational fluid dynamics, numerical methods, hypersonics, and space exploration',
  siteUrl: 'https://yoursite.com',
  
  // Social media
  social: {
    github: 'https://github.com/yourprofile',
    linkedin: 'https://linkedin.com/in/yourprofile',
    twitter: 'https://x.com/yourhandle',
    instagram: 'https://instagram.com/yourprofile',
    youtube: 'https://youtube.com/@yourchannel',
  },
  
  // Newsletter
  newsletter: {
    provider: 'substack', // 'substack', 'mailchimp', 'email'
    endpoint: 'https://yourname.substack.com/api/v1/subscribe',
  },
  
  // Monetization
  ads: {
    googleAdSenseId: 'ca-pub-xxxxxxxxxxxxxxxx',
    enabled: true,
  },
  
  // Comments
  comments: {
    provider: 'disqus', // 'disqus', 'utterances', 'giscus'
    disqusShortname: 'your-disqus-shortname',
  },
  
  // Analytics
  analytics: {
    googleAnalyticsId: 'G-XXXXXXXXXX',
  },
}
