import {
  contact,
  css,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  nextjs,
  nodejs,
  react,
  snapgram,
  tailwindcss,
  threads,
  typescript,
  java,
  postgres,
  php,
  vercel,
  poitiers,
  middlebury,
  paris1,
  ratp,
  shop,
  book,
  plant,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
  {
    imageUrl: java,
    name: "Java",
    type: "Backend",
  },
  {
    imageUrl: postgres,
    name: "Postgres",
    type: "Database",
  },
  {
    imageUrl: php,
    name: "PHP",
    type: "Frontend",
  },
  {
    imageUrl: vercel,
    name: "Vercel",
    type: "Deployment",
  },
];

export const experiences = [
  {
    title: "Etudiant Master MIAGE",
    company_name: "Paris Panthéon Sorbonne",
    icon: paris1,
    iconBg: "#edeb7e",
    date: "Sept 2023 - Présent",
    points: [
      "Approfondissement des compétences en programmation Java pour le développement logiciel.",
      "Utilisation des principaux frameworks Java pour le développement d'applications d'entreprise (Javaspringboot).",
      "Application des méthodes de gestion de projet pour planifier, exécuter et suivre des projets informatiques.",
      "Acquisition de connaissances en comptabilité et gestion financière pour comprendre les aspects économiques des projets informatiques.",
      "Développement des compétences en communication professionnelle pour travailler efficacement en équipe et communiquer avec les parties prenantes des projets.",
    ],
  },
  {
    title: "Alternant - AMOA",
    company_name: "RATP GROUP",
    icon: ratp,
    iconBg: "#a2d2ff",
    date: "Sept 2023 - Present",
    points: [
      "réalisation d’un projet de refonte de l’outil juridique (ateliers, spécifications, paramétrage, recettes...)",
      "Participation à la rédaction des spécifications fonctionnelles et techniques.",
      "Participation à la rédaction des cahiers de recette.",
      "Contribuer à la conduite du changement",
      "Modéliser des processus",
    ],
  },
  {
    title: "Etudiant Licence informatique",
    company_name: "Université de Poitiers",
    icon: poitiers,
    iconBg: "#dff2ee",
    date: "Sept 2020 - Janv 2023",
    points: [
      "Choisir les structures de données pertinentes pour un problème donné et savoir coder les algorithmes classiques sur ces structures de données",
      "Mettre en oeuvre différents principes de programmation (impérative, fonctionnelle, objet, système) pour coder un programme informatique.",
      "Savoir concevoir et exploiter une base de données relationnelle.",
      "Savoir concevoir et développer un site Web dynamique.",
      "Savoir programmer une interface homme-machine",
    ],
  },
  {
    title: "Etudiant - Echange Universitaire",
    company_name: "Middlebury College",
    icon: middlebury,
    iconBg: "#7181eb",
    date: "Janv 2023 - Juin 2023",
    points: [
      "Développer des applications web en utilisant Next.js et d'autres technologies connexes.",
      "Utilisation de la méthodoligie Agile pour la gestion de projet.",
      "Communication avec des étudiants étrangers pour des projets de groupe dans une langue étrangère.",
      "Apprentissage des structures de données et des algorithmes en Java.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/Lapocalypsie?tab=repositories",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/jimmy-rasolosoa/",
  },
];

export const projects = [
  {
    iconUrl: snapgram,
    theme: "btn-back-red",
    name: "Stack Overflow Clone",
    description:
      "J'ai développé un site web complet de stack overlflow clone en Next Js, Tailwind CSS grâce au cours de JavaScript Mastery.",
    link: "https://final-overflow.vercel.app/",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "Blog - Za Gasy Ko",
    description:
      "J'ai crée un blog pour une association, Za Gasy Ko, en utilisant Next Js et Tailwind CSS et MongoDB avec un systeme d'authentification et dashboard pour les administrateurs. C'est un projet en cours de construction.",
    link: "https://zagasyko.vercel.app/",
  },
  {
    iconUrl: shop,
    theme: "btn-back-blue",
    name: "MadaAnnonce",
    description:
      "J'ai codé le front de ce site de petites annonces grâce à Figma. C'est un projet avec des camarades de classes et en cours de construction. Le back est fait en Javaspringboot et la base de données est : PostgresSql.",
    link: "https://mada-annonce.vercel.app/",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-pink",
    name: "Nike Landing Page",
    description:
      "J'ai codé ce landing page de Nike en utilisant Vite Js et Tailwind CSS. C'est un projet pour m'entrainer sur Tailwind.",
    link: "https://nike-lake-seven.vercel.app/",
  },
  {
    iconUrl: book,
    theme: "btn-back-yellow",
    name: "Blog - Trouve moi un livre",
    description:
      "J'ai codé ce blog a partir d'un template de Tailwind UI afin de pouvoir partager mes lectures et mes découvertes.",
    link: "https://blog-trouvemoiunlivre.vercel.app/",
  },
  {
    iconUrl: plant,
    theme: "btn-back-green",
    name: "Le Blog d'Anthony",
    description:
      "J'ai réalisé ce blog pour un ami qui est conseiller bien etre doTerra afin de lui permettre de partager ses conseils et ses astuces.",
    link: "https://anthonyvisconti.vercel.app/",
  },
];
