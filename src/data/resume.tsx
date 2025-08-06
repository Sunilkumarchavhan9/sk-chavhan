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
      logoUrl: "/dsu-logo3.jpg", // Add your college logo here
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
           type: "Click here...",
           href: "https://github.com/Sunilkumarchavhan9/V-0--draw",
           icon: <Icons.globe />,
         },
       ],
      image: "",
      video:
        "/V0.mp4",
    },
    {
      title: "DocStart",
      href: "",
      dates: "August2025",
      active: true,
      description:
        " DocStart lets you write docs in Notion and instantly turns them into a clean, fast, developer-friendly site.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Neon Console"
      ],
             links: [
         {
           type: "Click here...",
           href: "https://doc-start-notion-powere-git-3515f1-sunilkumarchavhan9s-projects.vercel.app/",
           icon: <Icons.globe />,
         },
       ],
      image: "/xr.png",
      video:
        "",
    }, 
    {
      title: "Ten-Sol",
      href: "",
      dates: " 2025 July",
      active: true,
      description:
        "Solana Wallet Adapter is a set of tools that makes it easy to connect different Solana wallets (like Phantom, Solflare, Backpack) to your web app. ",
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
           type: "Click here...",
           href: "https://github.com/Sunilkumarchavhan9/wallet-adapter-TEN-SOL-",
           icon: <Icons.globe />,
         },
       ],
      image: "",
      video:
        "/tensol.mp4",
    }, 
    {
      title: "portfolio",
      href: "",
      dates: " 2025 June",
      active: true,
      description:
        "",
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
           type: "Click here...",
           href: "https://v0dev9.vercel.app/",
           icon: <Icons.globe />,
         },
       ],
      image: "/pc.png",
      video:
        "",
    },

    {
      title: "Zephyr",
      href: "",
      dates: "August 2025",
      active: true,
      description:
        "landing Page ",
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
           icon: <Icons.globe />,
         },
       ],
      image: "",
      video:
        "/Zephyr.mp4",
    },
   
  ],
  hackthons:[],
  work: [],
} as const;
