import { motion } from "framer-motion";
import { ExternalLink, Github, Star } from "lucide-react";
import { projects } from "../data/site";

export function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="section-label">03. Projects</p>
        <h2 className="section-title mt-2">Featured Work</h2>
        <p className="mt-3 max-w-2xl text-muted">
          End-to-end applications spanning AI, civic tech, real-time systems, and algorithmic
          engines — all with GitHub links where available.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`card group p-6 transition hover:border-accent/40 hover:shadow-glow ${
                project.featured ? "md:col-span-1" : ""
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  {project.featured && (
                    <span className="mb-2 inline-flex items-center gap-1 rounded-full border border-accent/30 bg-accent/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-accent2">
                      <Star size={10} />
                      Featured
                    </span>
                  )}
                  <h3 className="text-lg font-bold">{project.title}</h3>
                  <p className="text-sm text-accent2">{project.subtitle}</p>
                </div>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-lg border border-border p-2 text-muted transition group-hover:border-accent/50 group-hover:text-white"
                    aria-label={`${project.title} on GitHub`}
                  >
                    <Github size={16} />
                  </a>
                )}
              </div>

              <p className="mt-4 text-sm leading-relaxed text-white/75">{project.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-white/5 px-2 py-1 font-mono text-[11px] text-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-accent2 transition hover:text-white"
                >
                  View on GitHub
                  <ExternalLink size={14} />
                </a>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
