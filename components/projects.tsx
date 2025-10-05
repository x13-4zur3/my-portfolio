"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Nepali Community of Belleville",
    description:
      "A community website for the Nepali Community of Belleville, built with modern web technologies. Features include event management, community news, photo galleries, and member resources. Designed with accessibility and mobile responsiveness in mind, serving as a central hub for the Nepali diaspora in Belleville to stay connected and informed.",
    image: "/Nepali Community of Belleville website.png",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    website: "https://www.nepalicommunityofbelleville.ca",
    github: "https://github.com/x13-4zur3/communitywebsite",
  },
  {
    title: "Productivity App",
    description:
      "An all-in-one productivity application combining a personal journal and task management system. Built with modern web technologies, featuring markdown support for journal entries, drag-and-drop task organization, priority levels, due dates, and progress tracking. Includes data persistence, search functionality, and a clean, distraction-free interface designed to boost daily productivity.",
    image: "/productivity-app-journal-todo-interface.jpg",
    tech: ["React", "TypeScript", "Tailwind CSS", "Local Storage"],
    github: "https://github.com/x13-4zur3/productivity",
  },
  {
    title: "Ninja Simulator",
    description:
      "A cooperative multiplayer Roblox game featuring real-time event systems and player progression tracking. Built with Lua and Roblox Studio, implementing engaging gameplay mechanics, reward systems, and community features. Achieved strong player engagement and positive community feedback post-launch.",
    image: "/ninja-game-roblox-multiplayer.jpg",
    tech: ["Lua", "Roblox Studio", "C++"],
    github: "https://github.com/x13-4zur3",
  },
]

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A showcase of my recent work spanning web development, game development, and systems programming. Each
            project demonstrates my commitment to clean code, scalable architecture, and exceptional user experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="glass-card glass-card-hover rounded-3xl overflow-hidden flex flex-col"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative h-48 bg-muted overflow-hidden"
              >
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              </motion.div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <motion.span
                      key={tech}
                      whileHover={{ scale: 1.1 }}
                      className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                {(project.website || project.github) && (
                  <div className="flex gap-3 pt-3 border-t border-border/50">
                    {project.website && (
                      <motion.a
                        href={project.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Visit Site
                      </motion.a>
                    )}
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        GitHub
                      </motion.a>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
