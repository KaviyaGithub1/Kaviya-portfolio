"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";
import { Mail, Phone, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 px-6 max-w-4xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-primary font-medium tracking-widest uppercase mb-4 text-sm">What's Next?</p>
        <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-foreground">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed font-light">
          Although I'm currently looking for new opportunities, my inbox is always open. 
          Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8">
           <a href={`mailto:${resumeData.contact.email}`} className="glass-card px-6 py-4 rounded-xl flex items-center gap-3 text-foreground hover:text-primary hover:-translate-y-1 transition-all">
              <div className="p-2 bg-primary/10 text-primary rounded-lg"><Mail className="w-5 h-5" /></div>
              <span className="font-medium text-sm">{resumeData.contact.email}</span>
           </a>
           <a href={`tel:${resumeData.contact.phone.replace(/ /g, '')}`} className="glass-card px-6 py-4 rounded-xl flex items-center gap-3 text-foreground hover:text-primary hover:-translate-y-1 transition-all">
              <div className="p-2 bg-primary/10 text-primary rounded-lg"><Phone className="w-5 h-5" /></div>
              <span className="font-medium text-sm">{resumeData.contact.phone}</span>
           </a>
           <div className="glass-card px-6 py-4 rounded-xl flex items-center gap-3 text-foreground">
              <div className="p-2 bg-primary/10 text-primary rounded-lg"><MapPin className="w-5 h-5" /></div>
              <span className="font-medium text-sm">{resumeData.contact.location}</span>
           </div>
        </div>

        <a
          href={`mailto:${resumeData.contact.email}`}
          className="inline-block px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
        >
          Say Hello
        </a>
      </motion.div>
    </section>
  );
}
