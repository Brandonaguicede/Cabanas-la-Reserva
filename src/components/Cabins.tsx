import { useEffect, useState } from "react";
import { cabins } from "../data";
import type { TranslationCabinDetail } from "../translations";

interface CabinsTranslation {
  featured: string;
  infoButton: string;
  closeButton: string;
  capacityLabel: string;
  includesLabel: string;
  recommendedLabel: string;
  details: Record<string, TranslationCabinDetail>;
}

interface CabinsProps {
  cabinsTranslation: CabinsTranslation;
}

const Cabins = ({ cabinsTranslation }: CabinsProps) => {
  const [selected, setSelected] = useState<string | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const selectedCabin = cabins.find((item) => item.id === selected);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveImageIndex((current) => current + 1);
    }, 4500);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!selected) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [selected]);

  return (
    <div className="space-y-8">
      <div className="grid gap-6 lg:grid-cols-3">
        {cabins.map((cabin) => {
          const cabinData = cabinsTranslation.details[cabin.id];
          return (
            <article
              key={cabin.id}
              className="group overflow-hidden rounded-[2.5rem] border border-slate-200/80 bg-white shadow-[0_20px_70px_rgba(15,23,42,0.08)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_30px_90px_rgba(15,23,42,0.14)]"
            >
              <div className="relative h-80 overflow-hidden">
                {cabin.images.map((image, index) => (
                  <img
                    key={image}
                    src={image}
                    alt={`${cabinData?.title ?? cabin.title} ${index + 1}`}
                    className={`absolute inset-0 h-full w-full object-cover transition-all duration-1000 group-hover:scale-105 ${
                      activeImageIndex % cabin.images.length === index
                        ? "scale-100 opacity-100"
                        : "scale-105 opacity-0"
                    }`}
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/10 to-transparent" />
                <div className="absolute left-4 top-4 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700 shadow-sm">
                  {cabinsTranslation.featured}
                </div>
                <div className="absolute bottom-5 right-5 flex items-center gap-2">
                  {cabin.images.map((_, index) => (
                    <span
                      key={index}
                      className={`h-2 w-2 rounded-full transition-colors ${
                        activeImageIndex % cabin.images.length === index
                          ? "bg-white"
                          : "bg-white/45"
                      }`}
                    />
                  ))}
                </div>
              </div>
              <div className="space-y-4 p-6">
                <h3 className="text-xl font-semibold text-slate-900">
                  {cabinData?.title ?? cabin.title}
                </h3>
                <p className="text-sm leading-7 text-slate-600">
                  {cabinData?.summary ?? cabin.features[0]}
                </p>
                <div className="grid gap-4 sm:grid-cols-[1fr_auto] sm:items-center">
                  <div className="space-y-2">
                    <div className="inline-flex rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-brand-700">
                      {cabinsTranslation.featured}
                    </div>
                    <p className="text-sm text-slate-500">
                      {cabinData?.recommended ??
                        "Ideal para parejas o familias que buscan descanso y confort."}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelected(cabin.id)}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/15 transition hover:bg-brand-700"
                  >
                    {cabinsTranslation.infoButton}
                    <span className="text-base">→</span>
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {selected ? (
        <section
          className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 p-4 sm:p-6"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setSelected(null);
          }}
        >
          <div className="mx-auto my-auto w-full max-w-3xl overflow-hidden rounded-[2rem] bg-white shadow-[0_30px_90px_rgba(15,23,42,0.18)]">
            <div className="flex flex-col gap-4 border-b border-slate-200 px-6 py-6 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-brand-600">
                  {selected
                    ? `${cabinsTranslation.infoButton} ${cabinsTranslation.featured}`
                    : ""}
                </p>
                <h3 className="mt-3 text-3xl font-semibold text-slate-900">
                  {cabinsTranslation.details[selected!]?.title ??
                    selectedCabin?.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
                aria-label={cabinsTranslation.closeButton}
              >
                ×
              </button>
            </div>
            <div className="grid gap-6 px-6 py-6 sm:grid-cols-[1.4fr_0.8fr]">
              <div className="space-y-4">
                <p className="text-sm leading-7 text-slate-600">
                  {cabinsTranslation.details[selected!]?.summary ??
                    "La cabaña incluye todas las comodidades necesarias para que tu estadía sea cómoda y tranquila. Ideal para parejas o familias que buscan un espacio acogedor y bien equipado."}
                </p>
                <ul className="space-y-3 text-slate-700">
                  {(
                    cabinsTranslation.details[selected!]?.features ??
                    selectedCabin?.features ??
                    []
                  ).map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-brand-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-[1.75rem] bg-slate-50 p-6">
                <div className="space-y-5">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                      {cabinsTranslation.details[selected!]?.capacity
                        ? "Capacity"
                        : "Capacidad"}
                    </p>
                    <p className="mt-2 text-lg font-semibold text-slate-900">
                      {cabinsTranslation.details[selected!]?.capacity ??
                        "2-4 personas"}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                      {cabinsTranslation.details[selected!]?.includes
                        ? "Includes"
                        : "Incluye"}
                    </p>
                    <p className="mt-2 text-lg font-semibold text-slate-900">
                      {cabinsTranslation.details[selected!]?.includes ??
                        "Aire acondicionado"}
                    </p>
                    <p className="text-sm text-slate-600">
                      {cabinsTranslation.details[selected!]?.includes ??
                        "TV, WiFi y baño privado"}
                    </p>
                  </div>
                  <div className="rounded-3xl bg-white p-4 shadow-sm">
                    <p className="text-xs uppercase tracking-[0.3em] text-brand-600">
                      {cabinsTranslation.details[selected!]?.recommended
                        ? "Recommended"
                        : "Recomendado"}
                    </p>
                    <p className="mt-2 text-sm text-slate-600">
                      {cabinsTranslation.details[selected!]?.recommended ??
                        "Perfecto para parejas o familias que buscan confort y privacidad."}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3 border-t border-slate-200 px-6 py-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-slate-500">
                {cabinsTranslation.details[selected!]?.recommended ??
                  "Más información disponible al contactarnos."}
              </p>
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="inline-flex items-center justify-center rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-700"
              >
                {cabinsTranslation.closeButton}
              </button>
            </div>
          </div>
        </section>
      ) : null}
    </div>
  );
};

export default Cabins;
