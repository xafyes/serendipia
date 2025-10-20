import { useMemo } from "react";

export default function AboutUs() {
  const features = [
    {
      title: "Nuestra Misión",
      text: "Ayudar a las empresas a conectar con las emociones de sus clientes a través del marketing emocional. Queremos que tu negocio no sea solo una marca, sino una historia que contar.",
    },
    {
      title: "Nuestros Valores",
      text: "En Serendipia, no solo usamos la tecnología como una herramienta, sino como una forma de humanizar tu negocio y tu marca.",
    },
    {
      title: "Estrategia",
      text: "Usamos las últimas tendencias y herramientas digitales para crear contenidos creativos, originales y atractivos que capten la atención y el interés de tu público objetivo.",
    },
    {
      title: "Visión",
      text: "Crear un mundo donde el marketing sea más humano, más atractivo y más efectivo. Creemos que el marketing no se trata solo de vender productos o servicios, sino de crear experiencias memorables y significativas para las personas.",
    },
  ];

  // Genera posiciones aleatorias solo una vez por render
  const dots = useMemo(
    () =>
      Array.from({ length: 20 }).map(() => ({
        top: Math.random() * 100, // porcentaje
        left: Math.random() * 100,
        size: 2 + Math.random() * 4, // entre 2 y 6 px
        delay: Math.random() * 5, // segundos
      })),
    []
  );

  return (
    <section className="relative w-full min-h-screen py-20 px-6 bg-gradient-to-b from-white to-[var(--color-lavender)]/10 overflow-hidden">
      {/* === Luces decorativas === */}
      <div className="absolute inset-0 pointer-events-none">
        {dots.map((dot, idx) => (
          <span
            key={idx}
            className="absolute rounded-full bg-[var(--color-brand)] opacity-40 animate-ping"
            style={{
              top: `${dot.top}%`,
              left: `${dot.left}%`,
              width: `${dot.size}px`,
              height: `${dot.size}px`,
              animationDelay: `${dot.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Título */}
      <div className="max-w-6xl mx-auto text-center mb-12 relative z-10">
        <h2 className="text-4xl font-bold text-[var(--color-burgundy)] mb-4">
          Sobre <span className="text-[var(--color-brand)]">Serendipia</span>
        </h2>
        <p className="text-lg text-[var(--color-ink)]/80 max-w-2xl mx-auto">
          En Serendipia, hacemos que el marketing sea una serendipia: un hallazgo afortunado e inesperado.
        </p>
      </div>

      {/* Cuadritos informativos */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {features.map((item, idx) => (
          <div
            key={idx}
            className="
              rounded-2xl p-6 bg-white/80
              backdrop-blur-sm shadow-md ring-1 ring-black/5
              hover:shadow-lg transition-all duration-300
              flex flex-col items-center text-center
            "
          >
            <h3 className="text-xl font-semibold text-[var(--color-burgundy)] mb-3">
              {item.title}
            </h3>
            <p className="text-[var(--color-ink)]/80 text-sm">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
