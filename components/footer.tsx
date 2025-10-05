"use client"

import { Github, Instagram, Mail } from "lucide-react"
import { motion } from "framer-motion"
import { Logo } from "./logo"

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border/50 bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center"
        >
          <div className="flex items-center gap-3 mb-3">
            <Logo />
            <span className="text-xl font-semibold">Azure</span>
          </div>
          <p className="text-sm text-muted-foreground mb-6 max-w-md">
            Software developer based in Toronto, building modern applications with cutting-edge technologies.
          </p>
          <div className="flex gap-3 mb-8">
            <motion.a
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/x13-4zur3"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-muted hover:bg-accent flex items-center justify-center transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              href="https://instagram.com/4zur3.xo"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-muted hover:bg-accent flex items-center justify-center transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:xie.4zur3@hotmail.com"
              className="w-9 h-9 rounded-lg bg-muted hover:bg-accent flex items-center justify-center transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </motion.a>
          </div>
          <p className="text-sm text-muted-foreground">Copyright © 2025 Azure. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}
