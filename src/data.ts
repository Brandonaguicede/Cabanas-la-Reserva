import heroImage from "./assets/hero.jpg";
import aboutImage from "./assets/about.jpg";
import cabin1Image from "./assets/cabin1.jpg";
import cabin2Image from "./assets/cabin2.jpg";
import cabin3Image from "./assets/cabin3.jpg";
import serviceImage1 from "./assets/service1.jpg";
import serviceImage2 from "./assets/service2.jpg";
import gallery1 from "./assets/gallery1.jpg";
import gallery2 from "./assets/gallery2.jpg";
import gallery3 from "./assets/gallery3.jpg";
import gallery4 from "./assets/gallery4.jpg";
import gallery5 from "./assets/gallery5.jpg";
import gallery6 from "./assets/gallery6.jpg";

export interface Cabin {
  id: string;
  title: string;
  image: string;
  images: string[];
  features: string[];
}

export interface ServiceSlide {
  id: string;
  title: string;
  image: string;
  items: string[];
}

export interface Testimonial {
  name: string;
  initials: string;
  quote: string;
  date: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

export const heroImageUrl = heroImage;

export const aboutImageUrl = aboutImage;

export const cabins: Cabin[] = [
  {
    id: "cabin-1",
    title: "Cabina 1",
    image: cabin1Image,
    images: [cabin1Image, cabin2Image, cabin3Image],
    features: [
      "Cabaña privada ideal para 2-4 personas",
      "Cama matrimonial y cama nido individual",
      "Aire acondicionado, TV y WiFi gratis",
      "Baño privado y ambiente acogedor",
    ],
  },
  {
    id: "cabin-2",
    title: "Cabina 2",
    image: cabin2Image,
    images: [cabin2Image, cabin3Image, cabin1Image],
    features: [
      "Perfecta para parejas o amigos",
      "Cama matrimonial y cama nido individual",
      "Baño privado, aire acondicionado y TV",
      "Ambiente tranquilo en la reserva indígena",
    ],
  },
  {
    id: "cabin-3",
    title: "Cabina 3",
    image: cabin3Image,
    images: [cabin3Image, cabin1Image, cabin2Image],
    features: [
      "Habitación ideal para parejas",
      "Cama matrimonial y pequeño espacio de cocina",
      "Aire acondicionado, TV y WiFi",
      "Refrigerador y privacidad total",
    ],
  },
];

export const serviceSlides: ServiceSlide[] = [
  {
    id: "service-1",
    title: "Servicio Principal",
    image: serviceImage1,
    items: [
      "Cabañas privadas con estacionamiento exclusivo",
      "Jardines tranquilos y ambiente natural",
      "WiFi gratis y refrigerador en cada cabaña",
    ],
  },
  {
    id: "service-2",
    title: "Servicios Adicionales",
    image: serviceImage2,
    items: [
      "Desayunos tradicionales con gallo pinto y café",
      "Comidas caseras bajo pedido",
      "Atención familiar cercana y cálida",
    ],
  },
];

export const galleryImages = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
];

export const testimonials: Testimonial[] = [
  {
    name: "Teilor Perez",
    initials: "TP",
    quote: "Excelente lugar, un paraíso para despegarse de la tecnología.",
    date: "Hace 6 años",
  },
  {
    name: "Alfredo Herrera Rodriguez",
    initials: "AH",
    quote: "Tranquilidad total. Excelente anfitriona.",
    date: "Hace 3 años",
  },
  {
    name: "Walter Piedra M",
    initials: "WP",
    quote: "Muy bien y atención excelente.",
    date: "Hace 4 años",
  },
  {
    name: "Cinthia Gamboa",
    initials: "CG",
    quote: "El mejor lugar en Matambú, Hojancha.",
    date: "Hace 5 meses",
  },
];

export const socialLinks: SocialLink[] = [
  {
    label: "WhatsApp",
    href: "https://wa.me/50683615879",
    icon: "./assets/whatsapp.png",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/1KW5Xm9JLm/",
    icon: "./assets/facebook.png",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/hospedajelareserva?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    icon: "./assets/instagram.png",
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@hospedajelareserva?_t=ZM-907ZbEAxrlD&_r=1",
    icon: "./assets/tiktok.png",
  },
];
