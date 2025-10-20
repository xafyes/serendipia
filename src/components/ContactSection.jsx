// src/components/ContactSection.jsx
import { useState } from "react";

const initialFormState = {
  name: "",
  email: "",
  message: "",
};

export default function ContactSection() {
  const [formData, setFormData] = useState(initialFormState);
  const [status, setStatus] = useState({ type: null, message: "" });

  // Maneja los cambios en cada campo del formulario.
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Envía los datos al endpoint solicitado y gestiona el feedback visual.
  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ type: "loading", message: "Enviando mensaje..." });

    try {
      const response = await fetch("/api/message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("No se pudo enviar el mensaje");
      }

      setFormData(initialFormState);
      setStatus({ type: "success", message: "¡Mensaje enviado con éxito!" });
    } catch {
      setStatus({ type: "error", message: "Ocurrió un problema. Intenta nuevamente." });
    }
  };

  return (
    <section
      id="contacto"
      className="relative w-full py-20 bg-gradient-to-b from-white via-white to-[var(--color-brand)]/10"
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Encabezado descriptivo */}
        <div className="text-center mb-14">
          <p className="uppercase tracking-[0.25em] text-sm text-[var(--color-brand)] font-semibold">
            Conversemos
          </p>
          <h2 className="mt-3 text-4xl font-bold text-[var(--color-ink)]">
            ¿Listo para crear la próxima experiencia memorable?
          </h2>
          <p className="mt-4 text-[var(--color-ink)]/70 max-w-2xl mx-auto">
            Cuéntanos qué te gustaría lograr. Nuestro equipo responderá con ideas personalizadas para tu marca.
          </p>
        </div>

        {/* Formulario de contacto */}
        <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-xl border border-black/5 p-10">
          <form className="grid gap-6" onSubmit={handleSubmit}>
            <div className="grid gap-2">
              <label htmlFor="name" className="text-sm font-semibold text-[var(--color-ink)]">
                Nombre
              </label>
              <input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Tu nombre completo"
                className="w-full rounded-2xl border border-black/10 px-4 py-3 text-[var(--color-ink)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand)]/60"
              />
            </div>

            <div className="grid gap-2">
              <label htmlFor="email" className="text-sm font-semibold text-[var(--color-ink)]">
                Correo electrónico
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="tu@email.com"
                className="w-full rounded-2xl border border-black/10 px-4 py-3 text-[var(--color-ink)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand)]/60"
              />
            </div>

            <div className="grid gap-2">
              <label htmlFor="message" className="text-sm font-semibold text-[var(--color-ink)]">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Cuéntanos sobre tu proyecto o idea"
                className="w-full rounded-2xl border border-black/10 px-4 py-3 text-[var(--color-ink)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand)]/60"
              />
            </div>

            <button
              type="submit"
              className="btn-accent inline-flex items-center justify-center gap-2 text-base"
              disabled={status.type === "loading"}
            >
              {status.type === "loading" ? "Enviando..." : "Enviar mensaje"}
            </button>
          </form>

          {/* Mensaje de estado accesible para feedback inmediato */}
          <p
            className="mt-6 text-sm text-center"
            role="status"
            aria-live="polite"
          >
            {status.message}
          </p>
        </div>
      </div>
    </section>
  );
}
