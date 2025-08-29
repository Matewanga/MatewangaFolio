import { motion } from "framer-motion";
import { styles } from "../styles";
import ComputersCanvas from "./canvas/Computers";

const Hero = () => {
  const words = [
    { text: "Olá eu sou", color: "white" },
    { text: "Rebeca", color: "#915EFF" },
  ];

  return (
    <section id="hero" className={`relative w-full h-screen mx-auto`}>
      {/* Texto e linha lateral */}
      <div
        className={`absolute inset-0 top-[60px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        {/* Linha e bolinha à esquerda */}
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        {/* Texto de apresentação */}
        <div>
          <h1 className={`${styles.heroHeadText} flex flex-wrap`}>
            {words.map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: [0, 1, 0], y: [20, 0, 20] }}
                transition={{
                  delay: index * 0.3,
                  duration: 4,
                  repeat: Infinity,
                  repeatDelay: 0.5,
                }}
                className="mr-2"
                style={{ color: word.color }}
              >
                {word.text}
              </motion.span>
            ))}
          </h1>
          <p className="text-lg mt-4 text-gray-400">
            Desenvolvedora Full Stack, Designer UI/UX e Engenheira de Software
            <br className="sm:block hidden" />
            com foco em Inteligência Artificial e Cibersegurança
          </p>
        </div>
      </div>

      {/* Computador 3D */}
      <div className="absolute inset-0 top-0 w-full h-full">
        <ComputersCanvas />
      </div>

      {/* Indicador de scroll */}
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
