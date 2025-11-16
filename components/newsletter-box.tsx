'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'

export default function NewsletterBox() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Integrate with email service (Substack, Mailchimp, etc.)
    setSubscribed(true)
    setEmail('')
    setTimeout(() => setSubscribed(false), 3000)
  }

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="relative overflow-hidden rounded-2xl border border-accent-glow bg-gradient-to-br from-primary/5 to-secondary/5 p-8 sm:p-12">
        <div className="absolute inset-0 opacity-10 mesh-bg" />
        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-3">Stay Updated</h2>
          <p className="text-muted-foreground mb-6">
            Get the latest articles on CFD, hypersonics, and numerical methods delivered to your inbox.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary"
            />
            <Button type="submit" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8">
              Subscribe
            </Button>
          </form>
          {subscribed && (
            <p className="text-sm text-secondary mt-3">Thanks for subscribing!</p>
          )}
        </div>
      </div>
    </section>
  )
}
