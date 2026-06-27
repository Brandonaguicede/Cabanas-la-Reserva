interface FooterProps {
  copyright: string;
}

const Footer = ({ copyright }: FooterProps) => (
  <footer
    id="contacto"
    className="border-t border-slate-200 bg-slate-950 py-6 text-center text-slate-300"
  >
    <p>{copyright}</p>
  </footer>
);

export default Footer;
