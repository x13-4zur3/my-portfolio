"use client"

import { motion } from "framer-motion"

export function Logo() {
  return (
    <motion.div
      whileHover={{ scale: 1.1, rotate: 5 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      className="relative flex items-center justify-center"
    >
      <motion.span
        className="text-4xl font-black text-foreground dark:text-white"
        style={{ fontFamily: "'Righteous', 'Outfit', sans-serif" }}
      >
        4
      </motion.span>
    </motion.div>
  )
}
