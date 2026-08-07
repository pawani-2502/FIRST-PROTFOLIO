import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { education } from "../data/site";

export function Education() {
  return (
    <section id="education" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="section-label">04. Education</p>
        <h2 className="section-title mt-2">Academic Journey</h2>

        <div className="mt-10 space-y-4">
          {education.map((item, index) => (
            <motion.div
              key={item.school}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="card flex flex-col gap-4 p-6 md:flex-row md:items-center md:justify-between"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-xl border border-border bg-accent/10 p-3 text-accent2">
                  <GraduationCap size={20} />
                </div>
                <div>
                  <h3 className="font-semibold">{item.school}</h3>
                  <p className="text-sm text-white/80">{item.degree}</p>
                  <p className="mt-1 text-sm text-muted">{item.detail}</p>
                </div>
              </div>
              <span className="font-mono text-sm text-accent2">{item.period}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
