export const site = {
  name: "Neha",
  title: "Full Stack Developer | SDE Intern @ Stylumia",
  tagline:
    "Building scalable products using React, Next.js, and Node.js",
  email: "neha.contact295@gmail.com",
  linkedin: "https://www.linkedin.com/in/neha-iiitu/",
  github:
    process.env.NEXT_PUBLIC_GITHUB_URL ?? "https://github.com/Neha-Codes295",
  resumeUrl: process.env.NEXT_PUBLIC_RESUME_URL ?? "/Neha_Resume.pdf",
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://neha-portfolio.vercel.app",
  about: {
    school: "Indian Institute of Information Technology (IIIT) Una",
    schoolUrl: "https://iiitu.ac.in/",
    degree: "B.Tech, Computer Science & Engineering",
    duration: "Nov 2022 – Present",
    cgpa: "8.2 / 10",
    expectedGraduation: "May 2026 (expected)",
    bullets: [
      "Working on Orbix, Stylumia’s core analytics product — building features and refining UX.",
      "Former Full Stack Engineering Intern @ Adeptmind, shipping SSR apps, APIs, and automation.",
      "Strong in scalable full-stack systems, integrations, and performance-minded delivery.",
      "Solved 700+ DSA problems across platforms.",
      "4★ GeeksforGeeks | Knight @ LeetCode.",
    ],
  },
  experience: [
    {
      company: "Stylumia",
      companyUrl: "https://www.stylumia.ai/",
      role: "Software Development Engineer Intern",
      period: "Jan 2026 – Present",
      points: [
        "Working on Orbix, Stylumia’s core analytics product — building features and improving the user experience.",
        "Collaborating with backend and product teams to integrate APIs and keep data flowing smoothly across the system.",
        "Tech stack: React, Next.js, TypeScript, Python, FastAPI, PostgreSQL, Elasticsearch, Redis.",
      ],
    },
    {
      company: "Adeptmind",
      companyUrl: "https://adeptmind.ai/",
      role: "Full Stack Engineering Intern",
      period: "Aug 2025 – Jan 2026",
      points: [
        "Built enterprise-scale web apps with server-side rendering for stronger performance.",
        "Implemented middleware services and automation pipelines for high-volume data extraction.",
        "Designed RESTful APIs for reliability, scalability, and clean adoption across teams.",
        "Tech stack: Nest.js, Express.js, Vue.js, Python, Docker.",
      ],
    },
  ],
  tech: [
    {
      category: "Languages",
      items: [
        "C",
        "C++",
        "Java",
        "JavaScript",
        "Python",
        "SQL",
        "TypeScript",
        "HTML",
        "CSS",
      ],
    },
    {
      category: "Web development",
      items: [
        "React.js",
        "Next.js",
        "Vue.js",
        "Node.js",
        "Express.js",
        "Nest.js",
        "MongoDB",
        "Tailwind CSS",
        "REST APIs",
      ],
    },
    {
      category: "Platforms & tools",
      items: [
        "PostgreSQL",
        "Redis",
        "Elasticsearch",
        "FastAPI",
        "Docker",
        "Git",
      ],
    },
    {
      category: "CS fundamentals",
      items: [
        "Data Structures & Algorithms",
        "DBMS",
        "OOP",
        "Operating Systems",
        "Computer Networks",
      ],
    },
  ],
  projects: [
    {
      title: "Patientoo",
      description:
        "Full-stack healthcare platform for appointments, consultations, and profile management.",
      highlights: [
        "JWT authentication and role-based access control for secure user management.",
        "Razorpay payments and Cloudinary storage — reduced workflow time by ~40%.",
      ],
      tech: ["React.js", "Express.js", "Node.js", "MongoDB"],
      github: "https://github.com/Neha-Codes295/Patientoo",
      live: "https://patientoo-heathcare-management-app-0eqb.onrender.com/",
    },
    {
      title: "Imaginate",
      description:
        "SaaS for AI-powered image generation using the ClipDrop API and a credit-based model.",
      highlights: [
        "Credit-based architecture with Razorpay — 500+ images processed.",
        "Backend optimizations that cut API latency by ~25%.",
      ],
      tech: ["React.js", "Node.js", "MongoDB"],
      github: "https://github.com/Neha-Codes295/Imaginate",
      live: "https://imaginate-three.vercel.app/",
    },
    {
      title: "Chatty",
      description:
        "Real-time messaging with WebSockets, live presence, and secure authentication.",
      highlights: [
        "Socket.IO for real-time communication and presence.",
        "JWT + bcrypt for credential protection.",
      ],
      tech: ["React.js", "Express.js", "Node.js", "MongoDB"],
      github: "https://github.com/Neha-Codes295/ChatAppPro",
      live: "https://chatapppro.onrender.com",
    },
  ],
  achievements: [
    { label: "DSA", value: "800+ problems solved" },
    {
      label: "GeeksforGeeks",
      value: "4★",
      href: "https://www.geeksforgeeks.org/user/secrectcoder/",
    },
    {
      label: "LeetCode",
      value: "Knight",
      href: "https://leetcode.com/u/SecretCoder-IIIT/",
    },
    {
      label: "ProElevate DSA Challenge",
      value: "Rank 2 / 10,000+",
      href: "https://www.linkedin.com/posts/neha-iiitu_crackyourinternship-crackyourplacement-dsa-activity-7235198418338332672-knPO",
    },
    {
      label: "CodeRush 2k24",
      value: "DIVA Award (AlgoUniversity)",
      href: "https://www.linkedin.com/posts/neha-iiitu_codingjourney-coderush2k24-achievementunlocked-activity-7242584484376666113-JQP8",
    },
  ],
};
