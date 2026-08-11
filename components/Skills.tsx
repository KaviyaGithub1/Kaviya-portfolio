"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";
import { Code2, Database, Layout, PenTool, Settings, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: <Layout className="w-5 h-5" />,
    skills: resumeData.skills.frontend,
  },
  {
    title: "Backend",
    icon: <Settings className="w-5 h-5" />,
    skills: resumeData.skills.backend,
  },
  {
    title: "Databases",
    icon: <Database className="w-5 h-5" />,
    skills: resumeData.skills.databases,
  },
  {
    title: "Programming",
    icon: <Code2 className="w-5 h-5" />,
    skills: resumeData.skills.programming,
  },
  {
    title: "Tools & Platforms",
    icon: <Wrench className="w-5 h-5" />,
    skills: resumeData.skills.tools,
  },
  {
    title: "Soft Skills",
    icon: <PenTool className="w-5 h-5" />,
    skills: resumeData.skills.softSkills,
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-semibold mb-2 tracking-tight text-center md:text-left">
          <span className="gradient-text">Technical</span> Skills
        </h2>
        <p className="text-muted-foreground mb-8 text-center md:text-left">Technologies I work with</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card p-6 rounded-2xl hover:border-primary/50 transition-colors group"
            >
              <h3 className="text-lg font-semibold mb-6 flex items-center gap-3 text-foreground">
                <div className="p-2 bg-primary/10 text-primary rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  {category.icon}
                </div>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-background/50 border border-border/50 text-foreground text-sm rounded-full group-hover:border-primary/30 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
