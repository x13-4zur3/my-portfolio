"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export function LocationSection() {
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
        zoomControl: true,
        scrollWheelZoom: true,
        dragging: true,
        touchZoom: true,
        doubleClickZoom: true,
        tap: true, // Enable tap interactions for mobile
        tapTolerance: 15,
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
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative min-h-screen overflow-hidden"
    >
      <div ref={mapRef} className="absolute inset-0 w-full h-full" />

      {/* Add Leaflet CSS */}
      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
        integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
        crossOrigin=""
      />
    </motion.section>
  )
}
