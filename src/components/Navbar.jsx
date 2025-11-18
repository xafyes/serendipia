import { useEffect, useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";




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
  { id: "home", label: "Inicio", icon: IconHome },
  { id: "about", label: "Sobre nosotros", icon: IconAbout },
  { id: "projects", label: "Proyectos", icon: IconProjects },
  { id: "contact", label: "Contacto", icon: IconContact },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false); // móvil
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 120);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);


  const doScroll = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const scrollToId = (id) => {
    setOpen(false); 
    if (location.pathname !== "/") {

      navigate(`/#${id}`, { replace: false });
    } else {

      doScroll(id);

      history.replaceState(null, "", `#${id}`);
    }
  };

  return (
    <>
      {/* ===== Desktop / Tablet ===== */}
      <header
        className={`
          hidden md:flex fixed inset-x-0 top-17 z-50 justify-center transition-opacity
          ${isScrolled ? "opacity-0 pointer-events-none" : "opacity-100"}
        `}
      >
        <div className="relative overflow-hidden flex items-center gap-5 rounded-full px-4 py-2 bg-white/90 backdrop-blur-sm shadow-md ring-1 ring-black/5 max-w-fit">
          {/* brillitos sutiles */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/3 w-1 h-1 bg-[var(--color-brand)] rounded-full blur-[2px] opacity-40 animate-pulse" />
            <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-[var(--color-lavender)] rounded-full blur-[2px] opacity-30 animate-ping" />
          </div>

          <nav className="flex items-center gap-5 z-10">
            {NAV.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToId(id)}
                className={[
                  "text-sm font-medium transition-colors whitespace-nowrap",
                  "text-[var(--color-ink)]/70 hover:text-[var(--color-burgundy)]",
                ].join(" ")}
              >
                {label}
              </button>
            ))}
          </nav>

          <button
            onClick={() => scrollToId("contact")}
            className="
              z-10 inline-block rounded-full px-3 py-1.5 text-sm font-semibold
              bg-[var(--color-brand)] text-white
              hover:bg-[var(--color-lavender)] transition-colors shadow
            "
          >
            Contáctanos
          </button>
        </div>
      </header>

      {/* Rail vertical derecho (cuando scrollea) */}
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
          {NAV.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => scrollToId(id)}
              className={[
                "group relative flex items-center justify-center",
                "h-10 w-10 rounded-full",
                "text-[var(--color-ink)]/70 hover:text-[var(--color-brand)]",
                "bg-white/90 hover:bg-[var(--color-peach)]/30",
                "transition-colors shadow",
              ].join(" ")}
              aria-label={label}
            >
              <Icon />
              <span
                className="
                  pointer-events-none absolute right-full mr-2
                  origin-right scale-95 opacity-0 translate-x-1
                  group-hover:opacity-100 group-hover:translate-x-0 group-hover:scale-100
                  transition-all
                  rounded-lg px-4 py-1 text-xs font-medium
                  bg-white text-[var(--color-brand)] shadow
                  whitespace-nowrap
                "
              >
                {label}
              </span>
            </button>
          ))}
        </aside>
      )}

      {/* ===== Móvil ===== */}
      <header className="md:hidden fixed inset-x-0 top-0 z-50">
        <div className="mx-auto max-w-screen px-3 py-2 flex items-center justify-between">

          <button
  onClick={() => setOpen(true)}
  className="
    h-11 w-11 flex items-center justify-center
    rounded-xl
    bg-white/10
    backdrop-blur-xl
    shadow-lg
    border border-white/20
    hover:bg-white/20
    transition-all active:scale-95
  "
>
<svg width="22" height="22" viewBox="0 0 24 24" fill="none">
  <path d="M3 6h18M3 12h18M3 18h18"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    opacity="0.8"
  />
</svg>
</button>
        </div>

        {open && (
          <>
            <div className="fixed inset-0 bg-black/30" onClick={() => setOpen(false)} />
            <nav
              className="fixed top-0 right-0 h-full w-72 bg-white shadow-2xl p-5 flex flex-col gap-3"
              role="dialog"
              aria-modal="true"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-[var(--color-burgundy)]">Navegación</span>
                <button
                  aria-label="Cerrar"
                  onClick={() => setOpen(false)}
                  className="h-8 w-8 rounded-md bg-black/5 active:scale-95 transition"
                >
                  ✕
                </button>
              </div>

              {NAV.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => scrollToId(id)}
                  className={[
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-[15px] font-medium transition-colors",
                    "text-[var(--color-ink)]/80 hover:text-[var(--color-burgundy)] hover:bg-[var(--color-peach)]/25",
                  ].join(" ")}
                >
                  <Icon />
                  {label}
                </button>
              ))}

              <button
                onClick={() => scrollToId("contact")}
                className="mt-2 rounded-lg px-3 py-2 text-sm font-semibold text-white bg-[var(--color-brand)] hover:bg-[var(--color-lavender)] transition-colors text-center"
              >
                Contáctanos
              </button>
            </nav>
          </>
        )}
      </header>
    </>
  );
}