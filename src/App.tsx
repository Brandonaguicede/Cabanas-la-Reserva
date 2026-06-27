import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import ServicesCarousel from "./components/ServicesCarousel";
import Testimonials from "./components/Testimonials";
import WhatsAppButton from "./components/WhatsAppButton";
import Cabins from "./components/Cabins";
import { translations, type Language } from "./translations";

function App() {
  const [language, setLanguage] = useState<Language>("es");
  const t = translations[language];

  useEffect(() => {
    document.documentElement.lang = language;
    document.title =
      language === "es"
        ? "Cabañas La Reserva | Hospedaje en Matambú"
        : "Cabañas La Reserva | Lodging in Matambú";
  }, [language]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <NavBar
        language={language}
        links={t.navLinks}
        onLanguageToggle={() =>
          setLanguage((current) => (current === "es" ? "en" : "es"))
        }
      />
      <main>
        <Hero hero={t.hero} />
        <section className="mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            <article className="rounded-[28px] bg-white p-8 shadow-soft">
              <p className="text-sm uppercase tracking-[0.3em] text-brand-600">
                {t.cards.choice}
              </p>
              <h2 className="mt-4 text-2xl font-semibold text-slate-900">
                {t.cards.choiceTitle}
              </h2>
              <p className="mt-4 text-slate-600">{t.cards.choiceText}</p>
              <a
                href="#sobre-nosotros"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-900"
              >
                {language === "es" ? "Ver más" : "See more"}
              </a>
            </article>
            <article className="rounded-[28px] bg-white p-8 shadow-soft">
              <p className="text-sm uppercase tracking-[0.3em] text-brand-600">
                {t.cards.experiences}
              </p>
              <h2 className="mt-4 text-2xl font-semibold text-slate-900">
                {t.cards.experiencesTitle}
              </h2>
              <p className="mt-4 text-slate-600">{t.cards.experiencesText}</p>
            </article>
            <article className="rounded-[28px] bg-white p-8 shadow-soft">
              <p className="text-sm uppercase tracking-[0.3em] text-brand-600">
                {t.cards.booking}
              </p>
              <h2 className="mt-4 text-2xl font-semibold text-slate-900">
                {t.cards.bookingTitle}
              </h2>
              <p className="mt-4 text-slate-600">{t.cards.bookingText}</p>
            </article>
          </div>
        </section>

        <section id="sobre-nosotros" className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <About about={t.about} />
          </div>
        </section>

        <section id="instalaciones" className="bg-slate-50 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 text-center">
              <p className="text-sm uppercase tracking-[0.28em] text-brand-600">
                {t.installations.eyebrow}
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">
                {t.installations.title}
              </h2>
              <p className="mt-3 text-slate-600 sm:text-lg">
                {t.installations.description}
              </p>
            </div>
            <Cabins cabinsTranslation={t.cabins} />
          </div>
        </section>

        <section id="servicios" className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ServicesCarousel section={t.services} slides={t.serviceSlides} />
          </div>
        </section>

        <section className="bg-slate-50 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Gallery gallery={t.gallery} />
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Testimonials section={t.testimonials} />
          </div>
        </section>

        <section id="ubicacion" className="bg-slate-50 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Contact contact={t.contact} />
          </div>
        </section>
      </main>
      <Footer copyright={t.footer.copyright} />
      <WhatsAppButton />
    </div>
  );
}

export default App;
