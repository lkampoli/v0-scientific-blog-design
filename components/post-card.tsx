import Link from 'next/link'
import { Badge } from '@/components/ui/badge'

interface Post {
  id: number
  title: string
  excerpt: string
  category: string
  date: string
  image: string
  slug: string
}

export default function PostCard({ post }: { post: Post }) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <article className="group cursor-pointer overflow-hidden rounded-lg border border-border bg-card hover:border-secondary transition-all hover:shadow-md">
        <div className="overflow-hidden relative h-48">
          <img
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center gap-2 mb-3">
            <Badge variant="secondary" className="text-xs">{post.category}</Badge>
            <span className="text-xs text-muted-foreground">{new Date(post.date).toLocaleDateString()}</span>
          </div>
          <h3 className="text-lg font-bold group-hover:text-secondary transition-colors mb-2">
            {post.title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
            {post.excerpt}
          </p>
          <div className="flex items-center gap-2 text-secondary font-semibold text-sm group-hover:gap-3 transition-all">
            Read More
            <span>→</span>
          </div>
        </div>
      </article>
    </Link>
  )
}
