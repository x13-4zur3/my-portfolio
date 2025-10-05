"use client"

import { motion } from "framer-motion"

export function Hero() {
  return (
    <section id="portfolio" className="pt-32 pb-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.03, 0.05, 0.03],
          }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute top-20 right-20 w-96 h-96 bg-primary rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
            opacity: [0.03, 0.06, 0.03],
          }}
          transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute bottom-20 left-20 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto max-w-4xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-6xl font-bold mb-6 text-balance"
        >
          Portfolio
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg text-muted-foreground leading-relaxed text-pretty mb-6"
        >
          Take a journey through my digital portfolio, where you'll discover a curated selection of my most impressive
          projects, each one telling a story of creativity, perseverance, and dedication to excellence. From sleek and
          intuitive user interfaces to robust and scalable backend architectures, every project is a testament to my
          ability to bring ideas to life.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-lg text-muted-foreground leading-relaxed text-pretty"
        >
          As a passionate software developer based in Toronto, I specialize in building modern applications using
          cutting-edge technologies. My expertise spans across multiple programming languages including C++, C, C#,
          Python, JavaScript, and TypeScript, with a strong focus on creating performant, scalable, and user-friendly
          solutions. Whether it's crafting elegant frontend experiences or architecting robust backend systems, I bring
          a comprehensive approach to every project. Welcome to my digital playground!
        </motion.p>
      </div>
    </section>
  )
}
