import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col bg-background text-foreground">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <footer className="py-6 text-center text-sm text-muted-foreground border-t border-border mt-20">
        <p>Built with Next.js, Tailwind CSS & Framer Motion</p>
        <p className="mt-2">© {new Date().getFullYear()} Kaviya Arivarasan. All rights reserved.</p>
      </footer>
    </>
  );
}
