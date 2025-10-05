"use client"

import { useEffect, useState } from "react"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Toronto map background */}
      <div className="absolute inset-0">
        <iframe
          src="https://www.openstreetmap.org/export/embed.html?bbox=-79.4512%2C43.6205%2C-79.3470%2C43.7081&layer=mapnik"
          className="w-full h-full opacity-20 blur-sm"
          style={{ border: 0, pointerEvents: "none" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background" />
      </div>

      {/* Floating orbs for depth */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div
        className={`relative z-10 max-w-5xl mx-auto text-center transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-8">
          <span className="text-sm text-muted-foreground">Based in Toronto, Canada</span>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent leading-tight">
          Software Developer
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
          Building innovative solutions with modern technologies and clean code
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <a href="#projects" className="glass-card glass-card-hover px-8 py-4 rounded-xl text-foreground font-medium">
            View Projects
          </a>
          <a
            href="#contact"
            className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-medium hover:opacity-90 transition-opacity"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  )
}
