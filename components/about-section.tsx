"use client"

import { Code2, Coffee, MapPin } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-32 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="glass-card p-8 md:p-12 rounded-2xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">About Me</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I'm a passionate software developer based in Toronto, specializing in building robust applications and
                solving complex problems with elegant code. I love exploring new technologies and creating innovative
                solutions.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, you can find me exploring Toronto's vibrant food scene, discovering new cafes, and
                capturing the city's unique moments.
              </p>
            </div>

            <div className="space-y-4">
              <div className="glass-card p-6 rounded-xl flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Code2 className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Clean Code</h3>
                  <p className="text-muted-foreground text-sm">
                    Writing maintainable, scalable, and efficient code is my priority
                  </p>
                </div>
              </div>

              <div className="glass-card p-6 rounded-xl flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Coffee className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Problem Solver</h3>
                  <p className="text-muted-foreground text-sm">
                    Tackling complex challenges with creative and practical solutions
                  </p>
                </div>
              </div>

              <div className="glass-card p-6 rounded-xl flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Toronto Based</h3>
                  <p className="text-muted-foreground text-sm">
                    Living and working in one of the most diverse tech hubs in North America
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
