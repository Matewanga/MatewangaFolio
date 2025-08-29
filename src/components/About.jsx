// src/components/About.jsx
import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

// Importando a foto correta
import suafoto from "../assets/suafoto.jpeg";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt
    className="xs:w-[250px] w-full"
    tiltMaxAngleX={45}
    tiltMaxAngleY={45}
    scale={1}
    transitionSpeed={450}
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full p-[1px] rounded-[20px] shadow-card green-pink-gradient"
    >
      <div
        className="rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col bg-tertiary"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />
        <h3 className="text-[20px] font-bold text-center text-white">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      {/* Container flex: texto + imagem */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-10 mt-10">
        {/* Texto */}
        <div className="flex-1">
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>Introdução</p>
            <h2 className={styles.sectionHeadText}>Sobre mim</h2>
          </motion.div>

          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            Olá! Sou Rebeca, desenvolvedora Full Stack e Designer UI/UX com foco 
            em Inteligência Artificial e Cibersegurança. Tenho experiência em React,
             Node.js e outras tecnologias modernas, criando soluções eficientes, escaláveis e 
             amigáveis para o usuário. Adoro transformar ideias em projetos reais e inovadores.
          </motion.p>
        </div>

        {/* Imagem */}
        <motion.div
          variants={fadeIn("right", "spring", 0.5, 0.75)}
          className="flex-1 flex justify-center md:justify-end"
        >
          <div className="w-[250px] h-[250px] rounded-xl overflow-hidden border-4 border-purple-500 mt-5">
            <img
              src={suafoto}
              alt="Minha Foto"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* Cards de serviços */}
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
