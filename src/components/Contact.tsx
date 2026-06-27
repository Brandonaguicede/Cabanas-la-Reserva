import whatsappIcon from "../assets/whatsapp.png";
import facebookIcon from "../assets/facebook.png";
import instagramIcon from "../assets/instagram.png";
import tiktokIcon from "../assets/tiktok.png";

interface ContactProps {
  contact: {
    eyebrow: string;
    title: string;
    address: string;
    phonesLabel: string;
    emailLabel: string;
    socialLabel: string;
    moreInfo: string;
  };
}

const Contact = ({ contact }: ContactProps) => (
  <div className="grid gap-10 lg:grid-cols-2 lg:items-stretch">
    <div className="rounded-[2rem] border border-slate-200/80 bg-white p-8 shadow-soft">
      <div className="space-y-5">
        <p className="text-sm uppercase tracking-[0.28em] text-brand-600">
          {contact.eyebrow}
        </p>
        <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
          {contact.title}
        </h2>
        <p className="text-slate-600">{contact.address}</p>
      </div>
      <div className="mt-8 grid gap-4 rounded-[1.75rem] border border-slate-200/80 bg-slate-50 p-6">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">
            {contact.phonesLabel}
          </h3>
          <p className="mt-2 text-slate-600">
            <a
              href="tel:+50689813481"
              className="text-brand-700 hover:text-brand-900"
            >
              8981-3481
            </a>{" "}
            /
            <a
              href="tel:+50683615879"
              className="ml-1 text-brand-700 hover:text-brand-900"
            >
              8361-5879
            </a>{" "}
            /
            <a
              href="tel:+50688577250"
              className="ml-1 text-brand-700 hover:text-brand-900"
            >
              8857-7250
            </a>
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-slate-900">
            {contact.emailLabel}
          </h3>
          <p className="mt-2 text-slate-600">
            <a
              href="mailto:Hospedajelareserva8981@gmail.com"
              className="text-brand-700 hover:text-brand-900"
            >
              Hospedajelareserva8981@gmail.com
            </a>
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-slate-900">
            {contact.socialLabel}
          </h3>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <a
              href="https://wa.me/50683615879"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center rounded-3xl border border-slate-200 bg-white p-3 shadow-sm transition hover:bg-slate-100"
            >
              <img src={whatsappIcon} alt="WhatsApp" className="h-7 w-7" />
            </a>
            <a
              href="https://www.facebook.com/share/1KW5Xm9JLm/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center rounded-3xl border border-slate-200 bg-white p-3 shadow-sm transition hover:bg-slate-100"
            >
              <img src={facebookIcon} alt="Facebook" className="h-7 w-7" />
            </a>
            <a
              href="https://www.instagram.com/hospedajelareserva?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center rounded-3xl border border-slate-200 bg-white p-3 shadow-sm transition hover:bg-slate-100"
            >
              <img src={instagramIcon} alt="Instagram" className="h-7 w-7" />
            </a>
            <a
              href="https://www.tiktok.com/@hospedajelareserva?_t=ZM-907ZbEAxrlD&_r=1"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center rounded-3xl border border-slate-200 bg-white p-3 shadow-sm transition hover:bg-slate-100"
            >
              <img src={tiktokIcon} alt="TikTok" className="h-7 w-7" />
            </a>
          </div>
        </div>
      </div>
      <p className="mt-6 text-sm text-slate-500">{contact.moreInfo}</p>
    </div>
    <div className="rounded-[2rem] overflow-hidden border border-slate-200/80 bg-white shadow-soft">
      <iframe
        title="Ubicación de Cabañas La Reserva"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1887.3520633998792!2d-85.41920569999999!3d10.0870075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f9fbbe0013d20cf%3A0x546b3f0fd21b3fa!2sCabinas%20La%20Reserva%20Matamb%C3%BA!5e1!3m2!1ses-419!2scr!4v1757734272422!5m2!1ses-419!2scr"
        className="h-full min-h-[28rem] w-full border-0"
        loading="lazy"
      />
    </div>
  </div>
);

export default Contact;
