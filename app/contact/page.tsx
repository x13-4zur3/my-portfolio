"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Mail, Github, Instagram } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useRef } from "react"

export default function ContactPage() {
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === "undefined" || !mapRef.current) return

    // Dynamically import Leaflet to avoid SSR issues
    import("leaflet").then((L) => {
      // Clear any existing map
      if (mapRef.current) {
        mapRef.current.innerHTML = ""
      }

      const map = L.map(mapRef.current, {
        center: [43.6532, -79.3832], // Toronto coordinates
        zoom: 12,
        zoomControl: false,
        scrollWheelZoom: true,
        dragging: true,
        touchZoom: true,
        doubleClickZoom: true,
      })

      L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: "abcd",
        maxZoom: 20,
      }).addTo(map)

      // Add custom marker for Toronto
      const customIcon = L.divIcon({
        className: "custom-marker",
        html: `
          <div style="
            width: 32px;
            height: 32px;
            background: #06b6d4;
            border: 3px solid white;
            border-radius: 50%;
            box-shadow: 0 4px 12px rgba(6, 182, 212, 0.4);
            display: flex;
            align-items: center;
            justify-content: center;
          ">
            <div style="
              width: 12px;
              height: 12px;
              background: white;
              border-radius: 50%;
            "></div>
          </div>
        `,
        iconSize: [32, 32],
        iconAnchor: [16, 16],
      })

      L.marker([43.6532, -79.3832], { icon: customIcon })
        .addTo(map)
        .bindPopup("<strong>Toronto, ON</strong><br>Home Base")

      // Cleanup
      return () => {
        map.remove()
      }
    })
  }, [])

  return (
    <div className="min-h-screen relative">
      <div ref={mapRef} className="fixed inset-0 w-full h-full z-0" />

      {/* Add Leaflet CSS */}
      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
        integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
        crossOrigin=""
      />

      <div className="relative z-10">
        <Header />
        <main>
          <section className="pt-32 pb-12 px-6 min-h-screen flex items-center">
            <div className="container mx-auto max-w-4xl">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-5xl md:text-6xl font-bold mb-8 text-balance text-white drop-shadow-lg"
              >
                Get In Touch
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="space-y-6 text-lg leading-relaxed mb-12"
              >
                <p className="text-pretty text-white drop-shadow-lg">
                  I'm always excited to connect with fellow developers, potential collaborators, or anyone interested in
                  discussing technology and innovation. Whether you have a project in mind, want to explore
                  opportunities, or just want to say hello, feel free to reach out!
                </p>

                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <motion.a
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    href="mailto:xie.4zur3@hotmail.com"
                    className="p-6 border-2 border-white/30 hover:border-primary/50 transition-all group rounded-3xl"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-1 drop-shadow">Email</h3>
                        <p className="text-sm text-white/80 drop-shadow">xie.4zur3@hotmail.com</p>
                      </div>
                    </div>
                  </motion.a>

                  <motion.a
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    href="https://github.com/x13-4zur3"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-6 border-2 border-white/30 hover:border-primary/50 transition-all group rounded-3xl"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                        <Github className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-1 drop-shadow">GitHub</h3>
                        <p className="text-sm text-white/80 drop-shadow">@x13-4zur3</p>
                      </div>
                    </div>
                  </motion.a>

                  <motion.a
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    href="https://instagram.com/4zur3.xo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-6 border-2 border-white/30 hover:border-primary/50 transition-all group rounded-3xl"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                        <Instagram className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-1 drop-shadow">Instagram</h3>
                        <p className="text-sm text-white/80 drop-shadow">@4zur3.xo</p>
                      </div>
                    </div>
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  )
}
