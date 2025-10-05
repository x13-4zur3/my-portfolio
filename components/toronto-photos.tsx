"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const photos = [
  {
    title: "CN Tower at Sunset",
    image: "/placeholder.svg?height=400&width=600",
    description: "Iconic Toronto skyline featuring the CN Tower",
  },
  {
    title: "Distillery District",
    image: "/placeholder.svg?height=400&width=600",
    description: "Historic cobblestone streets and Victorian architecture",
  },
  {
    title: "Toronto Islands",
    image: "/placeholder.svg?height=400&width=600",
    description: "Peaceful waterfront escape from the city",
  },
  {
    title: "Graffiti Alley",
    image: "/placeholder.svg?height=400&width=600",
    description: "Vibrant street art in the heart of downtown",
  },
  {
    title: "St. Lawrence Market",
    image: "/placeholder.svg?height=400&width=600",
    description: "One of the world's best food markets",
  },
  {
    title: "Toronto Waterfront",
    image: "/placeholder.svg?height=400&width=600",
    description: "Beautiful Lake Ontario shoreline at dusk",
  },
]

export function TorontoPhotos() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 px-6 bg-background/50 relative overflow-hidden">
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.02, 0.04, 0.02],
        }}
        transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl -z-10"
      />

      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Toronto Life</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            When I'm not coding, you'll find me exploring Toronto's diverse neighborhoods, trying new restaurants, and
            capturing the city's unique character. Here are some of my favorite spots and moments from this incredible
            city I call home.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="glass-card rounded-xl overflow-hidden group cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={photo.image || "/placeholder.svg"}
                  alt={photo.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent"
                />
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-0 left-0 right-0 p-4"
                >
                  <h3 className="text-lg font-semibold mb-1">{photo.title}</h3>
                  <p className="text-sm text-muted-foreground">{photo.description}</p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-8 text-center"
        >
          <p className="text-sm text-muted-foreground italic">
            All photos captured during my adventures around Toronto. Feel free to ask me about any of these locations!
          </p>
        </motion.div>
      </div>
    </section>
  )
}
