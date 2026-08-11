"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";
import { Briefcase, Award } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-20 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-semibold mb-2 tracking-tight text-center md:text-left">
          <span className="gradient-text">Experience</span> & Certifications
        </h2>
        <p className="text-muted-foreground mb-8 text-center md:text-left">My professional journey</p>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Experience Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3 text-foreground">
              <div className="p-2 bg-primary/20 text-primary rounded-lg"><Briefcase className="w-6 h-6" /></div> Internships
            </h3>
            <div className="space-y-8">
              {resumeData.experience.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative pl-8 border-l-2 border-primary/20 hover:border-primary transition-colors group"
                >
                  <div className="absolute w-4 h-4 bg-background border-[3px] border-primary rounded-full -left-[9px] top-1 group-hover:shadow-[0_0_10px_#3b82f6] transition-shadow" />
                  <div className="glass-card p-6 rounded-2xl -mt-4 mb-2 relative left-2">
                    <h4 className="text-xl font-bold text-foreground">{exp.role}</h4>
                    <div className="flex justify-between items-center mt-2 mb-4">
                      <span className="font-medium text-primary">{exp.company}</span>
                      <span className="text-sm font-mono text-muted-foreground">{exp.duration}</span>
                    </div>
                    <ul className="space-y-3 text-muted-foreground text-sm leading-relaxed">
                      {exp.description.map((desc, i) => (
                        <li key={i} className="flex gap-3 items-start">
                          <span className="text-primary mt-1 text-xs">▹</span>
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3 text-foreground">
              <div className="p-2 bg-purple-500/20 text-purple-400 rounded-lg"><Award className="w-6 h-6" /></div> Certifications
            </h3>
            <div className="space-y-6">
              {resumeData.certifications.map((cert, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="glass-card p-6 rounded-2xl hover:-translate-y-1 transition-transform border border-border"
                >
                  <h4 className="font-bold text-lg text-foreground">{cert.title}</h4>
                  <p className="text-primary font-medium mt-2">{cert.issuer}</p>
                  {cert.date && <p className="text-sm text-muted-foreground mt-1 font-mono">{cert.date}</p>}
                  <p className="text-sm text-muted-foreground mt-4 leading-relaxed">{cert.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
