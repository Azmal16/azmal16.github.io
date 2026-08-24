import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Work from "@/components/Work";
import Timeline from "@/components/Timeline";
import Research from "@/components/Research";
import Apps from "@/components/Apps";
import Skills from "@/components/Skills";
import Beyond from "@/components/Beyond";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { profile } from "@/content/profile";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: profile.siteUrl,
  email: `mailto:${profile.email}`,
  jobTitle: "AI Engineer & ML Researcher",
  address: { "@type": "PostalAddress", addressLocality: "Edmonton", addressRegion: "AB", addressCountry: "CA" },
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "University of Alberta" },
    { "@type": "CollegeOrUniversity", name: "Rajshahi University of Engineering & Technology" },
  ],
  sameAs: [profile.github, profile.linkedin],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <Nav />
      <main id="main">
        <Hero />
        <About />
        <Work />
        <Timeline />
        <Research />
        <Apps />
        <Skills />
        <Beyond />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
