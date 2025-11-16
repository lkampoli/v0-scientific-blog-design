'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer'
import PostCard from '@/components/post-card'
import { Button } from '@/components/ui/button'

// Extended blog data
const allPosts = [
  {
    id: 1,
    title: 'Advanced Turbulence Modeling in Supersonic Flows',
    excerpt: 'Exploring RANS vs LES approaches for hypersonic vehicle design and the challenges of capturing shock-boundary layer interactions.',
    category: 'CFD Theory',
    date: '2025-01-10',
    image: '/placeholder.svg?key=w07xj',
    slug: 'turbulence-modeling-supersonic'
  },
  {
    id: 2,
    title: 'Mesh Independence Studies in Unstructured Grids',
    excerpt: 'Practical guide to conducting mesh independence studies for CFD simulations with emphasis on boundary layer resolution.',
    category: 'Numerical Methods',
    date: '2025-01-05',
    image: '/placeholder.svg?key=5rb0v',
    slug: 'mesh-independence-unstructured'
  },
  {
    id: 3,
    title: 'Finite Volume Method: From Theory to Implementation',
    excerpt: 'Step-by-step tutorial on implementing FVM solvers and understanding flux calculations for compressible flows.',
    category: 'Numerical Methods',
    date: '2024-12-28',
    image: '/placeholder.svg?key=xddhb',
    slug: 'fvm-theory-implementation'
  },
  {
    id: 4,
    title: 'Space Launch Vehicle Aerodynamics at Hypersonic Speeds',
    excerpt: 'Analysis of aerothermodynamic challenges during ascent and re-entry phases of orbital rockets.',
    category: 'Space Exploration',
    date: '2024-12-20',
    image: '/placeholder.svg?key=nac1z',
    slug: 'rocket-hypersonic-aerodynamics'
  },
  {
    id: 5,
    title: 'Implicit vs Explicit Time Integration: When to Use What',
    excerpt: 'Comparative analysis of temporal discretization schemes and stability considerations for different flow regimes.',
    category: 'CFD Theory',
    date: '2024-12-15',
    image: '/placeholder.svg?key=jy81t',
    slug: 'time-integration-schemes'
  },
  {
    id: 6,
    title: 'Boundary Layer Separation and Flow Control',
    excerpt: 'Techniques for controlling boundary layer separation in supersonic and hypersonic flows using active and passive methods.',
    category: 'Aerodynamics',
    date: '2024-12-10',
    image: '/placeholder.svg?key=abc123',
    slug: 'boundary-layer-separation'
  },
  {
    id: 7,
    title: 'Shock-Expansion Theory for Supersonic Airfoils',
    excerpt: 'Comprehensive guide to shock-expansion theory and its application in designing supersonic wings and control surfaces.',
    category: 'Aerodynamics',
    date: '2024-12-05',
    image: '/placeholder.svg?key=def456',
    slug: 'shock-expansion-theory'
  },
  {
    id: 8,
    title: 'Structured vs Unstructured Mesh: Pros and Cons',
    excerpt: 'In-depth comparison of structured and unstructured mesh generation strategies for complex aerodynamic geometries.',
    category: 'Mesh Generation',
    date: '2024-11-30',
    image: '/placeholder.svg?key=ghi789',
    slug: 'mesh-structured-unstructured'
  },
]

const categories = ['All', 'CFD Theory', 'Numerical Methods', 'Space Exploration', 'Aerodynamics', 'Mesh Generation']

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredPosts = useMemo(() => {
    return allPosts.filter(post => {
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesCategory && matchesSearch
    })
  }, [selectedCategory, searchQuery])

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        {/* Page Header */}
        <section className="border-b border-border bg-card">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-4xl font-bold mb-4">Blog</h1>
            <p className="text-muted-foreground">Explore articles on CFD, numerical methods, hypersonics, and space exploration.</p>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <input
              type="search"
              placeholder="Search posts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-secondary text-secondary-foreground'
                    : 'border border-border hover:border-secondary hover:bg-secondary/5'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Results Count */}
          <div className="mt-6 text-sm text-muted-foreground">
            {filteredPosts.length} {filteredPosts.length === 1 ? 'post' : 'posts'} found
          </div>
        </section>

        {/* Posts Grid */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredPosts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground mb-4">No posts found matching your criteria.</p>
              <button
                onClick={() => {
                  setSelectedCategory('All')
                  setSearchQuery('')
                }}
                className="text-secondary font-semibold hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  )
}
