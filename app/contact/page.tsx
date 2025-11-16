'use client'

import { useState } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Integrate with email service
    setSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        {/* Page Header */}
        <section className="border-b border-border bg-card">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-4xl font-bold mb-4">Get In Touch</h1>
            <p className="text-muted-foreground">Have a question or proposal? I'd love to hear from you.</p>
          </div>
        </section>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-secondary"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-secondary"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-secondary"
                placeholder="What is this about?"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-secondary resize-none"
                placeholder="Your message..."
              />
            </div>

            <Button type="submit" size="lg" className="bg-secondary hover:bg-secondary/90">
              Send Message
            </Button>

            {submitted && (
              <div className="p-4 bg-secondary/10 border border-secondary text-secondary rounded-lg">
                Thanks for reaching out! I'll get back to you soon.
              </div>
            )}
          </form>

          {/* Contact Info */}
          <div className="mt-16 pt-16 border-t border-border">
            <h2 className="text-2xl font-bold mb-8">Other Ways to Connect</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-muted-foreground">contact@cfdblogs.com</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Social Media</h3>
                <p className="text-muted-foreground">Follow me on LinkedIn, GitHub, and X</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
