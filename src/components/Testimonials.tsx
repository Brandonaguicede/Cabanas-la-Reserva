interface Testimonial {
  initials: string;
  name: string;
  quote: string;
  date: string;
}

interface TestimonialsProps {
  section: {
    eyebrow: string;
    title: string;
    description: string;
    items: Testimonial[];
  };
}

const Testimonials = ({ section }: TestimonialsProps) => (
  <div className="space-y-8">
    <div className="space-y-4 text-center">
      <p className="text-sm uppercase tracking-[0.28em] text-brand-600">
        {section.eyebrow}
      </p>
      <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
        {section.title}
      </h2>
      <p className="mx-auto max-w-2xl text-slate-600">{section.description}</p>
    </div>
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {section.items.map(({ initials, name, quote, date }) => (
        <article
          key={name}
          className="rounded-[2rem] border border-slate-200/80 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-card"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-100 text-lg font-bold text-brand-700">
              {initials}
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">{name}</h3>
              <p className="text-sm text-slate-500">{date}</p>
            </div>
          </div>
          <p className="mt-6 text-slate-600">“{quote}”</p>
        </article>
      ))}
    </div>
  </div>
);

export default Testimonials;
