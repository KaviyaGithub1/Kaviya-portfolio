"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";
import { ArrowDown, Mail, Download, Grid, MessageSquare } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import Image from "next/image";

export function Hero() {
  const [text, setText] = useState("");
  const fullText = "Full Stack Developer";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center relative px-6 md:px-12 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        
        {/* Text Column */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left order-2 md:order-1 z-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl md:text-2xl font-medium tracking-wide mb-3 text-muted-foreground"
          >
            Hello, I'm
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-[5rem] font-bold tracking-tight mb-4 text-foreground leading-tight"
          >
            Kaviya<br />
            <span className="gradient-text">Arivarasan</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl md:text-3xl font-medium text-foreground mb-6 flex items-center justify-center md:justify-start"
          >
            <span className="text-muted-foreground mr-2">I'm a</span>
            <span className="text-primary">{text}</span>
            <span className="animate-pulse ml-1 text-primary">|</span>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed font-light"
          >
            Building responsive, scalable and user-friendly web applications.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4 justify-center md:justify-start"
          >
            <a
              href="#projects"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-all flex items-center gap-2"
            >
              <Grid className="w-5 h-5" /> View Projects
            </a>
            <a
              href="/resume.pdf"
              download
              className="px-6 py-3 border border-border text-foreground rounded-full font-medium hover:bg-muted transition-all flex items-center gap-2"
            >
              <Download className="w-5 h-5" /> Download Resume
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-border text-foreground rounded-full font-medium hover:bg-muted transition-all flex items-center gap-2"
            >
              <MessageSquare className="w-5 h-5" /> Contact Me
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-8 flex gap-6 text-muted-foreground justify-center md:justify-start"
          >
             <a href={resumeData.contact.github} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors transform hover:scale-110">
                <GithubIcon className="w-6 h-6" />
             </a>
             <a href={resumeData.contact.linkedin} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors transform hover:scale-110">
                <LinkedinIcon className="w-6 h-6" />
             </a>
             <a href={`mailto:${resumeData.contact.email}`} className="hover:text-primary transition-colors transform hover:scale-110">
                <Mail className="w-6 h-6" />
             </a>
          </motion.div>
        </div>

        {/* Image Column */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="order-1 md:order-2 flex justify-center items-center relative"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px] flex justify-center items-center">
            {/* Glowing orb background */}
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-[100px]"></div>
            
            {/* Image container */}
            <div className="relative w-3/4 h-3/4 rounded-full overflow-hidden border-[6px] border-background/50 z-10">
              <Image 
                src="/profile.jpg" 
                alt={resumeData.name} 
                fill 
                className="object-cover object-[center_10%] scale-[1.65]"
                sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 400px"
              />
            </div>

            {/* Orbiting dots */}
            <div className="absolute w-full h-full animate-[spin_10s_linear_infinite] border border-border/30 rounded-full">
              <div className="absolute top-0 left-1/2 -mt-2 -ml-2 w-4 h-4 bg-primary rounded-full shadow-[0_0_15px_#3b82f6]"></div>
              <div className="absolute bottom-1/4 right-0 -mr-2 w-3 h-3 bg-purple-500 rounded-full shadow-[0_0_15px_#a855f7]"></div>
              <div className="absolute bottom-1/4 left-0 -ml-2 w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_10px_#60a5fa]"></div>
            </div>
          </div>
        </motion.div>
        
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors z-20"
      >
        <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center p-1">
          <div className="w-1.5 h-2 bg-current rounded-full animate-bounce"></div>
        </div>
        <span className="text-xs font-medium tracking-widest uppercase">Scroll Down</span>
      </motion.div>
    </section>
  );
}
