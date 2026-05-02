import type { Metadata } from "next";

import { JetBrains_Mono, Newsreader } from "next/font/google";

import "./globals.css";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jbm",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const SITE_DESCRIPTION
  = "Serhii Buriak — fullstack developer building small, fast, honest software. Mostly TypeScript and Go, with a soft spot for Postgres, local-first patterns, and dev tools that feel handmade.";

export const metadata: Metadata = {
  title: "thebeet.dev — Serhii Buriak, fullstack developer",
  description: SITE_DESCRIPTION,
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    type: "profile",
    title: "thebeet.dev — Serhii Buriak, fullstack developer",
    description: SITE_DESCRIPTION,
    siteName: "thebeet.dev",
  },
  twitter: {
    card: "summary",
    title: "thebeet.dev — Serhii Buriak",
    description: SITE_DESCRIPTION,
  },
};

const THEME_INIT_SCRIPT = `(function(){try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark'){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}document.documentElement.setAttribute('data-theme',t);document.documentElement.classList.remove('no-js');}catch(e){document.documentElement.setAttribute('data-theme','light');}})();`;

const PERSON_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Serhii Buriak",
  "jobTitle": "Fullstack developer",
  "url": "https://thebeet.dev",
  "email": "mailto:serhiiburiak19@gmail.com",
  "sameAs": [
    "https://github.com/thedarkbeet",
    "https://hachyderm.io/@thedarkbeet",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="no-js" data-theme="light" lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
        <script
          dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON_JSON_LD) }}
          type="application/ld+json"
        />
      </head>
      <body
        className={`${newsreader.variable} ${jetBrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
