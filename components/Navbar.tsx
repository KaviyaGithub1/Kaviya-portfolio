"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { resumeData } from "@/data/resume";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 px-6 flex justify-between items-center",
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm py-4" : "bg-transparent py-6"
      )}
    >
      <div className="font-bold text-2xl tracking-tighter text-primary">
        &lt;KA /&gt;
      </div>

      <nav className="hidden md:flex gap-6 items-center">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            {link.name}
          </a>
        ))}
      </nav>
      
      
      {/* Mobile Menu Button - simplified for brevity, just a contact button */}
      <div className="md:hidden">
        <a
          href={`mailto:${resumeData.contact.email}`}
          className="px-4 py-2 text-xs border border-primary text-primary rounded hover:bg-primary/10 transition-colors font-mono"
        >
          Contact
        </a>
      </div>
    </motion.header>
  );
}
