"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";
import { FolderGit2, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/icons";

export function Projects() {
  return (
    <section id="projects" className="py-20 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-semibold mb-2 tracking-tight text-center md:text-left">
          <span className="gradient-text">Featured</span> Projects
        </h2>
        <p className="text-muted-foreground mb-8 text-center md:text-left">Some things I've built</p>

        <div className="grid md:grid-cols-2 gap-8">
          {resumeData.projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card p-8 rounded-2xl flex flex-col h-full hover:-translate-y-2 hover:shadow-[0_10px_30px_-15px_rgba(59,130,246,0.3)] transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-10 group-hover:bg-primary/10 transition-colors"></div>
              <div className="flex justify-between items-center mb-8">
                <div className="p-3 bg-primary/10 text-primary rounded-xl">
                  <FolderGit2 className="w-8 h-8" />
                </div>
                <div className="flex gap-4">
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110" aria-label="GitHub Link">
                    <GithubIcon className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110" aria-label="External Link">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <div className="flex-grow space-y-3 text-muted-foreground mb-8 text-sm leading-relaxed">
                {project.description.map((desc, i) => (
                  <p key={i}>{desc}</p>
                ))}
              </div>

              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 text-xs font-mono text-muted-foreground/80">
                  {project.techStack.split(',').map((tech, i) => (
                    <span key={i} className="px-2.5 py-1 bg-background/50 rounded-md border border-border/50 text-primary">
                      {tech.trim()}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
