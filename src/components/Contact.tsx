import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { site } from "../data/site";

export function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="section-label">06. Contact</p>
        <h2 className="section-title mt-2">Let&apos;s Connect</h2>
        <p className="mt-3 max-w-xl text-muted">
          Open to internships, collaborations, and interesting project opportunities. Reach out
          anytime.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card mt-10 grid gap-6 p-8 md:grid-cols-2"
        >
          <div className="space-y-4">
            <a
              href={`mailto:${site.email}`}
              className="flex items-center gap-3 text-sm text-white/80 transition hover:text-white"
            >
              <Mail className="text-accent2" size={18} />
              {site.email}
            </a>
            <a
              href={`tel:${site.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-3 text-sm text-white/80 transition hover:text-white"
            >
              <Phone className="text-accent2" size={18} />
              {site.phone}
            </a>
            <p className="flex items-center gap-3 text-sm text-white/80">
              <MapPin className="text-accent2" size={18} />
              {site.location}
            </p>
          </div>

          <div className="flex flex-col justify-center gap-4">
            <a href={site.github} target="_blank" rel="noreferrer" className="btn-outline">
              <Github size={16} />
              GitHub — pawani-2502
            </a>
            <a href={site.linkedin} target="_blank" rel="noreferrer" className="btn-outline">
              <Linkedin size={16} />
              LinkedIn — pawani-sharma02
            </a>
            <a href={site.resumeUrl} download className="btn-primary">
              Download Resume PDF
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
