import { aboutImageUrl } from "../data";

interface AboutProps {
  about: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
  };
}

const About = ({ about }: AboutProps) => (
  <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
    <div className="rounded-[2rem] overflow-hidden shadow-card">
      <img
        src={aboutImageUrl}
        alt={about.title}
        className="h-full w-full object-cover"
      />
    </div>
    <div className="space-y-6 rounded-[2rem] border border-slate-200/80 bg-white p-8 shadow-soft sm:p-10">
      <div className="space-y-3">
        <p className="text-sm uppercase tracking-[0.24em] text-brand-600">
          {about.eyebrow}
        </p>
        <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
          {about.title}
        </h2>
      </div>
      {about.paragraphs.map((paragraph) => (
        <p key={paragraph} className="text-base leading-8 text-slate-600">
          {paragraph}
        </p>
      ))}
    </div>
  </div>
);

export default About;
