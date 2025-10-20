// src/components/Projects.jsx
// Nota: Este componente encapsula la sección de casos de éxito para mantener el Home.jsx limpio.
const PROJECT_CASES = [
  {
    title: "Aurora Cosmetics",
    description:
      "Rediseñamos la narrativa digital de la marca con una experiencia inmersiva centrada en el autocuidado consciente.",
    testimonial:
      "Serendipia entendió el ADN de nuestra marca y lo tradujo en una campaña que duplicó el engagement en solo dos meses.",
    author: "Laura Méndez",
    role: "Directora de Marketing",
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Canvas Cowork",
    description:
      "Desarrollamos un ecosistema digital que conecta a profesionales creativos con espacios colaborativos en tiempo real.",
    testimonial:
      "Pasamos de tener espacios vacíos a listas de espera semanales. La estrategia de contenidos fue un antes y un después.",
    author: "Tomás Aguilar",
    role: "Co-Founder",
    image:
      "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Pulse Fitness",
    description:
      "Creamos una comunidad activa a través de retos interactivos y contenido social que celebraba cada logro de sus miembros.",
    testimonial:
      "La comunidad creció un 180% y cada interacción se siente humana, auténtica y emocionante.",
    author: "Valentina Rojas",
    role: "CEO",
    image:
      "https://images.unsplash.com/photo-1546483875-ad9014c88eba?auto=format&fit=crop&w=800&q=80",
  },
];

export default function Projects() {
  return (
    <section className="relative w-full py-20 bg-white" id="projects">
      <div className="max-w-6xl mx-auto px-6">
        {/* Encabezado de la sección */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.25em] text-sm text-[var(--color-brand)] font-semibold">
            Casos de éxito
          </p>
          <h2 className="mt-3 text-4xl font-bold text-[var(--color-ink)]">
            Proyectos que cuentan historias memorables
          </h2>
          <p className="mt-4 text-[var(--color-ink)]/70 max-w-2xl mx-auto">
            Cada colaboración es una oportunidad para crear conexiones emocionales reales. Estos son algunos de los proyectos que han transformado la manera en que las marcas se relacionan con su audiencia.
          </p>
        </div>

        {/* Tarjetas de proyectos */}
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
          {PROJECT_CASES.map((project) => (
            <article
              key={project.title}
              className="group h-full rounded-3xl overflow-hidden border border-black/5 shadow-sm hover:shadow-xl transition-shadow duration-300 bg-white"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={`Proyecto ${project.title}`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-8 flex flex-col gap-6">
                <div>
                  <h3 className="text-2xl font-semibold text-[var(--color-ink)]">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-[var(--color-ink)]/70 leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <figure className="border-t border-black/10 pt-5">
                  <blockquote className="text-[var(--color-ink)]/80 italic leading-relaxed">
                    “{project.testimonial}”
                  </blockquote>
                  <figcaption className="mt-4 text-sm font-medium text-[var(--color-ink)]">
                    {project.author} · <span className="text-[var(--color-ink)]/60">{project.role}</span>
                  </figcaption>
                </figure>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
