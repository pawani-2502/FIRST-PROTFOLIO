import { motion } from "framer-motion";
import { MapPin, Phone } from "lucide-react";
import { languages, site } from "../data/site";

export function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="section-label">01. About</p>
        <h2 className="section-title mt-2">Who I Am</h2>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card p-8"
          >
            <p className="leading-relaxed text-white/80">{site.summary}</p>
            <p className="mt-4 leading-relaxed text-white/80">
              Passionate about creating secure, scalable, and user-centric software while
              continuously learning industry-level development practices. Open to software
              development internships and collaborative projects.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="card space-y-4 p-8"
          >
            <div className="flex items-start gap-3 text-sm text-white/80">
              <MapPin className="mt-0.5 shrink-0 text-accent2" size={18} />
              <span>{site.location}</span>
            </div>
            <div className="flex items-start gap-3 text-sm text-white/80">
              <Phone className="mt-0.5 shrink-0 text-accent2" size={18} />
              <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-white">
                {site.phone}
              </a>
            </div>
            <div className="border-t border-border pt-4">
              <p className="font-mono text-xs uppercase tracking-widest text-accent2">Languages</p>
              <ul className="mt-3 space-y-2">
                {languages.map((lang) => (
                  <li key={lang.name} className="flex justify-between text-sm">
                    <span>{lang.name}</span>
                    <span className="text-muted">{lang.level}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
