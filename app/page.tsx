import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Header from '@/components/header'
import Footer from '@/components/footer'
import FeaturedPost from '@/components/featured-post'
import PostCard from '@/components/post-card'
import NewsletterBox from '@/components/newsletter-box'

// Mock blog data
const featuredPost = {
  id: 1,
  title: 'Advanced Turbulence Modeling in Supersonic Flows',
  excerpt: 'Exploring RANS vs LES approaches for hypersonic vehicle design and the challenges of capturing shock-boundary layer interactions.',
  category: 'CFD Theory',
  date: '2025-01-10',
  image: '/hypersonic-flow-simulation-rocket.jpg',
  slug: 'turbulence-modeling-supersonic'
}

const recentPosts = [
  {
    id: 2,
    title: 'Mesh Independence Studies in Unstructured Grids',
    excerpt: 'Practical guide to conducting mesh independence studies for CFD simulations with emphasis on boundary layer resolution.',
    category: 'Numerical Methods',
    date: '2025-01-05',
    image: '/computational-mesh-grid-cfd.jpg',
    slug: 'mesh-independence-unstructured'
  },
  {
    id: 3,
    title: 'Finite Volume Method: From Theory to Implementation',
    excerpt: 'Step-by-step tutorial on implementing FVM solvers and understanding flux calculations for compressible flows.',
    category: 'Numerical Methods',
    date: '2024-12-28',
    image: '/finite-volume-method-numerical-analysis.jpg',
    slug: 'fvm-theory-implementation'
  },
  {
    id: 4,
    title: 'Space Launch Vehicle Aerodynamics at Hypersonic Speeds',
    excerpt: 'Analysis of aerothermodynamic challenges during ascent and re-entry phases of orbital rockets.',
    category: 'Space Exploration',
    date: '2024-12-20',
    image: '/rocket-spaceship-hypersonic-aerodynamics.jpg',
    slug: 'rocket-hypersonic-aerodynamics'
  },
  {
    id: 5,
    title: 'Implicit vs Explicit Time Integration: When to Use What',
    excerpt: 'Comparative analysis of temporal discretization schemes and stability considerations for different flow regimes.',
    category: 'CFD Theory',
    date: '2024-12-15',
    image: '/numerical-integration-time-stepping.jpg',
    slug: 'time-integration-schemes'
  }
]

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section with Mesh Background */}
        <section className="relative mesh-bg overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-secondary/50 bg-secondary/5 mb-6">
                <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
                <span className="text-sm font-medium text-secondary">Exploring Advanced CFD & Space Tech</span>
              </div>
              <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-6">
                CFD & Hypersonics<br />
                <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Numerical Frontiers</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                Deep dives into computational fluid dynamics, numerical methods, mesh generation, and the physics of hypersonic flight and space exploration.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/blog">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Explore All Posts
                  </Button>
                </Link>
                <Button size="lg" variant="outline">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold mb-8">Featured Article</h2>
          <FeaturedPost post={featuredPost} />
        </section>

        {/* Recent Posts Grid */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Recent Posts</h2>
            <Link href="/blog">
              <Button variant="outline">View All</Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recentPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </section>

        {/* Newsletter Signup */}
        <NewsletterBox />

        {/* Topics Section */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold mb-8">Topics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['CFD Theory', 'Numerical Methods', 'Mesh Generation', 'Hypersonics', 'Space Exploration', 'Turbulence Modeling', 'Aerodynamics', 'Computational Techniques'].map((topic) => (
              <Link key={topic} href={`/blog?category=${topic}`}>
                <div className="p-4 border border-border rounded-lg hover:border-secondary hover:bg-secondary/5 transition-colors cursor-pointer">
                  <p className="font-semibold text-foreground">{topic}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
