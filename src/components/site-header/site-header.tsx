"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const NAV_ITEMS = [
  { id: "about", label: "about" },
  { id: "stack", label: "stack" },
  { id: "work", label: "work" },
  { id: "projects", label: "projects" },
  { id: "contact", label: "contact" },
];

function readInitialTheme(): Theme {
  if (typeof document === "undefined") {
    return "light";
  }
  const attr = document.documentElement.getAttribute("data-theme");
  if (attr === "light" || attr === "dark") {
    return attr;
  }
  return "light";
}

function SiteHeader() {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    setTheme(readInitialTheme());
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) {
      return;
    }
    document.documentElement.setAttribute("data-theme", theme);
    try {
      window.localStorage.setItem("theme", theme);
    }
    catch {
    }
  }, [theme, mounted]);

  function toggleTheme() {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  }

  function closeNav() {
    setNavOpen(false);
  }

  return (
    <header className="hf-header">
      <a className="hf-logo" href="#top">
        <span className="hf-logo-name">thebeet</span>
        <span className="hf-logo-tld">.dev</span>
      </a>

      <nav aria-label="Primary" className="hf-nav-desktop">
        {NAV_ITEMS.map(item => (
          <a key={item.id} className="hf-nav-link" href={`#${item.id}`}>
            {item.label}
          </a>
        ))}
      </nav>

      <div className="hf-header-actions">
        <button
          aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
          className="hf-theme-toggle"
          onClick={toggleTheme}
          type="button"
        >
          <span aria-hidden="true" className="hf-theme-dot" />
          <span>{theme === "light" ? "light" : "dark"}</span>
        </button>

        <button
          aria-controls="hf-mobile-menu"
          aria-expanded={navOpen}
          aria-label={navOpen ? "Close menu" : "Open menu"}
          className="hf-burger"
          onClick={() => setNavOpen(open => !open)}
          type="button"
        >
          {navOpen ? "×" : "☰"}
        </button>
      </div>

      <nav
        aria-label="Mobile"
        className={`hf-nav-mobile${navOpen ? " is-open" : ""}`}
        id="hf-mobile-menu"
      >
        {NAV_ITEMS.map(item => (
          <a
            key={item.id}
            className="hf-nav-mobile-link"
            href={`#${item.id}`}
            onClick={closeNav}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default SiteHeader;
