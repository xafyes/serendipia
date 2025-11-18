import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-[var(--color-ink)] text-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 right-10 h-64 w-64 rounded-full bg-[var(--color-brand)]/25 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[var(--color-brand)]/15 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-16 grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr]">
        <div className="space-y-6">
          <p className="uppercase tracking-[0.35em] text-xs text-[var(--color-brand)]/80">
            Serendipia MKT
          </p>
          <h3 className="text-3xl font-semibold leading-snug">
            Creamos experiencias memorables que combinan estrategia y emoción.
          </h3>
          <p className="text-white/70 max-w-md">
            ¿Listo para darle vida a tu próxima idea? Conversemos y encontremos juntos
            la mejor ruta para tu marca.
          </p>
           {/* Enlace externo con icono */}
            <a
              href="https://www.instagram.com/tuserendipia.mkt/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full px-6 py-3 text-sm font-semibold bg-[var(--color-brand)] hover:bg-[var(--color-lavender)] shadow-lg transition"
              aria-label="Ir a Instagram de Serendipia"
            >
              <FaInstagram className="w-4 h-4" />
              <span>Instagram</span>
            </a>
            <a
              href="https://www.facebook.com/tuserendipia.mkt"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 ml-2 rounded-full px-6 py-3 text-sm font-semibold bg-[var(--color-blue-brand)] hover:bg-[var(--color-lavender)] shadow-lg transition"
              aria-label="Ir a Facebook de Serendipia"
            >
              <FaFacebook className="w-4 h-4" />
              <span>Facebook</span>
            </a>
        </div>

        <div className="space-y-4">
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-brand)]">
            Contacto
          </h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="font-medium text-white">tuserendipia.mkt@gmail.com</li>
            <li>+569 99999999</li>
            <li>Santiago, Chile</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-brand)]">
            Navega
          </h4>
          <nav className="flex flex-col space-y-3 text-sm text-white/70">
            <a className="transition hover:text-white" href="#home">
              Inicio
            </a>
            <a className="transition hover:text-white" href="#projects">
              Testimonios
            </a>
            <a className="transition hover:text-white" href="#contacto">
              Contacto
            </a>
          </nav>
        </div>
        </div>


      <div className="relative border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-6 text-xs uppercase tracking-[0.3em] text-white/50 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Serendipia. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a className="transition hover:text-white" href="#privacidad">
              Desarrollado por J2
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
