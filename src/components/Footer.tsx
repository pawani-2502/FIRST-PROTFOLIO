import { site } from "../data/site";

export function Footer() {
  return (
    <footer className="border-t border-white/5 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-muted md:flex-row">
        <p>
          © {new Date().getFullYear()} {site.name}. Built with React & Vite.
        </p>
        <p className="font-mono text-xs">Seeking software development internships</p>
      </div>
    </footer>
  );
}
