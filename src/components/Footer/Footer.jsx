import portfolioData from '../../data/portfolioData';

function Footer() {
  const { footer, socials } = portfolioData;

  return (
    <footer className="bg-zinc-900 text-white px-6 py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 md:gap-0">
        
        {/* Social Section */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-semibold uppercase mb-4 tracking-tight">{footer.socialHeading}</h1>
          <p className="mb-4">
            {footer.socialText.prefix}
            <span className="text-[#FB2C36] font-bold">{footer.socialText.highlight}</span>
            {footer.socialText.suffix}
          </p>
          <div className="flex justify-center md:justify-start gap-4 text-2xl">
            {socials.map((social) => (
              <a key={social.label} href={social.url} target="_blank" rel="noreferrer" aria-label={social.label}>
                <social.icon className="hover:text-[#FB2C36]" />
              </a>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-semibold uppercase mb-4 tracking-tight">{footer.contactHeading}</h1>
          <div className="mb-4">
            <p className="uppercase text-[#FB2C36]">{footer.emailLabel}</p>
            <p>{footer.email}</p>
          </div>
          <div>
            <p className="uppercase text-[#FB2C36]">{footer.addressLabel}</p>
            <p>{footer.location}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
