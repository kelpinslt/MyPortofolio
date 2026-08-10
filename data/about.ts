export const aboutData = {
  sectionLabel: "About Me",

  heading: {
    firstLine: "Hi, I'm",
    highlightedName: "Kelpinn",
  },

  subtitle: "Building Modern Websites",

  description: [
    "I'm an Information Technology student in my second semester.",
    "I love designing and building modern, user-friendly websites.",
    "I'm always excited to learn new things and grow every day.",
  ],

  contact: {
    email: null,
    buttonLabel: "Email Me",
    href: null,
    needsConfirmation: true,
  },

  profileImage: {
    src: null,
    alt: null,
  },

  socialLinks: [
    {
      id: "instagram",
      label: "Instagram",
      icon: "Instagram",
      href: null,
      needsConfirmation: true,
    },
    {
      id: "github",
      label: "GitHub",
      icon: "Github",
      href: null,
      needsConfirmation: true,
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      icon: "Linkedin",
      href: null,
      needsConfirmation: true,
    },
  ],

  downloadCv: {
    enabled: false,
    label: "Download CV",
    href: null,
    reason: "Tidak terlihat pada referensi About final.",
  },
} as const;