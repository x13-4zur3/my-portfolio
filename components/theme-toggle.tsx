"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-lg glass-card flex items-center justify-center">
        <div className="w-5 h-5" />
      </div>
    )
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="w-10 h-10 rounded-lg glass-card glass-card-hover flex items-center justify-center group"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <motion.div
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Sun className="w-5 h-5 text-primary group-hover:text-yellow-400 transition-colors" />
        </motion.div>
      ) : (
        <motion.div
          initial={{ rotate: 90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Moon className="w-5 h-5 text-primary group-hover:text-blue-400 transition-colors" />
        </motion.div>
      )}
    </motion.button>
  )
}
