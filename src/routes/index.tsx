import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { PracticeProfiles } from "@/components/portfolio/PracticeProfiles";
import { CertificationTimeline, EducationTimeline } from "@/components/portfolio/Timelines";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

const title = "Sai Bharath | Cybersecurity Student | Cloud & Network Security";
const description =
  "Portfolio of Sai Bharath, a Cybersecurity student focused on Cloud Security, Network Security, Linux, AWS, and penetration testing.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "author", content: "Muchhu Sai Bharath" },
      {
        name: "keywords",
        content:
          "cybersecurity student, cloud security, network security, penetration testing, AWS security, Linux, Marwadi University",
      },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Muchhu Sai Bharath",
          jobTitle: "Cybersecurity Student",
          email: "mailto:muchhusaibharath@gmail.com",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Rajkot",
            addressRegion: "Gujarat",
            addressCountry: "IN",
          },
          alumniOf: { "@type": "CollegeOrUniversity", name: "Marwadi University" },
          knowsAbout: [
            "Cybersecurity",
            "Cloud Security",
            "Network Security",
            "Penetration Testing",
            "Linux",
            "AWS",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <PracticeProfiles />
        <CertificationTimeline />
        <EducationTimeline />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
