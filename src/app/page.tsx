import CardMesh from "@/components/card-mesh/card-mesh";
import HeroMesh from "@/components/hero-mesh/hero-mesh";

type Project = {
  name: string;
  description: string;
  tags: string[];
  github: string;
  live: string | null;
};

const projects: Project[] = [
  {
    name: "beetForge",
    description: "A full-stack Gamified goal & habit tracker web application built with modern technologies.",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
    github: "https://github.com/Jophkins/beetforge",
    live: "thebeet.dev/beetforge",
  },
  {
    name: "BeetCinema backend",
    description: "A backend side for the beetcinema web application for ticket booking and management. Built with modern technologies. Movie ticketing system.",
    tags: ["Node.js", "Next.js", "PostgreSQL", "gRPC"],
    github: "https://github.com/beetcinema/backend",
    live: "thebeet.dev/beetcinema",
  },
  {
    name: "LastShoot",
    description: "Simple and minimalistic photo gallery web application for your photos.",
    tags: ["Next.js", "PWA", "Firebase"],
    github: "https://github.com/Jophkins/lastshoot",
    live: "thebeet.dev/lastshoot",
  },
  {
    name: "TimeFlow",
    description: "Pomodoro timer with customizable settings and spotify/youtube integration.",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
    github: "https://github.com/Jophkins/timeflow",
    live: "thebeet.dev/timeflow",
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 font-sans dark:bg-black">
      <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col px-6 py-16 sm:px-8 sm:py-24">
        {/* Hero Section */}
        <header className="relative mb-16 overflow-hidden rounded-4xl corner-bevel border border-zinc-200/50 p-8 dark:border-zinc-800/50 sm:p-12">
          {/* Low-poly SVG background */}
          <HeroMesh />

          {/* Readability overlay */}
          <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-zinc-50/90 via-zinc-50/70 to-zinc-50/90 dark:from-black/80 dark:via-black/60 dark:to-black/80" />

          {/* Hero content */}
          <div className="relative z-10 flex flex-col items-center text-center sm:items-start sm:text-left">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-sm font-medium text-amber-600 dark:border-amber-400/30 dark:bg-amber-400/10 dark:text-amber-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-500 opacity-75 dark:bg-amber-400" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-500 dark:bg-amber-400" />
              </span>
              In Development
            </div>

            <p className="mb-2 text-xl font-medium text-zinc-700 dark:text-zinc-300">
              Hey there!
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-2">
              <span className="text-xl font-medium text-zinc-700 dark:text-zinc-300">I am</span>
              <h1 className="mb-4 text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
                Serhii Buriak
              </h1>
            </div>

            <p className="mb-2 text-xl font-medium text-zinc-700 dark:text-zinc-300">
              Full-Cycle Developer
            </p>

            <p className="max-w-lg text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
              Building modern web experiences with TypeScript, Next.js, and Node.js.
              From scratch to production through all stages of the development and devops process.
              This website is currently under construction — check back soon for the full experience.
            </p>
          </div>
        </header>

        {/* Projects Section */}
        <section className="mb-16">
          <h2 className="mb-8 text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
            Projects
          </h2>

          <div className="grid gap-6 sm:grid-cols-2">
            {projects.map(project => (
              <article
                key={project.name}
                className="relative flex flex-col overflow-hidden rounded-2xl corner-bevel border border-zinc-200 bg-white p-6 transition-shadow hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900"
              >
                {/* Cyberpunk low-poly background */}
                <CardMesh />

                {/* Readability overlay */}
                <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-white/80 via-white/70 to-white/80 dark:from-zinc-900/75 dark:via-zinc-900/65 dark:to-zinc-900/75" />

                {/* Card content */}
                <div className="relative z-10">
                  <h3 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                    {project.name}
                  </h3>

                  <p className="mb-4 flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {project.description}
                  </p>

                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span
                        key={tag}
                        className="rounded-full bg-zinc-100/80 px-2.5 py-0.5 text-xs font-medium text-zinc-700 dark:bg-zinc-800/80 dark:text-zinc-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 text-sm font-medium">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-700 underline-offset-4 hover:text-zinc-900 hover:underline dark:text-zinc-300 dark:hover:text-zinc-100"
                    >
                      GitHub
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-700 underline-offset-4 hover:text-zinc-900 hover:underline dark:text-zinc-300 dark:hover:text-zinc-100"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-200 py-8 dark:border-zinc-800">
        <p className="text-center text-sm text-zinc-500 dark:text-zinc-500">
          UI/UX will be updated to match thebeet style. Stay tuned.
        </p>
        <p className="text-center text-sm text-zinc-500 dark:text-zinc-500">
          Serhii Buriak © 2026
        </p>
        <p className="px-4 text-sm text-zinc-500 dark:text-zinc-500">
          ver. 0.2.1
        </p>
      </footer>
    </div>
  );
}
