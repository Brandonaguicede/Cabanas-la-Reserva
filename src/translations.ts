export type Language = "es" | "en";

export interface TranslationCabinDetail {
  title: string;
  summary: string;
  features: string[];
  capacity: string;
  includes: string;
  recommended: string;
}

export const translations = {
  es: {
    navLinks: [
      { label: "Inicio", href: "#" },
      { label: "Instalaciones", href: "#instalaciones" },
      { label: "Servicios", href: "#servicios" },
      { label: "Nosotros", href: "#sobre-nosotros" },
      { label: "Ubicación", href: "#ubicacion" },
    ],
    hero: {
      badge: "Encuentra tu refugio en Matambú",
      title: "¡Bienvenidos a Cabañas La Reserva!",
      description: "El lugar ideal para desconectarte, respirar aire puro y disfrutar la belleza de la Reserva Indígena Matambú.",
      primaryCta: "Ver más detalles",
      secondaryCta: "Contactar ahora",
    },
    cards: {
      choice: "Nuestra elección",
      choiceTitle: "Nuestras instalaciones",
      choiceText: "Vive la tranquilidad natural, con servicios familiares y espacios pensados para desconectar.",
      experiences: "Experiencias",
      experiencesTitle: "Cabañas confortables",
      experiencesText: "Cada alojamiento ofrece privacidad, aire acondicionado y conexión con la reserva indígena Matambú.",
      booking: "Fácil de reservar",
      bookingTitle: "Busca y elige",
      bookingText: "Encuentra la cabaña ideal con un solo clic y reserva tu estadía en un entorno verde y sereno.",
    },
    about: {
      eyebrow: "Sobre Nosotros",
      title: "¡Somos Cabañas La Reserva!",
      paragraphs: [
        "En Cabañas La Reserva creemos que las mejores experiencias nacen en conexión con la naturaleza y la cultura. Ubicadas en el territorio indígena Matambú, en Guanacaste, nuestras cabañas ofrecen un espacio único para descansar, rodeado de montañas, aire puro y la riqueza ancestral de la última comunidad indígena de esta provincia.",
        "Aquí cada amanecer se acompaña del canto de las aves, cada noche regala un cielo estrellado, y cada visita se convierte en un encuentro con la esencia natural y cultural de Costa Rica.",
        "Te invitamos a vivir Guanacaste desde sus raíces y a disfrutar de la paz que solo la naturaleza y la tradición pueden ofrecer.",
      ],
    },
    installations: {
      eyebrow: "Instalaciones",
      title: "Cabañas ecológicas",
      description: "Tres espacios principales diseñados para parejas, familias y quienes buscan naturaleza en cada rincón.",
    },
    services: {
      eyebrow: "Nuestros Servicios",
      title: "Todo lo que necesitas para descansar",
      description: "Comodidades, gastronomía local y atención cercana para disfrutar una estadía tranquila en plena naturaleza.",
      recommended: "Recomendado",
      capacity: "Capacidad",
      includes: "Incluye",
    },
    serviceSlides: [
      {
        id: "service-1",
        title: "Comodidades incluidas",
        items: [
          "Cabañas privadas con estacionamiento exclusivo",
          "Jardines tranquilos y ambiente natural",
          "WiFi gratis y refrigerador en cada cabaña",
        ],
      },
      {
        id: "service-2",
        title: "Gastronomía y atención local",
        items: [
          "Desayunos tradicionales con gallo pinto y café",
          "Comidas caseras bajo pedido",
          "Atención familiar cercana y cálida",
        ],
      },
    ],
    gallery: {
      eyebrow: "Galería de fotos",
      title: "Descubre el entorno",
      description: "Imágenes reales de la reserva, los caminos y la tranquilidad que te espera.",
    },
    testimonials: {
      eyebrow: "Comentarios",
      title: "Qué dicen nuestros clientes",
      description: "Opiniones reales de quienes han disfrutado la tranquilidad y el servicio de nuestras cabañas.",
      items: [
        {
          initials: "TP",
          name: "Teilor Perez",
          quote: "Excelente lugar, un paraíso para despegarse de la tecnología.",
          date: "Hace 6 años",
        },
        {
          initials: "AH",
          name: "Alfredo Herrera Rodriguez",
          quote: "Tranquilidad total. Excelente anfitriona.",
          date: "Hace 3 años",
        },
        {
          initials: "WP",
          name: "Walter Piedra M",
          quote: "Muy bien y atención excelente.",
          date: "Hace 4 años",
        },
        {
          initials: "CG",
          name: "Cinthia Gamboa",
          quote: "El mejor lugar en Matambú, Hojancha.",
          date: "Hace 5 meses",
        },
      ],
    },
    contact: {
      eyebrow: "Contacto",
      title: "Visítanos en Matambú",
      address: "De la plaza de deportes 75 metros al sur y 25 al oeste, Provincia de Guanacaste, Matambú.",
      phonesLabel: "Teléfonos",
      emailLabel: "Correo",
      socialLabel: "Redes Sociales",
      moreInfo: "Más información disponible al contactarnos.",
    },
    footer: {
      copyright: "© 2025 Cabañas La Reserva. Todos los derechos reservados.",
    },
    cabins: {
      featured: "Destacado",
      infoButton: "Más info",
      closeButton: "Cerrar",
      capacityLabel: "Capacidad",
      includesLabel: "Incluye",
      recommendedLabel: "Recomendado",
      details: {
        "cabin-1": {
          title: "Cabina Familiar",
          summary: "Cabaña privada ideal para 2-4 personas con todas las comodidades.",
          features: [
            "Cama matrimonial y cama nido individual",
            "Aire acondicionado, TV y WiFi gratis",
            "Baño privado y ambiente acogedor",
          ],
          capacity: "2-4 personas",
          includes: "Aire acondicionado, TV y baño privado",
          recommended: "Perfecta para familias y grupos pequeños.",
        },
        "cabin-2": {
          title: "Cabina de Parejas",
          summary: "Espacio cómodo para parejas con privacidad y vistas naturales.",
          features: [
            "Cama matrimonial y cama nido individual",
            "Baño privado, aire acondicionado y TV",
            "Ambiente tranquilo en la reserva indígena",
          ],
          capacity: "2-3 personas",
          includes: "Aire acondicionado, TV y WiFi",
          recommended: "Ideal para parejas que buscan descanso.",
        },
        "cabin-3": {
          title: "Cabina Compacta",
          summary: "Opcíon acogedora para parejas con pequeñas comodidades de cocina.",
          features: [
            "Habitación ideal para parejas",
            "Cama matrimonial y pequeño espacio de cocina",
            "Aire acondicionado, TV y WiFi",
          ],
          capacity: "2 personas",
          includes: "Refrigerador, aire acondicionado y baño privado",
          recommended: "Una opción práctica y tranquila.",
        },
      },
    },
  },
  en: {
    navLinks: [
      { label: "Home", href: "#" },
      { label: "Facilities", href: "#instalaciones" },
      { label: "Services", href: "#servicios" },
      { label: "About", href: "#sobre-nosotros" },
      { label: "Location", href: "#ubicacion" },
    ],
    hero: {
      badge: "Find your getaway in Matambú",
      title: "Welcome to Cabañas La Reserva!",
      description: "The ideal place to disconnect, breathe fresh air, and enjoy the beauty of the Matambú Indigenous Reserve.",
      primaryCta: "See more details",
      secondaryCta: "Contact now",
    },
    cards: {
      choice: "Our choice",
      choiceTitle: "Our facilities",
      choiceText: "Experience natural calm with family-friendly services and spaces designed to relax.",
      experiences: "Experiences",
      experiencesTitle: "Comfortable cabins",
      experiencesText: "Each accommodation offers privacy, air conditioning, and a connection to the indigenous reserve.",
      booking: "Easy booking",
      bookingTitle: "Search and choose",
      bookingText: "Find the ideal cabin with one click and reserve your stay in a green, serene setting.",
    },
    about: {
      eyebrow: "About Us",
      title: "We are Cabañas La Reserva!",
      paragraphs: [
        "At Cabañas La Reserva, we believe the best experiences are born from a connection with nature and culture. Located in Matambú, Guanacaste, our cabins offer a unique place to rest, surrounded by mountains, fresh air, and ancestral richness.",
        "Every sunrise comes with birdsong, every night brings a starry sky, and every visit becomes an encounter with the natural and cultural essence of Costa Rica.",
        "We invite you to experience Guanacaste from its roots and enjoy the peace that only nature and tradition can offer.",
      ],
    },
    installations: {
      eyebrow: "Facilities",
      title: "Eco-friendly cabins",
      description: "Three main spaces designed for couples, families, and those seeking nature in every corner.",
    },
    services: {
      eyebrow: "Our Services",
      title: "Everything you need to unwind",
      description: "Comfort, local cuisine, and attentive hospitality for a peaceful stay surrounded by nature.",
      recommended: "Recommended",
      capacity: "Capacity",
      includes: "Includes",
    },
    serviceSlides: [
      {
        id: "service-1",
        title: "Included amenities",
        items: [
          "Private cabins with exclusive parking",
          "Peaceful gardens and natural atmosphere",
          "Free WiFi and refrigerator in every cabin",
        ],
      },
      {
        id: "service-2",
        title: "Local cuisine and hospitality",
        items: [
          "Traditional breakfasts with gallo pinto and coffee",
          "Homemade meals available on request",
          "Warm and attentive family service",
        ],
      },
    ],
    gallery: {
      eyebrow: "Photo Gallery",
      title: "Discover the surroundings",
      description: "Real images of the reserve, the trails, and the tranquility waiting for you.",
    },
    testimonials: {
      eyebrow: "Reviews",
      title: "What our guests say",
      description: "Real opinions from those who have enjoyed the tranquility and service of our cabins.",
      items: [
        {
          initials: "TP",
          name: "Teilor Perez",
          quote: "Excellent place, a paradise for disconnecting from technology.",
          date: "6 years ago",
        },
        {
          initials: "AH",
          name: "Alfredo Herrera Rodriguez",
          quote: "Total tranquility. Excellent host.",
          date: "3 years ago",
        },
        {
          initials: "WP",
          name: "Walter Piedra M",
          quote: "Very good and excellent attention.",
          date: "4 years ago",
        },
        {
          initials: "CG",
          name: "Cinthia Gamboa",
          quote: "The best place in Matambú, Hojancha.",
          date: "5 months ago",
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Visit us in Matambú",
      address: "From the sports square 75 meters south and 25 meters west, Province of Guanacaste, Matambú.",
      phonesLabel: "Phones",
      emailLabel: "Email",
      socialLabel: "Social Media",
      moreInfo: "More information available when you contact us.",
    },
    footer: {
      copyright: "© 2025 Cabañas La Reserva. All rights reserved.",
    },
    cabins: {
      featured: "Featured",
      infoButton: "More info",
      closeButton: "Close",
      capacityLabel: "Capacity",
      includesLabel: "Includes",
      recommendedLabel: "Recommended",
      details: {
        "cabin-1": {
          title: "Family Cabin",
          summary: "Private cabin ideal for 2-4 people with all the comforts.",
          features: [
            "King bed and single trundle",
            "Air conditioning, TV and free WiFi",
            "Private bathroom and cozy atmosphere",
          ],
          capacity: "2-4 people",
          includes: "Air conditioning, TV and private bathroom",
          recommended: "Perfect for families and small groups.",
        },
        "cabin-2": {
          title: "Couple's Cabin",
          summary: "Comfortable space for couples with privacy and natural views.",
          features: [
            "King bed and single trundle",
            "Private bathroom, air conditioning and TV",
            "Peaceful setting inside the indigenous reserve",
          ],
          capacity: "2-3 people",
          includes: "Air conditioning, TV and WiFi",
          recommended: "Ideal for couples seeking rest.",
        },
        "cabin-3": {
          title: "Compact Cabin",
          summary: "Cozy option for couples with a small kitchenette area.",
          features: [
            "Ideal room for couples",
            "King bed and small kitchenette area",
            "Air conditioning, TV and WiFi",
          ],
          capacity: "2 people",
          includes: "Refrigerator, air conditioning and private bathroom",
          recommended: "A practical and quiet choice.",
        },
      },
    },
  },
};
