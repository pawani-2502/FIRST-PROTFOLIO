import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { site } from "../data/site";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen px-6 pt-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label mb-4">Portfolio / 2026</p>
          <h1 className="text-5xl font-extrabold leading-tight tracking-tight md:text-7xl">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent">
              {site.name.split(" ")[0]}
            </span>
          </h1>
          <p className="mt-4 text-xl text-muted md:text-2xl">{site.role}</p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
            {site.tagline} Third-semester CS student at SRM University with Microsoft Azure
            certifications and hands-on full-stack experience.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#projects" className="btn-primary">
              View Projects
            </a>
            <a href={site.resumeUrl} download className="btn-outline">
              <Download size={16} />
              Download Resume
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-border p-2 text-muted transition hover:border-accent/50 hover:text-white"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-border p-2 text-muted transition hover:border-accent/50 hover:text-white"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={`mailto:${site.email}`}
              className="rounded-lg border border-border p-2 text-muted transition hover:border-accent/50 hover:text-white"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-accent/30 to-accent2/20 blur-3xl" />
          <div className="card relative overflow-hidden p-6 shadow-glow">
            <img
              src={site.profileImage}
              alt="Pawani Sharma profile"
              className="mx-auto h-72 w-72 rounded-2xl object-contain"
            />
            <div className="mt-6 grid grid-cols-2 gap-3 text-center text-sm">
              <div className="rounded-xl border border-border bg-white/5 p-3">
                <p className="font-mono text-accent2">CGPA</p>
                <p className="text-lg font-bold">9.42</p>
              </div>
              <div className="rounded-xl border border-border bg-white/5 p-3">
                <p className="font-mono text-accent2">Certs</p>
                <p className="text-lg font-bold">2 MS</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted transition hover:text-white"
        aria-label="Scroll to about"
      >
        <ArrowDown className="animate-bounce" size={22} />
      </a>
    </section>
  );
}
