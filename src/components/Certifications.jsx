// src/components/Certifications.jsx
import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

// Lista de certificações
const certifications = [
  {
    name: "AI Fundamentals",
    issuer: "IBM SkillsBuild",
    date: "2025",
    link: "https://www.credly.com/badges/70fb9695-c630-4c24-8a01-b295374f86b9/public_url",
  },
  {
    name: "Data Fundamentals",
    issuer: "IBM SkillsBuild",
    date: "2025",
    link: "https://www.credly.com/badges/cb34eb8e-691b-4cf8-8599-7d93b160c827/public_url", // link do badge
  },
  {
    name: "Explore Emerging Tech",
    issuer: "IBM SkillsBuild",
    date: "2025",
    link: "https://www.credly.com/badges/314cdb1e-20d6-4f88-8ee6-166288f8335d/public_url"
  },
  {
    name: "IT Fundamentals",
    issuer: "IBM SkillsBuild",
    date: "2025",
    link: "https://www.credly.com/badges/1eef919d-b12f-4f48-9489-9da15f0fafcb/public_url"
  },
  {
    name: "PM Fundamentals",
    issuer: "IBM SkillsBuild",
    date: "2025",
    link: "https://www.credly.com/badges/8304537f-ff7f-4f0f-b28c-c2f9a0a9a446/public_url"
  },
  {
    name: "Ux Design Fundamentals",
    issuer: "IBM SkillsBuild",
    date: "2025",
    link: "https://www.credly.com/badges/acc49294-88eb-4189-a56a-1e40033c807d/public_url"
  },
  {
    name: "Web Development Fundamentals",
    issuer: "IBM SkillsBuild",
    date: "2025",
    link: "https://www.credly.com/badges/b30e3305-fb38-4c89-b70f-f7e3e8a18ff1/public_url"
  },
  {
  name: "IA Responsável nos Negócios",
  issuer: "Santander Open Academy",
  date: "2025",
  link: "https://drive.google.com/file/d/1jgQpBdVIcW75I1CEvDH-zQPT0wQXcJdd/view?usp=sharing"
  },
  {
  name: "CTF Para Elas",
  issuer: "Hackers do Bem",
  date: "2025",
  link: "https://drive.google.com/file/d/1_1G_8dafgEYHVOmaKU2d1cwn-bAqh7Ny/view"
  },
  {
  name: "Administrando Banco de Dados",
  issuer: "Fundação Bradesco",
  date: "2025",
  link: "https://drive.google.com/file/d/1RevcTKmtSN-wzWPRu-OtSnBeOLCpflMl/view"
  },
  {
    name: "Cybersecurity Fundamentals",
    issuer: "IBM SkillsBuild",
    date: "2024",
  link: "https://www.credly.com/badges/3352431d-dbb2-4ae0-b2cf-3f3742548374/public_url"
  },
  {
  name: "Certificado Artigo Cientifico",
  issuer: "Engetec",
  date: "2024",
  link: "https://drive.google.com/file/d/1JrRCjoTmE--Cys-U-Md9dTKnOifVJLFv/view"
},
    {
    name: "Explore Emerging Tech",
    issuer: "IBM SkillsBuild",
    date: "2024",
    link: "https://www.credly.com/badges/304f1307-bd11-4a42-b3bb-5748d9f24f24/public_url"
  },
    {
    name: "Job Application Essentials",
    issuer: "IBM SkillsBuild",
    date: "2024",
   link: "https://www.credly.com/badges/2ae12dd4-4e37-4485-900c-c48f487f3eac/public_url"
  },
   {
    name: "Agile Explorer",
    issuer: "IBM SkillsBuild",
    date: "2024",
    link: "https://www.credly.com/badges/9f8d040e-485c-49ea-8d0a-232aa5b1e456/public_url"
  },
  {
    name: "Explorations Mindfulness",
    issuer: "IBM SkillsBuild",
    date: "2024",
    link: "https://www.credly.com/badges/c5932851-8bf3-4e7e-b189-5f2ea7dff1c3/public_url"
  },
  {
    name: "Professional Skills",
    issuer: "IBM SkillsBuild",
    date: "2024",
    link: "https://www.credly.com/badges/dfbb97d6-4c7b-428d-ba09-3f9d22d810d9/public_url"
  },
];

const Certifications = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Certificações</h2>
        <p className={styles.sectionSubText}>Cursos e conquistas</p>
      </motion.div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            variants={fadeIn("up", "spring", index * 0.3, 0.75)}
            className="bg-tertiary p-6 rounded-2xl shadow-lg"
          >
            <h3 className="text-white text-[18px] font-bold">{cert.name}</h3>
            <p className="text-secondary text-[14px] mt-1">
              {cert.issuer} — {cert.date}
            </p>

            {cert.link && (
              <button
                onClick={() => window.open(cert.link, "_blank")}
                className="mt-4 bg-purple-600 text-white px-4 rounded-lg font-semibold hover:bg-purple-500 transition h-[40px]"
              >
                Ver Certificado
              </button>
            )}
          </motion.div>
        ))}
      </div>
    </>
  );
};

// ✅ agora a seção tem id="certifications"
export default SectionWrapper(Certifications, "certifications");
