import Link from 'next/link'

interface SocialLink {
  name: string
  href: string
  icon: string
  label: string
}

const socialLinks: SocialLink[] = [
  { name: 'GitHub', href: 'https://github.com', icon: '🐙', label: 'GitHub Profile' },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/yourprofile', icon: '💼', label: 'LinkedIn Profile' },
  { name: 'X', href: 'https://x.com/yourhandle', icon: '𝕏', label: 'X (Twitter)' },
  { name: 'Instagram', href: 'https://instagram.com/yourprofile', icon: '📷', label: 'Instagram' },
  { name: 'YouTube', href: 'https://youtube.com/@yourchannel', icon: '▶️', label: 'YouTube Channel' },
  { name: 'Reddit', href: 'https://reddit.com/u/yourprofile', icon: '🤖', label: 'Reddit Profile' },
  { name: 'TikTok', href: 'https://tiktok.com/@yourprofile', icon: '🎵', label: 'TikTok' },
  { name: 'Telegram', href: 'https://t.me/yourchannel', icon: '✈️', label: 'Telegram Channel' },
  { name: 'WeChat', href: '#', icon: '💬', label: 'WeChat (scan QR code)' },
  { name: 'Mastodon', href: 'https://mastodon.social/@yourprofile', icon: '🔴', label: 'Mastodon' },
  { name: 'Substack', href: 'https://yourname.substack.com', icon: '📧', label: 'Substack Newsletter' },
  { name: 'Medium', href: 'https://medium.com/@yourprofile', icon: '📝', label: 'Medium Profile' },
  { name: 'WordPress', href: 'https://yoursite.wordpress.com', icon: '🔲', label: 'WordPress Blog' },
  { name: 'Buy Me Coffee', href: 'https://buymeacoffee.com/yourprofile', icon: '☕', label: 'Buy Me a Coffee' },
]

export default function SocialLinks() {
  return (
    <div className="flex flex-wrap gap-3">
      {socialLinks.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          title={link.label}
          className="group aspect-square w-10 h-10 flex items-center justify-center border border-border rounded-lg bg-card hover:border-secondary hover:bg-secondary/10 transition-all"
        >
          <span className="text-lg group-hover:scale-110 transition-transform">{link.icon}</span>
        </Link>
      ))}
    </div>
  )
}
