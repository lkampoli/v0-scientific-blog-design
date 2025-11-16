import Header from '@/components/header'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="border-b border-border bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h1 className="text-5xl font-bold mb-6">About This Blog</h1>
            <p className="text-xl text-muted-foreground">
              Dedicated to advancing knowledge in computational fluid dynamics, numerical methods, and space exploration technologies.
            </p>
          </div>
        </section>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Mission */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              This blog aims to bridge the gap between academic research and practical engineering applications in computational fluid dynamics. Through in-depth articles, tutorials, and case studies, we explore the cutting edge of numerical methods, hypersonic aerodynamics, and the technologies enabling space exploration.
            </p>
          </section>

          {/* Topics */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Topics We Cover</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Computational Fluid Dynamics', desc: 'RANS, LES, DNS, and turbulence modeling techniques' },
                { title: 'Numerical Methods', desc: 'Finite volume, finite element, and spectral methods' },
                { title: 'Mesh Generation', desc: 'Structured, unstructured, and hybrid mesh strategies' },
                { title: 'Hypersonics', desc: 'Shock-boundary layer interactions and high-temperature effects' },
                { title: 'Space Technology', desc: 'Rocket aerodynamics and re-entry vehicle design' },
                { title: 'CFD Software', desc: 'Practical guides for ANSYS, OpenFOAM, and other tools' },
              ].map((topic) => (
                <div key={topic.title} className="p-6 border border-border rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">{topic.title}</h3>
                  <p className="text-muted-foreground">{topic.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Author Section */}
          <section className="mb-16 p-8 border border-cyan-glow rounded-lg bg-card">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-32 h-32 rounded-lg bg-gradient-to-br from-secondary to-accent flex-shrink-0 flex items-center justify-center">
                <span className="text-4xl font-bold text-white">👨‍🔬</span>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3">About the Author</h3>
                <p className="text-muted-foreground mb-4">
                  With over a decade of experience in computational fluid dynamics research and engineering applications, I've contributed to numerous aerospace projects ranging from supersonic aircraft design to hypersonic vehicle development and space launch systems.
                </p>
                <p className="text-muted-foreground mb-4">
                  My passion lies in demystifying complex numerical methods and sharing practical insights from real-world CFD applications. This blog is a platform to connect with fellow engineers, researchers, and students interested in advancing the field.
                </p>
                <div className="flex gap-3">
                  <Link href="https://linkedin.com" target="_blank">
                    <Button variant="outline">LinkedIn</Button>
                  </Link>
                  <Link href="https://github.com" target="_blank">
                    <Button variant="outline">GitHub</Button>
                  </Link>
                  <Link href="https://twitter.com" target="_blank">
                    <Button variant="outline">X</Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Get In Touch */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
            <p className="text-muted-foreground mb-8">
              Have questions, suggestions, or want to collaborate? I'd love to hear from you.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90">
                Contact Me
              </Button>
            </Link>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
