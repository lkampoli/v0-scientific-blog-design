'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">CFD</span>
          </div>
          <span className="hidden sm:inline font-bold text-lg">CFD Blog</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="/blog" className="text-sm font-medium hover:text-secondary transition-colors">
            Blog
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-secondary transition-colors">
            About
          </Link>
          <Link href="/research" className="text-sm font-medium hover:text-secondary transition-colors">
            Research
          </Link>
          <Button variant="outline" size="sm">Subscribe</Button>
        </div>

        <button 
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden border-t border-border p-4 space-y-2">
          <Link href="/blog" className="block py-2 hover:text-secondary">Blog</Link>
          <Link href="/about" className="block py-2 hover:text-secondary">About</Link>
          <Link href="/research" className="block py-2 hover:text-secondary">Research</Link>
          <Button className="w-full mt-2">Subscribe</Button>
        </div>
      )}
    </header>
  )
}
