"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const skills = [
  { name: "C++", category: "Systems", level: 90, icon: "⚡" },
  { name: "Lua", category: "Scripting", level: 88, icon: "🌙" },
  { name: "TypeScript", category: "Web", level: 92, icon: "📘" },
  { name: "Python", category: "Scripting", level: 90, icon: "🐍" },
  { name: "JavaScript", category: "Web", level: 90, icon: "✨" },
  { name: "React", category: "Web", level: 92, icon: "⚛️" },
  { name: "Next.js", category: "Web", level: 90, icon: "▲" },
  { name: "Node.js", category: "Backend", level: 88, icon: "🟢" },
  { name: "Git", category: "Tools", level: 92, icon: "🔀" },
  { name: "Blender", category: "3D Art", level: 85, icon: "🎨" },
  { name: "Figma", category: "Design", level: 88, icon: "🎯" },
  { name: "MongoDB", category: "Database", level: 85, icon: "🗄️" },
]

const categories = ["All", "Systems", "Web", "Backend", "Scripting", "Database", "Tools", "3D Art", "Design"]

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredSkills = activeCategory === "All" ? skills : skills.filter((skill) => skill.category === activeCategory)

  return (
    <section id="skills" className="py-32 px-4 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 0],
            opacity: [0.02, 0.04, 0.02],
          }}
          transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -180, 0],
            opacity: [0.02, 0.05, 0.02],
          }}
          transition={{ duration: 35, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Technologies & Skills</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Programming languages, frameworks, and tools I use to build immersive digital experiences
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-3 justify-center mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeCategory === category
                  ? "bg-gradient-to-r from-primary via-purple-500 to-pink-500 text-white shadow-lg shadow-primary/50"
                  : "glass-card glass-card-hover text-muted-foreground"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-card p-6 rounded-3xl transition-all group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl group-hover:scale-125 transition-transform">{skill.icon}</span>
                  <h3 className="text-xl font-semibold">{skill.name}</h3>
                </div>
                <span className="text-sm text-muted-foreground px-3 py-1 rounded-full bg-primary/10">
                  {skill.category}
                </span>
              </div>
              <div className="w-full bg-muted/20 rounded-full h-2.5 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.05 + 0.3, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full"
                />
              </div>
              <p className="text-sm text-muted-foreground mt-2 text-right font-semibold">{skill.level}%</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
