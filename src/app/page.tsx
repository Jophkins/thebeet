import type { Project } from "@/components/project-item/project-item";

import ProjectItem from "@/components/project-item/project-item";
import SiteHeader from "@/components/site-header/site-header";

type StackGroup = {
  label: string;
  items: string[];
};

type WorkEntry = {
  period: string;
  title: string;
  company: string;
  description: string;
  location: string;
};

type ContactLink = {
  label: string;
  value: string;
  href: string;
};

const STACK_GROUPS: StackGroup[] = [
  {
    label: "frontend",
    items: ["ts", "react", "next", "tailwind", "css"],
  },
  {
    label: "backend",
    items: ["node", "postgres", "redis", "graphql", "rest", "prisma"],
  },
  {
    label: "infra",
    items: ["docker", "aws", "cloudflare", "linux", "nginx"],
  },
  {
    label: "craft",
    items: ["vim", "claude", "git", "agents"],
  },
];

const WORK_ENTRIES: WorkEntry[] = [
  {
    period: "2024 — now",
    title: "Fullstack Engineer",
    company: "Terrabrief Solutions",
    description: "Running several company websites. Maintaining and integrating dashboards and internal tools.",
    location: "remote",
  },
  {
    period: "2023 — 24",
    title: "Fullstack Engineer",
    company: "PathwayPro",
    description: "Maintained and reworked social-network platform for foreign workers. ",
    location: "Calgary / CAN",
  },
  {
    period: "2021 — 23",
    title: "Lead Fullstack Engineer",
    company: "Glimmity-Buterfly",
    description: "Developed company website from scratch for inside employees. Onboarded new employees. Became a technical lead. Run the company's dev team.",
    location: "Poltava / UKR",
  },
  {
    period: "2020 — 21",
    title: "Frontend Engineer",
    company: "Almaz web studio",
    description: "Build and support company website and landing pages.",
    location: "remote",
  },
  {
    period: "2014 - 20",
    title: "Student and part-time technician",
    company: "Legion, MTX computers, Kyivstar",
    description: "Computer Science student and part-time network technician",
    location: "Donetsk, Kyiv, Poltava",
  },
];

const PROJECTS: Project[] = [
  {
    year: "2025",
    name: "kettle-sql",
    blurb: "Streaming SQL for humans.",
    description: "A single-binary streaming SQL engine you can point at a Kafka topic, an HTTP feed, or a file. Pipes-friendly. Used by a few teams to skip 80% of a Flink setup. Open source, Go.",
    stack: ["Go", "PostgreSQL", "Kafka", "protobuf"],
    role: "Sole author",
    links: [
      { label: "github.com/thebeet/kettle", href: "https://github.com/thebeet/kettle" },
      { label: "kettle-sql.dev", href: "https://kettle-sql.dev" },
    ],
  },
  {
    year: "2024",
    name: "mica",
    blurb: "Local-first notes that sync without a server.",
    description: "Notes app built on CRDTs, with end-to-end encryption and direct peer sync. Web + iOS. Currently hovers around 2k MAU; was a #1 launch on Hacker News.",
    stack: ["TypeScript", "Svelte", "Rust (wasm)", "Yjs"],
    role: "Designer + lead engineer",
    links: [
      { label: "mica.app", href: "https://mica.app" },
      { label: "github.com/thebeet/mica", href: "https://github.com/thebeet/mica" },
    ],
  },
  {
    year: "2024",
    name: "tinhat",
    blurb: "Encrypted, expiring link shortener.",
    description: "Short links with a passphrase, one-shot reads, and zero metadata logs. Self-hostable in 30s. Built as a weekend project, now used by ~200 small teams.",
    stack: ["Go", "Cloudflare Workers", "SQLite"],
    role: "Sole author",
    links: [
      { label: "tinhat.link", href: "https://tinhat.link" },
      { label: "github.com/thebeet/tinhat", href: "https://github.com/thebeet/tinhat" },
    ],
  },
  {
    year: "2023",
    name: "doughboy",
    blurb: "Variable-font playground for pasta typography.",
    description: "A WASM-based font playground I made for fun and for a magazine commission. Lets you generate variable letterforms shaped like pasta cuts.",
    stack: ["Rust (wasm)", "Canvas", "HarfBuzz"],
    role: "Solo experiment",
    links: [
      { label: "doughboy.lol", href: "https://doughboy.lol" },
    ],
  },
  {
    year: "2023",
    name: "arboretum",
    blurb: "Personal metrics, plotted as a tree.",
    description: "A self-hosted little app that turns your daily quantified-self data (sleep, runs, mood) into a slowly growing tree visualization. Mostly for me; a handful of friends use it.",
    stack: ["TypeScript", "Astro", "D3", "PostgreSQL"],
    role: "Solo",
    links: [
      { label: "github.com/thebeet/arboretum", href: "https://github.com/thebeet/arboretum" },
    ],
  },
];

