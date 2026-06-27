import { heroImageUrl } from "../data";

interface HeroProps {
  hero: {
    badge: string;
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
  };
}

const Hero = ({ hero }: HeroProps) => (
  <section className="relative isolate overflow-hidden">
    <div className="absolute inset-0">
      <img
        src={heroImageUrl}
        alt="Cabinas La Reserva"
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-slate-950/60" />
    </div>
    <div className="relative mx-auto max-w-7xl px-4 py-28 sm:px-6 lg:px-8">
      <div className="max-w-3xl space-y-6 text-white">
        <span className="inline-flex rounded-full bg-brand-50/90 px-4 py-2 text-sm font-semibold text-brand-800 shadow-sm shadow-black/10">
          {hero.badge}
        </span>
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          {hero.title}
        </h1>
        <p className="max-w-2xl text-base leading-8 text-slate-100 sm:text-lg">
          {hero.description}
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <a
            href="#sobre-nosotros"
            className="inline-flex items-center justify-center rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/20 transition hover:bg-brand-600"
          >
            {hero.primaryCta}
          </a>
          <a
            href="#ubicacion"
            className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
          >
            {hero.secondaryCta}
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
