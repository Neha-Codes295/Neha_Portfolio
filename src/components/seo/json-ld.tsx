import { site } from "@/data/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: "Full Stack Developer",
    email: site.email,
    url: site.siteUrl,
    sameAs: [site.linkedin, site.github],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Indian Institute of Information Technology Una",
    },
    knowsAbout: [
      "React",
      "Next.js",
      "Node.js",
      "TypeScript",
      "Full Stack Development",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
