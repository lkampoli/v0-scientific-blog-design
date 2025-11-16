'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer'
import CommentSection from '@/components/comment-section'
import AdSpace from '@/components/ad-space'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

// Mock blog post data
const blogPosts: Record<string, any> = {
  'turbulence-modeling-supersonic': {
    id: 1,
    title: 'Advanced Turbulence Modeling in Supersonic Flows',
    category: 'CFD Theory',
    date: '2025-01-10',
    author: 'Dr. Computational Researcher',
    image: '/placeholder.svg?key=w07xj',
    content: `
    <h2>Introduction to Turbulence Modeling</h2>
    <p>Turbulence modeling is one of the most challenging aspects of computational fluid dynamics, particularly at supersonic and hypersonic speeds. The interaction between shock waves and turbulent boundary layers introduces additional complexities that demand sophisticated modeling approaches.</p>
    
    <h2>RANS vs LES: A Comparative Analysis</h2>
    <p>Reynolds-Averaged Navier-Stokes (RANS) equations have been the workhorse of engineering CFD for decades. They offer computational efficiency at the cost of requiring closure models for the Reynolds stress tensor. Large Eddy Simulation (LES), on the other hand, provides higher fidelity by directly simulating large-scale turbulent structures while modeling only the smallest, least anisotropic scales.</p>
    
    <p>The choice between RANS and LES depends on several factors:</p>
    <ul>
      <li>Computational resources available</li>
      <li>Required accuracy and resolution</li>
      <li>Flow physics of interest</li>
      <li>Development timeline</li>
    </ul>
    
    <h2>Shock-Boundary Layer Interactions</h2>
    <p>At hypersonic speeds, shock-boundary layer interactions become particularly important. These interactions can lead to flow separation, which dramatically affects vehicle performance and aerodynamic control authority.</p>
    
    <h2>Conclusion</h2>
    <p>Modern turbulence modeling requires a deep understanding of the underlying physics and careful consideration of the computational trade-offs involved in CFD analysis.</p>
    `,
    readTime: 8,
    tags: ['Turbulence', 'CFD', 'Hypersonics', 'RANS', 'LES']
  },
  'mesh-independence-unstructured': {
    id: 2,
    title: 'Mesh Independence Studies in Unstructured Grids',
    category: 'Numerical Methods',
    date: '2025-01-05',
    author: 'Prof. Numerical Analysis',
    image: '/placeholder.svg?key=5rb0v',
    content: `
    <h2>What is Mesh Independence?</h2>
    <p>Mesh independence is a fundamental requirement in CFD analysis. It ensures that the solution no longer changes significantly as the mesh is refined, indicating convergence to the true physical solution.</p>
    
    <h2>Grid Refinement Methodology</h2>
    <p>A systematic approach to mesh independence involves creating multiple grids with increasing refinement levels, typically following a geometric progression.</p>
    
    <h2>Boundary Layer Considerations</h2>
    <p>The boundary layer region requires special attention. The first cell height in the boundary layer affects the accuracy of wall shear stress predictions and separation characteristics.</p>
    
    <h2>Practical Guidelines</h2>
    <p>For most aerodynamic applications, follow these guidelines for mesh refinement in critical regions.</p>
    `,
    readTime: 6,
    tags: ['Mesh Generation', 'Grid Refinement', 'Boundary Layer', 'Unstructured Grids']
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug] || blogPosts['turbulence-modeling-supersonic']
  const [liked, setLiked] = useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        {/* Hero Image */}
        <div className="w-full h-96 bg-card overflow-hidden relative border-b border-border">
          <img
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Container */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Article Header */}
          <article className="py-12">
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="secondary">{post.category}</Badge>
              <span className="text-sm text-muted-foreground">{post.readTime} min read</span>
            </div>
            
            <h1 className="text-5xl font-bold mb-6">{post.title}</h1>
            
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 pb-8 border-b border-border">
              <div>
                <p className="font-semibold">{post.author}</p>
                <p className="text-sm text-muted-foreground">{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
              </div>
              <div className="flex gap-2 ml-auto">
                <button
                  onClick={() => setLiked(!liked)}
                  className={`px-4 py-2 rounded-lg border transition-all ${
                    liked
                      ? 'bg-accent text-accent-foreground border-accent'
                      : 'border-border hover:border-secondary'
                  }`}
                >
                  {liked ? '❤️' : '🤍'} {liked ? 'Liked' : 'Like'}
                </button>
                <Button variant="outline">Share</Button>
              </div>
            </div>

            {/* Ad Space - Top of Article */}
            <div className="my-8">
              <AdSpace position="top" />
            </div>

            {/* Article Content */}
            <div className="prose prose-invert max-w-none my-12 text-foreground">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>

            {/* Ad Space - Bottom of Article */}
            <div className="my-8">
              <AdSpace position="bottom" />
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 py-8 border-t border-b border-border">
              {post.tags.map((tag: string) => (
                <Link key={tag} href={`/blog?search=${tag}`}>
                  <span className="px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm hover:bg-secondary/20 transition-colors cursor-pointer">
                    #{tag}
                  </span>
                </Link>
              ))}
            </div>

            {/* Article Footer */}
            <div className="py-8 border-b border-border">
              <p className="text-muted-foreground mb-4">Found this helpful? Consider sharing with others interested in CFD and numerical methods.</p>
              <div className="flex gap-3 flex-wrap">
                <Link href="https://twitter.com/intent/tweet" target="_blank">
                  <Button variant="outline" size="sm">Share on X</Button>
                </Link>
                <Link href="https://linkedin.com/sharing/share-offsite" target="_blank">
                  <Button variant="outline" size="sm">Share on LinkedIn</Button>
                </Link>
              </div>
            </div>
          </article>

          {/* Related Posts */}
          <section className="py-12 border-b border-border">
            <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Mesh Independence Studies', slug: 'mesh-independence-unstructured' },
                { title: 'Shock-Expansion Theory', slug: 'shock-expansion-theory' }
              ].map((related) => (
                <Link key={related.slug} href={`/blog/${related.slug}`}>
                  <div className="p-4 border border-border rounded-lg hover:border-secondary hover:bg-secondary/5 transition-all">
                    <p className="font-semibold hover:text-secondary transition-colors">{related.title}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Comments Section */}
          <section className="py-12">
            <CommentSection postId={post.id} postTitle={post.title} />
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
