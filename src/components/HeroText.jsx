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
        Descubre cómo potenciar tu marca y conectar con tus clientes de manera única. En Serendipia, combinamos creatividad y estrategia para llevar tu negocio al siguiente nivel.
      </p>

      <div className="mt-8 flex gap-4">
        <button className="btn-accent">Sobre nosotros</button>
        <button className="btn-peach">Más información</button>
      </div>
    </section>
  );
}
