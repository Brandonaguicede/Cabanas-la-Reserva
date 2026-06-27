import { galleryImages } from "../data";

interface GalleryProps {
  gallery: {
    eyebrow: string;
    title: string;
    description: string;
  };
}

const Gallery = ({ gallery }: GalleryProps) => (
  <div className="space-y-8">
    <div className="space-y-4 text-center">
      <p className="text-sm uppercase tracking-[0.28em] text-brand-600">
        {gallery.eyebrow}
      </p>
      <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
        {gallery.title}
      </h2>
      <p className="mx-auto max-w-2xl text-slate-600">{gallery.description}</p>
    </div>
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {galleryImages.map((image, index) => (
        <div
          key={image}
          className="group overflow-hidden rounded-[1.75rem] bg-white shadow-soft"
        >
          <img
            src={image}
            alt={`${gallery.title} ${index + 1}`}
            className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
      ))}
    </div>
  </div>
);

export default Gallery;
