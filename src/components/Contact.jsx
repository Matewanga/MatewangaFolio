// src/components/Contact.jsx
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas, StarsCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = ({ theme = "dark" }) => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Rebeca",
          from_email: form.email,
          to_email: "rebeca.kamalandua@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Mensagem enviada com sucesso!");
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Erro ao enviar a mensagem, tente novamente.");
        }
      );
  };

  return (
    <div className="relative w-full min-h-screen flex flex-col xl:flex-row gap-10 overflow-hidden">
      
      {/* Fundo de estrelas apenas atrás do planeta */}
      <div className="absolute top-0 right-0 bottom-0 left-1/2 -z-10">
        <StarsCanvas />
      </div>

      {/* Card de contato ajustado */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className={`flex-[0.75] p-8 rounded-2xl z-10 mt-4 flex flex-col justify-between h-full ${
          theme === "dark"
            ? "bg-black-100/80 backdrop-blur-lg"
            : "bg-gray-100/90"
        }`}
      >
        <div>
          <p className={`${theme === "dark" ? styles.sectionSubText : "text-gray-700"}`}>
            Entre em contato
          </p>
          <h3 className={`${theme === "dark" ? styles.sectionHeadText : "text-gray-900"}`}>
            Contato
          </h3>

          <form ref={formRef} onSubmit={handleSubmit} className="mt-8 flex flex-col gap-6">
            <label className="flex flex-col">
              <span className={`font-medium mb-2 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                Seu Nome
              </span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Digite seu nome"
                className={`py-3 px-4 rounded-lg outline-none border-none font-medium ${
                  theme === "dark"
                    ? "bg-tertiary placeholder:text-secondary text-white"
                    : "bg-white placeholder:text-gray-400 text-gray-900"
                }`}
              />
            </label>

            <label className="flex flex-col">
              <span className={`font-medium mb-2 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                Seu Email
              </span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Digite seu email"
                className={`py-3 px-4 rounded-lg outline-none border-none font-medium ${
                  theme === "dark"
                    ? "bg-tertiary placeholder:text-secondary text-white"
                    : "bg-white placeholder:text-gray-400 text-gray-900"
                }`}
              />
            </label>

            <label className="flex flex-col">
              <span className={`font-medium mb-2 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                Mensagem
              </span>
              <textarea
                rows={6}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Digite sua mensagem"
                className={`py-3 px-4 rounded-lg outline-none border-none font-medium ${
                  theme === "dark"
                    ? "bg-tertiary placeholder:text-secondary text-white"
                    : "bg-white placeholder:text-gray-400 text-gray-900"
                }`}
              />
            </label>

            <button
              type="submit"
              className={`py-2 px-6 rounded-xl outline-none w-fit font-bold shadow-md shadow-primary ${
                theme === "dark" ? "bg-tertiary text-white" : "bg-blue-600 text-white"
              }`}
            >
              {loading ? "Enviando..." : "Enviar"}
            </button>
          </form>
        </div>

        {/* Links sociais no fundo do card */}
        <div className="flex gap-4 mt-8">
          {[
            { href: "https://github.com/Matewanga", label: "GitHub" },
            { href: "https://www.instagram.com/matewanga_", label: "Instagram" },
            { href: "https://www.linkedin.com/in/matewanga", label: "LinkedIn" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`hover:text-primary transition ${theme === "dark" ? "text-white" : "text-gray-900"}`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </motion.div>

      {/* Planeta 3D */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 w-full h-[550px] xl:h-auto z-10"
      >
        <EarthCanvas theme={theme} />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
