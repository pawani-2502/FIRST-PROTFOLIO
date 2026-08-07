import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { certifications } from "../data/site";

export function Certifications() {
  return (
    <section id="certifications" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="section-label">05. Certifications</p>
        <h2 className="section-title mt-2">Credentials & Achievements</h2>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="card p-6"
            >
              <Award className="text-accent2" size={22} />
              <h3 className="mt-4 text-sm font-semibold leading-snug">{cert.title}</h3>
              <p className="mt-2 text-xs text-muted">{cert.issuer}</p>
              <p className="mt-3 font-mono text-sm text-accent2">{cert.year}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
