import Link from 'next/link'
import Image from 'next/image'
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

export default function FeaturedPost({ post }: { post: Post }) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <article className="group cursor-pointer overflow-hidden rounded-xl border border-cyan-glow bg-card hover:shadow-lg transition-all">
        <div className="flex flex-col md:flex-row h-full">
          <div className="md:w-1/2 overflow-hidden relative h-64 md:h-auto">
            <img
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="p-8 md:w-1/2 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Badge variant="secondary">{post.category}</Badge>
                <span className="text-sm text-muted-foreground">{new Date(post.date).toLocaleDateString()}</span>
              </div>
              <h3 className="text-2xl font-bold group-hover:text-secondary transition-colors mb-3">
                {post.title}
              </h3>
              <p className="text-muted-foreground">
                {post.excerpt}
              </p>
            </div>
            <div className="flex items-center gap-2 mt-6 text-secondary font-semibold group-hover:gap-3 transition-all">
              Read More
              <span>→</span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  )
}
