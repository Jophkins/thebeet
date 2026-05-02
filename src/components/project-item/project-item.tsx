"use client";

import type { MouseEvent } from "react";

import { useState } from "react";

export type ProjectMetaLink = {
  label: string;
  href: string;
};

export type Project = {
  year: string;
  name: string;
  blurb: string;
  description: string;
  stack: string[];
  role: string;
  links: ProjectMetaLink[];
};

type ProjectItemProps = {
  project: Project;
};

function ProjectItem({ project }: ProjectItemProps) {
  const [open, setOpen] = useState(false);
  const bodyId = `hf-proj-body-${project.name}`;

  function handleRowClick(event: MouseEvent<HTMLDivElement>) {
    const target = event.target as HTMLElement;
    if (target.closest("a")) {
      event.stopPropagation();
      return;
    }
    setOpen(value => !value);
  }

  return (
    <article className={`hf-proj${open ? " is-open" : ""}`}>
      <div
        aria-controls={bodyId}
        aria-expanded={open}
        className="hf-proj-row"
        onClick={handleRowClick}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            setOpen(value => !value);
          }
        }}
        role="button"
        tabIndex={0}
      >
        <span className="hf-proj-year">{project.year}</span>
        <span className="hf-proj-name">{project.name}</span>
        <span className="hf-proj-blurb">{project.blurb}</span>
        <span aria-hidden="true" className="hf-proj-toggle">+</span>
      </div>

      <div className="hf-proj-body" id={bodyId}>
        <div>
          <div className="hf-proj-body-inner">
            <p className="hf-proj-description">{project.description}</p>
            <div className="hf-proj-meta">
              <div className="hf-proj-meta-col">
                <div className="hf-proj-meta-label">stack</div>
                <div className="hf-proj-meta-value">
                  {project.stack.join(" · ")}
                </div>
              </div>
              <div className="hf-proj-meta-col">
                <div className="hf-proj-meta-label">role</div>
                <div className="hf-proj-meta-value">{project.role}</div>
              </div>
              <div className="hf-proj-meta-col">
                <div className="hf-proj-meta-label">links</div>
                <div className="hf-proj-meta-value">
                  {project.links.map(link => (
                    <a
                      className="hf-proj-link"
                      href={link.href}
                      key={link.label}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {link.label}
                      {" "}
                      <span aria-hidden="true">↗</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default ProjectItem;
