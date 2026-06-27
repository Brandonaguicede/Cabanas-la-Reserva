import { useState } from "react";
import logoImage from "../assets/logo.png";
import type { Language } from "../translations";

interface NavBarProps {
  language: Language;
  onLanguageToggle: () => void;
  links: Array<{ label: string; href: string }>;
}

const NavBar = ({ language, onLanguageToggle, links }: NavBarProps) => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-slate-50/95 backdrop-blur-xl shadow-sm">
      <div className="relative mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-6">
          <img
            src={logoImage}
            alt="Logo Cabañas La Reserva"
            className="h-12 w-12 rounded-full border border-slate-200 bg-white object-cover"
          />
          <div>
            <p className="text-sm font-semibold text-slate-900">Cabañas</p>
            <p className="text-xs text-slate-500">La Reserva</p>
          </div>
        </a>

        <nav className="hidden justify-center rounded-full bg-white px-4 py-2 shadow-sm md:flex">
          <div className="flex items-center gap-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>

        <div className="flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={onLanguageToggle}
            className="inline-flex h-11 items-center justify-center rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-slate-400 hover:text-slate-900"
            aria-label={
              language === "es" ? "Cambiar a inglés" : "Switch to Spanish"
            }
          >
            {language === "es" ? "EN" : "ES"}
          </button>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 shadow-sm transition hover:border-slate-400 hover:text-slate-900 md:hidden"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen((current) => !current)}
          >
            <span className="sr-only">
              {open ? "Cerrar menú" : "Abrir menú"}
            </span>
            <div className="flex h-5 w-5 flex-col justify-between">
              <span
                className={`h-[2px] w-full bg-slate-900 transition ${open ? "translate-y-[8px] rotate-45" : ""}`}
              />
              <span
                className={`h-[2px] w-full bg-slate-900 transition ${open ? "opacity-0" : "opacity-100"}`}
              />
              <span
                className={`h-[2px] w-full bg-slate-900 transition ${open ? "translate-y-[-8px] -rotate-45" : ""}`}
              />
            </div>
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-slate-200 bg-white/95 px-4 py-5 shadow-lg md:hidden">
          <div className="flex flex-col gap-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-2xl px-4 py-3 text-base font-medium text-slate-700 transition hover:bg-slate-100"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
};

export default NavBar;
