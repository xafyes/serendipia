// src/components/HeroText.jsx
import heroBg from "../assets/hero-background.svg";

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

      <h1 className="text-5xl font-bold max-w-2xl drop-shadow-lg">
        Bienvenidos a <span className="text-[var(--color-brand)]">Serendipia</span>
      </h1>

      <p className="mt-6 text-lg max-w-xl text-white/90">
       En nuestra agencia Serendipia convertimos esa esencia en experiencias auténticas que generan confianza, cercanía y una conexión emocional capaz de diferenciarte en cada paso.
      </p>

    </section>
  );
}
