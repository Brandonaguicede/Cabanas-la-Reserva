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
      <div className="relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-slate-950/5 shadow-soft">
        <div
          className="flex transition-transform duration-700"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {slides.map((slide) => {
            const image = serviceImages.find((item) => item.id === slide.id);
            return (
              <article key={slide.id} className="min-w-full">
                <div className="relative h-96 sm:h-[28rem]">
                  <img
                    src={image?.image}
                    alt={slide.title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-3xl font-semibold">{slide.title}</h3>
                    <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-100">
                      {slide.items.map((item) => (
                        <li
                          key={item}
                          className="before:mr-2 before:inline-block before:h-2 before:w-2 before:rounded-full before:bg-brand-500 before:align-middle"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
        <div className="absolute inset-x-0 bottom-4 flex justify-center gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`h-3 w-3 rounded-full transition ${activeIndex === index ? "bg-white" : "bg-white/40"}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesCarousel;
