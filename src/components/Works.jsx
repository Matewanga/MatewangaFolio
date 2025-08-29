import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  demo_link,
  app_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        tiltMaxAngleX={45}
        tiltMaxAngleY={45}
        scale={1}
        transitionSpeed={450}
        className="bg-tertiary p-5 rounded-2xl sm:w-[320px] w-full h-[440px] flex flex-col"
      >
        {/* Imagem */}
        <div className="relative w-full h-[200px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        {/* Nome + descrição */}
        <div className="mt-5 h-[80px]">
          <h3 className="text-[22px] font-bold text-white">{name}</h3>
          <p className="mt-2 text-[14px] leading-[20px] text-secondary min-h-[80px]">
            {description}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-7">
          {tags.map((tag) => (
            <p key={`${name}-${tag.name}`} className={`text-[13px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>

        {/* Botões na base do card */}
        <div className="mt-auto flex gap-3 flex-wrap">
          {source_code_link && (
            <button
              onClick={() => window.open(source_code_link, "_blank")}
              className="bg-black text-white px-3 py-1.5 rounded-md text-sm font-medium hover:bg-gray-800 transition"
            >
              GitHub
            </button>
          )}

          {demo_link && (
            <button
              onClick={() => window.open(demo_link, "_blank")}
              className="bg-blue-600 text-white px-3 py-1.5 rounded-md text-sm font-medium hover:bg-blue-500 transition"
            >
              Ver Site
            </button>
          )}

          {app_link && (
            <button
              onClick={() => window.open(app_link, "_blank")}
              className="bg-purple-600 text-white px-3 py-1.5 rounded-md text-sm font-medium hover:bg-purple-500 transition"
            >
              Ver App
            </button>
          )}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Conheça os meus...</p>
        <h2 className={styles.sectionHeadText}>Projetos</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-[17px] max-w-3xl leading-[30px] text-secondary"
        >
          Aqui você encontra alguns dos meus projetos mais recentes, desenvolvidos com foco em 
          inovação, usabilidade e soluções práticas. Cada projeto reflete minhas habilidades 
          em desenvolvimento web, integração com APIs, design UI/UX e tecnologias modernas como 
          React, Node.js e Tailwind. Explore os projetos, veja o código e teste as demonstrações ao vivo!
        </motion.p>
      </div>

      {/* Cards centralizados */}
      <div className="mt-20 flex flex-wrap justify-center gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
