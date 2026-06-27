import whatsappIcon from "../assets/whatsapp.png";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/50683615879"
    target="_blank"
    rel="noreferrer"
    className="fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand-500 text-white shadow-card transition hover:scale-105"
    aria-label="Chatea con nosotros en WhatsApp"
  >
    <img src={whatsappIcon} alt="WhatsApp" className="h-8 w-8" />
  </a>
);

export default WhatsAppButton;
