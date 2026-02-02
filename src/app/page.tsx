import Image from "next/image";

import CardMesh from "@/components/card-mesh/card-mesh";

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
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Supabase"],
    github: "https://github.com/Jophkins/beetforge",
    live: "https://beetforge.thebeet.dev",
  },
  {
    name: "BeetCinema backend",
    description: "A backend side for the beetcinema web application for ticket booking and management. Built with modern technologies. Movie ticketing system.",
    tags: ["Node.js", "Next.js", "PostgreSQL", "gRPC"],
    github: "https://github.com/beetcinema/backend",
    live: "https://thebeet.dev/beetcinema",
  },
  {
    name: "LastShoot",
    description: "Simple and minimalistic photo gallery web application for your photos.",
    tags: ["Next.js", "PWA", "Firebase"],
    github: "https://github.com/Jophkins/lastshoot",
    live: "https://thebeet.dev/lastshoot",
  },
  {
    name: "TimeFlow",
    description: "Pomodoro timer with customizable settings and spotify/youtube integration.",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
    github: "https://github.com/Jophkins/timeflow",
    live: "https://thebeet.dev/timeflow",
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 font-sans dark:bg-black">
      <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col px-6 py-16 sm:px-8 sm:py-24">
        {/* In Development badge - above Hero */}
        <div className="mb-6 flex justify-center sm:justify-start">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-sm font-medium text-amber-600 dark:border-amber-400/30 dark:bg-amber-400/10 dark:text-amber-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-500 opacity-75 dark:bg-amber-400" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-500 dark:bg-amber-400" />
            </span>
            In Development
          </div>
        </div>

        {/* Hero ID Card */}
        <header className="group relative mb-16 overflow-hidden rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-lg shadow-zinc-200/50 transition-all duration-300 hover:shadow-xl hover:shadow-zinc-300/50 dark:border-zinc-800/80 dark:bg-zinc-900 dark:shadow-zinc-950/50 dark:hover:shadow-zinc-900/80 sm:p-8">
          {/* Gradient accent at top */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-500 via-emerald-500 to-cyan-500 opacity-80" />

          {/* ID Card header */}
          <div className="mb-6 flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
              ID Card
            </span>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-600 dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-400">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75 dark:bg-emerald-400" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400" />
                </span>
                Active
              </div>
              <span className="rounded-full border border-zinc-200 bg-zinc-50 px-2.5 py-1 font-mono text-xs text-zinc-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                SB-2026
              </span>
            </div>
          </div>

          {/* Main content grid */}
          <div className="grid items-center gap-8 sm:grid-cols-[auto_1fr] sm:gap-10">
            {/* Avatar */}
            <div className="flex justify-center sm:justify-start">
              <div className="overflow-hidden rounded-2xl border-2 border-zinc-100 bg-zinc-50 shadow-lg dark:border-zinc-800 dark:bg-zinc-800">
                <Image
                  src="/avatar.png"
                  alt="Serhii Buriak avatar"
                  width={200}
                  height={200}
                  className="h-auto w-36 sm:w-48"
                  priority
                />
              </div>
            </div>

            {/* Info */}
            <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
              <h1 className="mb-1 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
                Serhii Buriak
              </h1>
              <p className="mb-4 text-lg text-zinc-500 dark:text-zinc-400">
                Full‑Cycle Engineer
              </p>

              <p className="mb-6 max-w-lg text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                Building modern web experiences with TypeScript, Next.js, and Node.js. From
                scratch to production through all stages of the development and devops process.
                This website is currently under construction — check back soon for the full
                experience.
              </p>

              {/* Info blocks */}
              <div className="mb-5 grid w-full max-w-md grid-cols-2 gap-3 sm:grid-cols-3">
                <div className="rounded-xl bg-zinc-50 px-4 py-3 text-center dark:bg-zinc-800/60">
                  <div className="text-[10px] font-medium uppercase tracking-wide text-zinc-400 dark:text-zinc-500">
                    Status
                  </div>
                  <div className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">
                    Engineer
                  </div>
                </div>
                <div className="rounded-xl bg-zinc-50 px-4 py-3 text-center dark:bg-zinc-800/60">
                  <div className="text-[10px] font-medium uppercase tracking-wide text-zinc-400 dark:text-zinc-500">
                    Base
                  </div>
                  <div className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">
                    Canada
                  </div>
                </div>
                <div className="col-span-2 rounded-xl bg-zinc-50 px-4 py-3 text-center sm:col-span-1 dark:bg-zinc-800/60">
                  <div className="text-[10px] font-medium uppercase tracking-wide text-zinc-400 dark:text-zinc-500">
                    Focus
                  </div>
                  <div className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">
                    Web Apps
                  </div>
                </div>
              </div>

              {/* Stack tags */}
              <div className="flex flex-wrap justify-center gap-2 sm:justify-start">
                {["TypeScript", "Next.js", "Node.js", "PostgreSQL"].map(tag => (
                  <span
                    key={tag}
                    className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-6 flex items-center justify-between border-t border-zinc-100 pt-4 text-xs text-zinc-400 dark:border-zinc-800 dark:text-zinc-500">
            <span className="font-mono">thebeet.dev</span>
            <span>Issued 2019</span>
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
                className="group relative flex flex-col overflow-hidden rounded-2xl corner-bevel bg-white p-6 dark:bg-zinc-900"
              >
                {/* Cyan border with glow effect */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl border border-cyan-500/40 transition-all duration-300 group-hover:border-cyan-400/80 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.6),inset_0_0_15px_rgba(6,182,212,0.4)]" />

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
                        Live
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
