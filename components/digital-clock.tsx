"use client"

import { useState, useEffect } from "react"
import { Clock } from "lucide-react"

export function DigitalClock() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formattedTime = time.toLocaleString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    timeZone: "America/Toronto",
  })

  return (
    <div className="flex items-center gap-2">
      <Clock className="w-4 h-4 text-foreground" />
      <span className="text-sm font-medium text-foreground">{formattedTime}</span>
    </div>
  )
}
