"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function AnalogClock() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date())
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  // Convert to EDT (UTC-4)
  const edtTime = new Date(time.toLocaleString("en-US", { timeZone: "America/Toronto" }))
  const hours = edtTime.getHours() % 12
  const minutes = edtTime.getMinutes()
  const seconds = edtTime.getSeconds()

  const secondAngle = (seconds / 60) * 360
  const minuteAngle = (minutes / 60) * 360 + (seconds / 60) * 6
  const hourAngle = (hours / 12) * 360 + (minutes / 60) * 30

  return (
    <div className="relative w-16 h-16 rounded-full border-2 border-foreground/20 bg-background/50 backdrop-blur-sm">
      {/* Clock face dots */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-foreground/40 rounded-full"
          style={{
            top: "50%",
            left: "50%",
            transform: `translate(-50%, -50%) rotate(${i * 30}deg) translateY(-24px)`,
          }}
        />
      ))}

      {/* Hour hand */}
      <motion.div
        className="absolute w-0.5 h-5 bg-foreground rounded-full origin-bottom"
        style={{
          top: "50%",
          left: "50%",
          transform: `translate(-50%, -100%) rotate(${hourAngle}deg)`,
        }}
        animate={{ rotate: hourAngle }}
        transition={{ type: "spring", stiffness: 50 }}
      />

      {/* Minute hand */}
      <motion.div
        className="absolute w-0.5 h-6 bg-foreground rounded-full origin-bottom"
        style={{
          top: "50%",
          left: "50%",
          transform: `translate(-50%, -100%) rotate(${minuteAngle}deg)`,
        }}
        animate={{ rotate: minuteAngle }}
        transition={{ type: "spring", stiffness: 50 }}
      />

      {/* Second hand */}
      <motion.div
        className="absolute w-px h-7 bg-primary rounded-full origin-bottom"
        style={{
          top: "50%",
          left: "50%",
          transform: `translate(-50%, -100%) rotate(${secondAngle}deg)`,
        }}
        animate={{ rotate: secondAngle }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
      />

      {/* Center dot */}
      <div className="absolute w-2 h-2 bg-primary rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10" />
    </div>
  )
}
