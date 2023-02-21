import { styles } from "../utils/styles";
import { footerLinks } from "../utils/constants";

const Footer = () => {
  return (
    <footer className="bg-primary w-full py-16">
      <div
        className={`${styles.paddingX} flex flex-col-reverse items-center justify-between gap-12 sm:flex-row`}
      >
        <div className="flex flex-col gap-6 items-center">
          <h4 className="text-white font-playfair text-[20px]">
            Zarah Photography
          </h4>
          <p className="text-white font-poppins text-[12px] font-extralight uppercase tracking-[.2rem]">
            ©all rights reserved
          </p>
        </div>
        <div className="flex flex-col items-center gap-4 md:gap-6 md:flex-row">
          <span className="text-white text-[12px] font-poppins font-extralight uppercase tracking-[.2rem] opacity-90">
            Find me on:
          </span>
          <div className="flex gap-4 md:gap-6 flex-wrap justify-center">
            {footerLinks.map((footerLink) => (
              <a
                href={footerLink.link}
                key={footerLink.id}
                className={styles.footerLink}
              >
                {footerLink.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
