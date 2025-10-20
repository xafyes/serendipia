import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";


const IconAbout = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" {...props}>
    <path d="M12 12v6m0-10h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
  </svg>
);
const IconProjects = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" {...props}>
    <path d="M3 7h18M3 12h18M3 17h18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
  </svg>
);
const IconContact = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" {...props}>
    <path d="M21 8v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8m0 0 7.6 4.75a2 2 0 0 0 2.1 0L20 8M3 8l6.5 4.1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
  </svg>
);
const IconHome = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" {...props}>
    <path d="m3 10 9-7 9 7v9a2 2 0 0 1-2 2h-4v-6H9v6H5a2 2 0 0 1-2-2v-9Z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round"/>
  </svg>
);

const NAV = [
  { to: "/", label: "Inicio", icon: IconHome },
  { to: "/about", label: "Sobre nosotros", icon: IconAbout },
  { to: "/projects", label: "Proyectos", icon: IconProjects },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false); // móvil

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 120);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeDrawer = () => setOpen(false);

  return (
    <>
      {/* ===== Desktop / Tablet ===== */}
      {/* Top pill (solo visible antes del scroll) */}
      <header
        className={`
          hidden md:flex fixed inset-x-0 top-17 z-50 justify-center transition-opacity
          ${isScrolled ? "opacity-0 pointer-events-none" : "opacity-100"}
        `}
      >
        <div
          className="
            relative overflow-hidden
            flex items-center gap-5
            rounded-full px-4 py-2
            bg-white/90 backdrop-blur-sm
            shadow-md ring-1 ring-black/5
            max-w-fit
          "
        >
          {/* brillitos sutiles */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/3 w-1 h-1 bg-[var(--color-brand)] rounded-full blur-[2px] opacity-40 animate-pulse" />
            <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-[var(--color-lavender)] rounded-full blur-[2px] opacity-30 animate-ping" />
          </div>

          <nav className="flex items-center gap-5 z-10">
            {NAV.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  [
                    "text-sm font-medium transition-colors whitespace-nowrap",
                    "text-[var(--color-ink)]/70 hover:text-[var(--color-burgundy)]",
                    isActive ? "text-[var(--color-burgundy)]" : "",
                  ].join(" ")
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          <Link
            to="/contact"
            className="
              z-10 inline-block rounded-full px-3 py-1.5 text-sm font-semibold
              bg-[var(--color-brand)] text-white
              hover:bg-[var(--color-lavender)] transition-colors shadow
            "
          >
            Contáctanos
          </Link>
        </div>
      </header>

      {/* Rail vertical derecho de íconos (full línea) cuando scrollea */}
      {isScrolled && (
        <aside
          className="
            hidden md:flex fixed right-2 top-1/2 -translate-y-1/2 z-50
            flex-col items-center gap-3
            rounded-full p-2
            bg-white/90 backdrop-blur-sm
            shadow-xl ring-1 ring-black/5
          "
          aria-label="Navegación secundaria"
        >
          {NAV.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                [
                  "group relative flex items-center justify-center",
                  "h-10 w-10 rounded-full",
                  "text-[var(--color-ink)]/70 hover:text-[var(--color-burgundy)]",
                  isActive
                    ? "bg-[var(--color-peach)]/40 text-[var(--color-burgundy)]"
                    : "bg-white/90",
                  "hover:bg-[var(--color-peach)]/30",
                  "transition-colors shadow"
                ].join(" ")
              }
            >
              <Icon />
              {/* etiqueta al hover */}
              <span
                className="
                  pointer-events-none absolute right-full mr-2
                  origin-right scale-95 opacity-0 translate-x-1
                  group-hover:opacity-100 group-hover:translate-x-0 group-hover:scale-100
                  transition-all
                  rounded-lg px-2 py-1 text-xs font-medium
                  bg-[var(--color-burgundy)] text-white shadow
                  whitespace-nowrap
                "
              >
                {label}
              </span>
            </NavLink>
          ))}
        </aside>
      )}

      {/* ===== Móvil ===== */}
      <header className="md:hidden fixed inset-x-0 top-0 z-50">
        <div className="mx-auto max-w-screen px-3 py-2 flex items-center justify-between">
          <div
            className="
              rounded-full px-3 py-2
              bg-white/90 backdrop-blur-sm shadow-md ring-1 ring-black/5
              text-xs font-semibold text-[var(--color-burgundy)]
            "
          >
            Menú
          </div>

          <button
            aria-label="Abrir menú"
            onClick={() => setOpen(true)}
            className="inline-flex items-center justify-center h-9 w-9 rounded-lg bg-white/90 shadow ring-1 ring-black/5 active:scale-95 transition"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" />
            </svg>
          </button>
        </div>

        {open && (
          <>
            <div className="fixed inset-0 bg-black/30" onClick={closeDrawer} />
            <nav
              className="fixed top-0 right-0 h-full w-72 bg-white shadow-2xl p-5 flex flex-col gap-3"
              role="dialog"
              aria-modal="true"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-[var(--color-burgundy)]">Navegación</span>
                <button
                  aria-label="Cerrar"
                  onClick={closeDrawer}
                  className="h-8 w-8 rounded-md bg-black/5 active:scale-95 transition"
                >
                  ✕
                </button>
              </div>

              {NAV.map(({ to, label, icon: Icon }) => (
                <NavLink
                  key={to}
                  to={to}
                  onClick={closeDrawer}
                  className={({ isActive }) =>
                    [
                      "flex items-center gap-3 rounded-lg px-3 py-2 text-[15px] font-medium transition-colors",
                      "text-[var(--color-ink)]/80 hover:text-[var(--color-burgundy)] hover:bg-[var(--color-peach)]/25",
                      isActive ? "text-[var(--color-burgundy)] bg-[var(--color-peach)]/30" : "",
                    ].join(" ")
                  }
                >
                  <Icon />
                  {label}
                </NavLink>
              ))}

              <Link
                to="/contact"
                onClick={closeDrawer}
                className="mt-2 rounded-lg px-3 py-2 text-sm font-semibold text-white bg-[var(--color-brand)] hover:bg-[var(--color-lavender)] transition-colors text-center"
              >
                Contáctanos
              </Link>
            </nav>
          </>
        )}
      </header>
    </>
  );
}
