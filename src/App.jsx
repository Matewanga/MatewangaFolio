// src/App.jsx
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  Certifications,
  StarsCanvas,
} from "./components";

const App = () => {
  return (
    <div className="bg-[#050816] text-white relative z-0">
      {/* Navbar e Hero */}
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>

      {/* Seções */}
      <About />
      <Tech />
      <Experience />
      <Certifications />
      <Works />

      {/* Contato e estrelas */}
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  );
};

export default App;
