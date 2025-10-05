"use client"

import { motion } from "framer-motion"
import { Briefcase, Calendar } from "lucide-react"

const experiences = [
  {
    title: "Freelance Software Developer",
    company: "Self-Employed",
    location: "Toronto, ON",
    period: "2023 - Present",
    description:
      "Building custom web applications and software solutions for clients. Specializing in full-stack development with modern technologies and delivering high-quality, scalable solutions.",
    technologies: ["React", "Next.js", "TypeScript", "Python", "C++"],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-32 px-4 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.02, 0.04, 0.02],
          }}
          transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute top-1/3 left-1/3 w-96 h-96 bg-pink-500 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Work Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            My journey as a freelance developer, creating innovative solutions for diverse clients
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, x: 10 }}
              className="glass-card p-8 rounded-3xl transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-gradient-to-br from-primary via-purple-500 to-pink-500 text-white">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-1">{exp.title}</h3>
                    <p className="text-lg text-primary font-semibold">{exp.company}</p>
                    <p className="text-sm text-muted-foreground">{exp.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm font-medium">{exp.period}</span>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4 text-pretty">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary font-medium hover:bg-primary/20 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
