"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TorontoPhotos } from "@/components/toronto-photos"
import { motion } from "framer-motion"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="pt-32 pb-20 px-6">
          <div className="container mx-auto max-w-4xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-bold mb-8 text-balance"
            >
              About Me
            </motion.h1>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-pretty"
              >
                Hi, I'm <span className="text-foreground font-semibold">Azure</span>, a passionate software developer
                based in the vibrant city of <span className="text-foreground font-semibold">Toronto, Canada</span>. My
                journey in technology has been driven by an insatiable curiosity and a love for solving complex problems
                through elegant code.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-pretty"
              >
                With expertise spanning multiple programming languages including C++, C, C#, Python, JavaScript, and
                TypeScript, I bring a versatile approach to software development. Whether I'm optimizing low-level
                system performance with C++, building robust backend services with Python, or crafting beautiful user
                interfaces with modern web technologies, I thrive on the challenge of turning ideas into reality.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-pretty"
              >
                My development philosophy centers around writing clean, maintainable code that not only works but stands
                the test of time. I believe in continuous learning and staying current with emerging technologies,
                always seeking to expand my skill set and push the boundaries of what's possible.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-pretty"
              >
                When I'm not coding, you'll find me exploring Toronto's diverse neighborhoods, discovering new coffee
                shops, or capturing the city's unique character through photography. Toronto's multicultural energy and
                tech scene provide endless inspiration for both my personal and professional growth.
              </motion.p>
            </div>
          </div>
        </section>

        <TorontoPhotos />
      </main>
      <Footer />
    </div>
  )
}
