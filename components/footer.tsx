import Link from 'next/link'
import { Button } from '@/components/ui/button'

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com', icon: 'Github' },
  { name: 'LinkedIn', href: 'https://linkedin.com', icon: 'Linkedin' },
  { name: 'X', href: 'https://x.com', icon: 'Twitter' },
  { name: 'Instagram', href: 'https://instagram.com', icon: 'Instagram' },
  { name: 'YouTube', href: 'https://youtube.com', icon: 'Youtube' },
  { name: 'Reddit', href: 'https://reddit.com', icon: 'MessageCircle' },
  { name: 'TikTok', href: 'https://tiktok.com', icon: 'Music2' },
  { name: 'Telegram', href: 'https://telegram.org', icon: 'Send' },
  { name: 'WeChat', href: '#', icon: 'MessageSquare' },
  { name: 'Mastodon', href: 'https://mastodon.social', icon: 'Share2' },
  { name: 'Substack', href: 'https://substack.com', icon: 'Mail' },
  { name: 'Medium', href: 'https://medium.com', icon: 'BookOpen' },
  { name: 'WordPress', href: 'https://wordpress.com', icon: 'FileText' },
  { name: 'Buy Me Coffee', href: 'https://buymeacoffee.com', icon: 'Coffee' },
]

export default function Footer() {
  return (
    <footer className="w-full border-t border-border bg-card text-card-foreground">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Social Links */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold mb-6">Connect With Me</h3>
          <div className="flex flex-wrap gap-2">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                title={link.name}
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 h-6 flex items-center justify-center text-muted-foreground hover:text-secondary transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.2" />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8 pb-8 border-b border-border">
          <div>
            <h4 className="font-semibold mb-3">Content</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/blog" className="hover:text-secondary transition-colors">Blog</Link></li>
              <li><Link href="/research" className="hover:text-secondary transition-colors">Research</Link></li>
              <li><Link href="/tutorials" className="hover:text-secondary transition-colors">Tutorials</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/papers" className="hover:text-secondary transition-colors">Papers</Link></li>
              <li><Link href="/tools" className="hover:text-secondary transition-colors">Tools</Link></li>
              <li><Link href="/datasets" className="hover:text-secondary transition-colors">Datasets</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">About</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-secondary transition-colors">About Me</Link></li>
              <li><Link href="/cv" className="hover:text-secondary transition-colors">CV</Link></li>
              <li><Link href="/contact" className="hover:text-secondary transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy" className="hover:text-secondary transition-colors">Privacy</Link></li>
              <li><Link href="/terms" className="hover:text-secondary transition-colors">Terms</Link></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-muted-foreground">
          <p>© 2025 CFD & Hypersonics Blog. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
