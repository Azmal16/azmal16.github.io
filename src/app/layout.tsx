import type { Metadata, Viewport } from "next";
import { Inter, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import { profile } from "@/content/profile";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const display = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: {
    default: `${profile.name} — AI Engineer & ML Researcher`,
    template: `%s — ${profile.name}`,
  },
  description: profile.headline,
  keywords: [
    "Azmal Awasaf",
    "AI Engineer",
    "Machine Learning",
    "iOS Developer",
    "University of Alberta",
    "Computer Vision",
    "Information Retrieval",
    "Edmonton",
  ],
  authors: [{ name: profile.name, url: profile.siteUrl }],
  creator: profile.name,
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: profile.siteUrl,
    siteName: `${profile.name} — Portfolio`,
    title: `${profile.name} — AI Engineer & ML Researcher`,
    description: profile.headline,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — AI Engineer & ML Researcher`,
    description: profile.headline,
  },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0d0d10" },
    { media: "(prefers-color-scheme: light)", color: "#fbfbf9" },
  ],
};

/**
 * Runs before paint so a stored light-mode preference never flashes dark first.
 * Dark is the default when nothing is stored.
 */
const themeScript = `
(function () {
  try {
    var stored = localStorage.getItem("theme");
    if (stored === "light") document.documentElement.classList.add("light");
  } catch (e) {}
})();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${inter.variable} ${display.variable} ${mono.variable}`}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:font-medium focus:text-bg"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
