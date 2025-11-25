// src/components/HeroText.jsx
import heroBg from "../assets/hero-background.svg";
import serendipiaLogo from "../assets/serendipia-logo.png";

export default function HeroText() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center text-center px-6 text-white overflow-hidden">
      {/* Imagen de fondo absoluta */}
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      {/* Capa de color base opcional para mezclar con el SVG */}
      <div className="absolute inset-0 -z-10 bg-[#541A39]/80" />
      <img
        src={serendipiaLogo}
        alt="Logo de Serendipia"
        className="w-32 h-32 mb-6 mt-5"
        />

      <h1 className="text-5xl font-bold max-w-2xl drop-shadow-lg">
        Bienvenidos a <span className="text-[var(--color-brand)]">Serendipia</span>
      </h1>

      <p className="mt-6 text-lg max-w-xl text-white/90">
       Somos una agencia digital que acompaña a emprendedores y marcas creativas en la búsqueda de sus objetivos de presencia online y posicionamiento, trabajando como un socio cercano y estratégico.
      </p>

    </section>
  );
}
