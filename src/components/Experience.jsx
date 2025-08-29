import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ exp, theme }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: theme === "dark" ? "#1d1836" : "#f0f0f0",
        color: theme === "dark" ? "#fff" : "#111",
        padding: "15px 20px",
      }}
      contentArrowStyle={{
        borderRight: theme === "dark" ? "6px solid #232631" : "6px solid #ccc",
      }}
      date={exp.date}
      iconStyle={{
        background: exp.iconBg,
        width: 40,
        height: 40,
      }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={exp.icon}
            alt={exp.institution || exp.company_name}
            className="w-[50%] h-[50%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className={theme === "dark" ? "text-white text-[20px] font-bold" : "text-gray-900 text-[20px] font-bold"}>
          {exp.institution || exp.company_name}
        </h3>
        <p
          className={theme === "dark" ? "text-secondary text-[14px] font-semibold" : "text-gray-700 text-[14px] font-semibold"}
          style={{ margin: 0 }}
        >
          {exp.degree || exp.title}
        </p>
      </div>
    </VerticalTimelineElement>
  );
};

const Experiences = ({ theme = "dark" }) => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center ${theme === "dark" ? "" : "text-gray-700"}`}>
          Minha Jornada Estudantil
        </p>
        <h2 className={`${styles.sectionHeadText} text-center ${theme === "dark" ? "" : "text-gray-900"}`}>
          Formações
        </h2>
      </motion.div>

      <div className="mt-12 flex flex-col">
        <VerticalTimeline lineColor={theme === "dark" ? "#232631" : "#ccc"}>
          {experiences.map((exp, index) => (
            <ExperienceCard key={`exp-${index}`} exp={exp} theme={theme} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experiences, "experiences");
