"use client"

import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard",
    image: "/modern-ecommerce-dashboard-dark-theme.jpg",
    tags: ["React", "Next.js", "TypeScript", "PostgreSQL"],
    github: "#",
    demo: "#",
  },
  {
    title: "Real-Time Chat Application",
    description: "WebSocket-based chat app with end-to-end encryption, file sharing, and group conversations",
    image: "/chat-application-interface-dark-theme.jpg",
    tags: ["C#", "SignalR", "React", "SQL Server"],
    github: "#",
    demo: "#",
  },
  {
    title: "Data Visualization Dashboard",
    description: "Interactive analytics dashboard with real-time data processing and custom chart components",
    image: "/data-analytics-dashboard-dark-theme.png",
    tags: ["Python", "React", "D3.js", "FastAPI"],
    github: "#",
    demo: "#",
  },
  {
    title: "Game Engine",
    description: "Custom 2D game engine built from scratch with physics simulation and rendering pipeline",
    image: "/game-engine-editor-dark-theme.jpg",
    tags: ["C++", "OpenGL", "SDL2"],
    github: "#",
    demo: "#",
  },
  {
    title: "Machine Learning Pipeline",
    description: "Automated ML pipeline for data preprocessing, model training, and deployment",
    image: "/machine-learning-pipeline-visualization-dark-theme.jpg",
    tags: ["Python", "TensorFlow", "Docker", "AWS"],
    github: "#",
    demo: "#",
  },
  {
    title: "Task Management System",
    description: "Collaborative project management tool with kanban boards, time tracking, and team analytics",
    image: "/task-management-kanban-board-dark-theme.jpg",
    tags: ["TypeScript", "Next.js", "Prisma", "PostgreSQL"],
    github: "#",
    demo: "#",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-32 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent work showcasing different technologies and problem-solving approaches
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="glass-card rounded-xl overflow-hidden group hover:scale-105 transition-transform"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
