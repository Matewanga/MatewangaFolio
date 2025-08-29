// src/constants/index.js
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  etec,
  fatec,
} from "../assets";

// Importando ícones adicionais
import mysql from "../assets/tech/mysql.png";
import javaIcon from "../assets/tech/java.png"; // Java adicionado
import decria from "../assets/decria.png";
import viascholae from "../assets/viascholae.png";
import naturalle from "../assets/naturalle.jpeg";


// Links de navegação do site
export const navLinks = [
  { id: "hero", title: "Inicio" },
  { id: "about", title: "Sobre" },
  { id: "experiences", title: "Formações" },
  { id: "certifications", title: "Certificados" },
  { id: "projects", title: "Projetos" },
  { id: "contact", title: "Contatos" },
];

// Serviços
export const services = [
  { title: "Desenvolvedora Web", icon: web },
  { title: "Desenvolvedora Back-end", icon: backend },
  { title: "UI/UX Design", icon: creator },
  { title: "Cibersegurança", icon: mobile },
];

// Tecnologias
export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "React JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "Java", icon: javaIcon },    // Java adicionado
  { name: "Three JS", icon: threejs },
  { name: "Git", icon: git },
  { name: "Figma", icon: figma },
  { name: "MySQL", icon: mysql },    // MySQL adicionado
];

// Experiences (Educação + Trabalho)
export const experiences = [
  {
    title: "Técnologo em Análise e Desenvolvimento de Sistemas - AMS",
    company_name: "FATEC Zona Leste",
    icon: fatec,
    iconBg: "#383E56",
    date: "2025 - Presente",
    points: [],
  },
 
  {
    title: "Ensino Técnico em Administração",
    company_name: "ETEC Zona Leste",
    icon: etec,
    iconBg: "#232631",
    date: "2023 - 2024",
    points: [
      "Desenvolvimento de interfaces responsivas",
      "Integração com APIs",
    ],
  },

   {
    title: "Ensino Médio com Habilitação Profissional de Técnico em Desenvolvimento de Sistemas - AMS",
    company_name: "ETEC Zona Leste",
    icon: etec,
    iconBg: "#020202ff",
    date: "2022 - 2024",
    points: [],
  },
];

// Projetos
export const projects = [
  {
    name: "Naturalle",
    description: "Plataforma web de Restaurante Vegano Solidário",
    tags: [
      { name: "PHP", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "Tailwind", color: "pink-text-gradient" },
    ],
    image: naturalle,
    source_code_link: "https://github.com/marianafeitosa/Naturalle.git",
    demo_link: "",
    app_link: undefined,
  },
  {
    name: "DeCria Wear",
    description: "Sistema de Loja de Roupas Personalizadas",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "TypeScript", color: "green-text-gradient" },
      { name: "CSS", color: "pink-text-gradient" },
    ],
    image: decria,
    source_code_link: "https://github.com/SonExpedito/DeCria_Wear.git",
    demo_link: "",
    app_link: "",
  },
  {
    name: "Via Scholae",
    description: "Sistema de Monitoramento de Vans Escolares",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Node", color: "green-text-gradient" },
      { name: "API", color: "pink-text-gradient" },
      { name: "MapBox", color: "purple-text-gradient" },
    ],
    image: viascholae,
    source_code_link: "https://github.com/Matewanga/PI--VIA-SCHOLAE.git",
    demo_link: "",
    app_link: "",
  },
];
