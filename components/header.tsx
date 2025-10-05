"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ThemeToggle } from "./theme-toggle"
import { Logo } from "./logo"
import { DigitalClock } from "./digital-clock"
import { usePathname } from "next/navigation"

export function Header() {
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 glass-card border-b backdrop-blur-xl bg-background/80"
    >
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6, ease: "easeInOut" }}>
              <Logo />
            </motion.div>
            <motion.span
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="text-xl font-bold bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent"
            >
              Azure
            </motion.span>
          </Link>

          <div className="flex items-center gap-8">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/"
                className={`text-sm font-medium relative group ${
                  isActive("/") ? "text-primary" : "text-foreground hover:text-primary"
                } transition-colors`}
              >
                Portfolio
                <motion.span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary via-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"
                  initial={false}
                  animate={{ width: isActive("/") ? "100%" : "0%" }}
                />
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/about"
                className={`text-sm font-medium relative group ${
                  isActive("/about") ? "text-primary" : "text-foreground hover:text-primary"
                } transition-colors`}
              >
                About
                <motion.span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary via-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"
                  initial={false}
                  animate={{ width: isActive("/about") ? "100%" : "0%" }}
                />
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className={`text-sm font-medium relative group ${
                  isActive("/contact") ? "text-primary" : "text-foreground hover:text-primary"
                } transition-colors`}
              >
                Contact
                <motion.span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary via-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"
                  initial={false}
                  animate={{ width: isActive("/contact") ? "100%" : "0%" }}
                />
              </Link>
            </motion.div>

            <div className="hidden md:flex items-center">
              <DigitalClock />
            </div>

            <ThemeToggle />
          </div>
        </nav>
      </div>
    </motion.header>
  )
}
