// src/components/Projects.jsx
// Nota: Este componente encapsula la sección de casos de éxito para mantener el Home.jsx limpio.
import JavieraMiranda from "../assets/JavieraMiranda.jpg";
import VanesaRios from "../assets/VanesaRios.jpg";
const PROJECT_CASES = [
  {
    title: "Agencia Adaptate",
    description:
      "El servicio que ofrece Serendipia ha sido de gran ayuda en mi negocio. Mis redes se ven ordenadas, bonitas y llamativas.",
    testimonial:
      "Utilizan los colores de mi marca, escuchan y entienden mis ideas, haciendo de nuestro trato algo fluido e invaluable.",
    author: "Vanesa Ríos",
    role: "Founder",
    image:
      VanesaRios,
  },
  {
    title: "THEIRA",
    description:
      "Desarrollamos un ecosistema digital que conecta a profesionales de forma simple en el trabajo remoto",
    testimonial:
      "Pasamos de no tener ninguna estrategia digital a tener una comunidad activa y comprometida que crece día a día.",
    author: "Javiera Miranda",
    role: "Founder",
    image:
      JavieraMiranda,
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