const CONTACT_LINKS: ContactLink[] = [
  { label: "github", value: "github.com/thedarkbeet", href: "https://github.com/thedarkbeet" },
  { label: "email", value: "serhiiburiak19@gmail.com", href: "mailto:serhiiburiak19@gmail.com" },
  { label: "cv", value: "/cv.pdf", href: "/cv.pdf" },
  { label: "mastodon", value: "@thebeet@hachyderm.io", href: "https://hachyderm.io/@thebeet" },
];

const ABOUT_PARAGRAPHS = [
  "I’m a full-cycle developer with 7 years of experience in software development and 5 years in commercial projects.",
  "I build products end to end — from interfaces and frontend architecture to backend systems, infrastructure, deployment, and long-term maintainability. My experience includes both working independently across the full development cycle and collaborating within engineering teams.",
  "My strongest interest is where frontend, backend, and infrastructure meet. I care about quality, long-term maintainability, and building products that are not only functional today, but ready to evolve tomorrow.",
  "Outside of work, I’m into longboarding, coffee, piano, and small engineering experiments with LEGO, Arduino, and Raspberry Pi computers.",
];

export default function Home() {
  return (
    <>
      <a className="hf-skip-link" href="#main">Skip to content</a>

      <div className="hf-shell" id="top">
        <SiteHeader />

        <div className="hf-meta-mobile">
          <span>Serhii Buriak (Seth)</span>
          <span aria-hidden="true"> · </span>
          <span>Fullstack developer</span>
          <span aria-hidden="true"> · </span>
          <span>Calgary · remote / NA</span>
          <span aria-hidden="true"> · </span>
          <span className="hf-meta-mobile-status">
            <span aria-hidden="true" className="hf-status-dot" />
            open to work
          </span>
        </div>

        <div className="hf-grid">
          <aside className="hf-meta">
            <div className="hf-meta-name">Serhii Buriak (Seth)</div>
            <div className="hf-meta-line">Fullstack developer</div>
            <div className="hf-meta-line">Calgary · remote / NA</div>
            <div className="hf-meta-spacer" />
            <div className="hf-meta-status">
              <span aria-hidden="true" className="hf-status-dot" />
              open to work
            </div>
          </aside>

          <main className="hf-main" id="main">
            <section className="hf-hero hf-fade-in">
              <h1 className="hf-h1">
                I build
                {" "}
                <em>small, fast, honest</em>
                {" "}
                software — mostly with TypeScript and Go.
              </h1>
              <p className="hf-hero-intro">
                I&apos;m a fullstack developer who builds small, fast, honest software. Mostly TypeScript and Go, with a soft spot for Postgres, local-first patterns, and dev tools that feel handmade.
              </p>
            </section>

            <section className="hf-section" id="about">
              <div className="hf-section-label">01 · ABOUT</div>
              {ABOUT_PARAGRAPHS.map((paragraph, index) => (
                <p className="hf-paragraph" key={index}>
                  {paragraph}
                </p>
              ))}
            </section>

            <section className="hf-section" id="stack">
              <div className="hf-section-label">02 · STACK</div>
              <div className="hf-stack">
                {STACK_GROUPS.map(group => (
                  <div className="hf-stack-row" key={group.label}>
                    <div className="hf-stack-label">{group.label}</div>
                    <div className="hf-stack-items">
                      {group.items.map((item, index) => (
                        <span className="hf-stack-item" key={item}>
                          {item}
                          {index < group.items.length - 1 && (
                            <span aria-hidden="true" className="hf-stack-sep">·</span>
                          )}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="hf-section" id="work">
              <div className="hf-section-label">03 · WORK</div>
              <div className="hf-work">
                {WORK_ENTRIES.map(entry => (
                  <div className="hf-work-row" key={`${entry.period}-${entry.company}`}>
                    <div className="hf-work-period">{entry.period}</div>
                    <div className="hf-work-body">
                      <div className="hf-work-title">
                        {entry.title}
                        ,
                        {" "}
                        <em>{entry.company}</em>
                      </div>
                      <div className="hf-work-description">{entry.description}</div>
                      <div className="hf-work-location">{entry.location}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="hf-section" id="projects">
              <div className="hf-section-label">04 · PROJECTS</div>
              <div className="hf-projects">
                {PROJECTS.map(project => (
                  <ProjectItem key={project.name} project={project} />
                ))}
              </div>
            </section>

            <section className="hf-section" id="contact">
              <div className="hf-section-label">05 · CONTACT</div>
              <p className="hf-contact-intro">
                Email is the fastest way to reach me. Cold-mail welcome.
              </p>
              <div className="hf-contact-list">
                {CONTACT_LINKS.map(link => (
                  <div className="hf-contact-row" key={link.label}>
                    <div className="hf-contact-label">{link.label}</div>
                    <div className="hf-contact-value">
                      <a className="hf-link" href={link.href}>
                        {link.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <footer className="hf-footer">
              <span>© 2026 Serhii Buriak</span>
              <span>built in a terminal · last commit 2d</span>
            </footer>
          </main>
        </div>
      </div>
    </>
  );
}
