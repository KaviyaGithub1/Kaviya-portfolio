"use client";

import { GraduationCap, MapPin, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";

export function About() {
  return (
    <section id="about" className="py-20 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-semibold mb-2 tracking-tight">
          <span className="gradient-text">About</span> Me
        </h2>
        <p className="text-muted-foreground mb-8">Get to know me and my journey</p>
        
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Left Column: Text & Stats */}
          <div className="space-y-8">
            <p className="text-lg text-foreground leading-relaxed font-light">
              I'm a passionate <strong>Full Stack Developer</strong> and <strong>Electronics &amp; Communication Engineering</strong> student at Jeppiaar Engineering College. I have hands-on experience in building responsive web applications using modern technologies like <strong>React.js, Node.js, Express.js, MongoDB, and PostgreSQL</strong>.
            </p>
            <p className="text-lg text-foreground leading-relaxed font-light">
              With a strong foundation in both engineering principles and software development, I bring a unique perspective to problem-solving. I'm deeply interested in creating user-friendly software solutions, learning industry best practices, and contributing to innovative development teams.
            </p>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="glass-card p-6 rounded-2xl flex flex-col items-center justify-center text-center">
                <span className="text-4xl font-bold text-foreground mb-2">8.16</span>
                <span className="text-sm text-muted-foreground font-medium uppercase tracking-wider">CGPA</span>
              </div>
              <div className="glass-card p-6 rounded-2xl flex flex-col items-center justify-center text-center">
                <span className="text-4xl font-bold text-foreground mb-2">2+</span>
                <span className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Projects</span>
              </div>
              <div className="glass-card p-6 rounded-2xl flex flex-col items-center justify-center text-center">
                <span className="text-4xl font-bold text-foreground mb-2">2</span>
                <span className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Internships</span>
              </div>
              <div className="glass-card p-6 rounded-2xl flex flex-col items-center justify-center text-center">
                <span className="text-4xl font-bold text-foreground mb-2">2</span>
                <span className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Certifications</span>
              </div>
            </div>
          </div>
          
          {/* Right Column: Details Cards */}
          <div className="space-y-6">
            <div className="glass-card p-6 rounded-2xl flex items-start gap-4 hover:-translate-y-1 transition-transform">
              <div className="p-3 bg-primary/20 text-primary rounded-xl">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">Education</h3>
                <p className="text-foreground">B.E. Electronics & Communication</p>
                <p className="text-sm text-muted-foreground mt-2">Jeppiaar Engineering College • 2022–2026</p>
              </div>
            </div>
            
            <div className="glass-card p-6 rounded-2xl flex items-start gap-4 hover:-translate-y-1 transition-transform">
              <div className="p-3 bg-purple-500/20 text-purple-400 rounded-xl">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">Location</h3>
                <p className="text-foreground">Chennai, Tamil Nadu</p>
                <p className="text-sm text-muted-foreground mt-2">India</p>
              </div>
            </div>
            
            <div className="glass-card p-6 rounded-2xl flex items-start gap-4 hover:-translate-y-1 transition-transform">
              <div className="p-3 bg-blue-500/20 text-blue-400 rounded-xl">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">Interests</h3>
                <p className="text-foreground">Full Stack Development, UI/UX, AI Tools</p>
                <p className="text-sm text-muted-foreground mt-2">Always learning new technologies</p>
              </div>
            </div>
          </div>
          
        </div>
      </motion.div>
    </section>
  );
}
