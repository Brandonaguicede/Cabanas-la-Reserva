import { useEffect, useState } from "react";
import { serviceSlides as serviceImages } from "../data";

interface ServiceSlide {
  id: string;
  title: string;
  items: string[];
}

interface ServicesCarouselProps {
  section: {
    eyebrow: string;
    title: string;
    description: string;
  };
  slides: ServiceSlide[];
}

const ServicesCarousel = ({ section, slides }: ServicesCarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const showPrevious = () => {
    setActiveIndex((current) => (current - 1 + slides.length) % slides.length);
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % slides.length);
  };

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="space-y-8">
      <div className="space-y-4 text-center">
        <p className="text-sm uppercase tracking-[0.28em] text-brand-600">
          {section.eyebrow}
        </p>
        <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
          {section.title}
        </h2>
        <p className="mx-auto max-w-2xl text-slate-600">
          {section.description}
        </p>
      </div>
      <div className="group relative overflow-hidden rounded-[2rem] border border-white/60 bg-slate-950 shadow-soft">
        <div
          className="flex transition-transform duration-700"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {slides.map((slide) => {
            const image = serviceImages.find((item) => item.id === slide.id);
            return (
              <article key={slide.id} className="min-w-full">
                <div className="relative h-[24rem] sm:h-[26rem]">
                  <img
                    src={image?.image}
                    alt={slide.title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-950/55 via-slate-950/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-slate-950/70 to-transparent" />
                  <div className="absolute inset-x-5 bottom-1/2 mx-auto max-w-3xl translate-y-1/2 rounded-3xl border border-white/15 bg-slate-950/65 p-6 text-white shadow-2xl backdrop-blur-md sm:inset-x-20 sm:p-10">
                    <h3 className="text-center text-3xl font-semibold tracking-tight sm:text-4xl">{slide.title}</h3>
                    <ul className="mx-auto mt-6 max-w-2xl space-y-4 text-base leading-7 text-slate-100 sm:text-lg">
                      {slide.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3"
                        >
                          <svg
                            aria-hidden="true"
                            viewBox="0 0 20 20"
                            fill="none"
                            className="mt-0.5 h-5 w-5 shrink-0 text-brand-400"
                          >
                            <circle cx="10" cy="10" r="9" fill="currentColor" fillOpacity="0.18" />
                            <path d="m6.5 10 2.25 2.25 4.75-4.75" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
        <button
          type="button"
          onClick={showPrevious}
          className="absolute left-4 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-slate-950/45 text-white shadow-lg backdrop-blur transition hover:scale-105 hover:bg-slate-950/70 focus:outline-none focus:ring-2 focus:ring-white sm:flex"
          aria-label="Ver servicio anterior"
        >
          <span aria-hidden="true" className="text-2xl leading-none">‹</span>
        </button>
        <button
          type="button"
          onClick={showNext}
          className="absolute right-4 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-slate-950/45 text-white shadow-lg backdrop-blur transition hover:scale-105 hover:bg-slate-950/70 focus:outline-none focus:ring-2 focus:ring-white sm:flex"
          aria-label="Ver servicio siguiente"
        >
          <span aria-hidden="true" className="text-2xl leading-none">›</span>
        </button>
        <div className="absolute right-6 top-5 flex gap-2 rounded-full border border-white/15 bg-slate-950/45 px-3 py-2 backdrop-blur-md">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`h-2 rounded-full transition-all ${activeIndex === index ? "w-6 bg-white" : "w-2 bg-white/45 hover:bg-white/70"}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesCarousel;
