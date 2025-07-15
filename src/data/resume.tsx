import { Icons } from "@/components/icons";
import { Currency, HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "(V0)-VΣGIƬӨ",
  initials: "SK",
  url: "https://v0-chavhan.vercel.app",
  location: "Bengaluru",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Building cool stuff. Tweeting often.",
  summary:
    " computer science Student  Developer by heart explorer by natureI enjoy building clean functional products and tweeting about the process",
  avatarUrl: "/sunil.jpg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Postgres",
    "prisma",
    "Docker",
    "C++",
    "web3"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "chavhansunilkumar753@gmail.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Sunilkumarchavhan9",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sunil-kumar-chavhan-269195299",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/FrostbytHitsuG",
        icon: Icons.x,

        navbar: true,
      },
      
      email: {
        name: "Send Email",
        url: "chavhansunilkumar753@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },
  education: [
    {
      school: "DAYANANDA SAGAR UNIVERSITY",
      degree: "Bachelor of Technology in Computer Science",
      start: "2022",
      end: "2026",
      href: "https://www.dsu.edu.in/about-us/dsu",
      logoUrl: "dsu-logo-2.webp", // Add your college logo here
    },
  ],
  projects: [
    {
      title: "V0Draw",
      href: "",
      dates: "July 2025",
      active: true,
      description:
        "v0draw is a collaborative drawing tool where multiple people can sketch together on the same canvas — all in real time. ",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "coming soo..",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "V0.mp4",
    }, {
      title: "Zephyr",
      href: "",
      dates: "July 2025",
      active: true,
      description:
        "v0draw is a collaborative drawing tool where multiple people can sketch together on the same canvas — all in real time. ",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "coming soo..",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "Zephyr.mp4",
    },
   
  ],
  hackthons:[],
  work: [],
} as const;
