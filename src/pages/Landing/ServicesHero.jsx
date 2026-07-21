import "./ServicesHero.css";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M16 4C10 4 6 8 6 14C6 20 10 28 16 28C22 28 26 20 26 14C26 8 22 4 16 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M12 16C12 16 14 12 16 12C18 12 20 16 20 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
      title: t("landing.services.boxes.box1.title"),
      description: t("landing.services.boxes.box1.description"),
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="8" r="4" stroke="currentColor" strokeWidth="1.5" />
          <path d="M10 28L12 18L16 22L20 18L22 28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 14H24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
      title: t("landing.services.boxes.box2.title"),
      description: t("landing.services.boxes.box2.description"),
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="10" r="5" stroke="currentColor" strokeWidth="1.5" />
          <path d="M8 28C8 28 10 20 16 20C22 20 24 28 24 28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M16 20V28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
      title: t("landing.services.boxes.box3.title"),
      description: t("landing.services.boxes.box3.description"),
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <rect x="6" y="8" width="20" height="16" rx="3" stroke="currentColor" strokeWidth="1.5" />
          <path d="M12 16H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M16 12V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
      title: t("landing.services.boxes.box4.title"),
      description: t("landing.services.boxes.box4.description"),
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M16 4L20 12L28 14L22 20L23.5 28L16 24L8.5 28L10 20L4 14L12 12L16 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
      ),
      title: t("landing.services.boxes.box5.title"),
      description: t("landing.services.boxes.box5.description"),
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M16 4V28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M8 12H24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="16" cy="4" r="2" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="16" cy="28" r="2" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      ),
      title: t("landing.services.boxes.box6.title"),
      description: t("landing.services.boxes.box6.description"),
    },
  ]
  return (
    <section className="services">
      <div className="container">
        <div className="header">
          <div className="tag">
            <p>{t("landing.services.tag")}</p>
          </div>
          <div className="main-header">
            <h1>{t("landing.services.main-header.title1")}</h1>
            <p>{t("landing.services.main-header.description")}</p>
          </div>
        </div>
        <div className="service-boxes">
          {services.map((service, index) => (
            <div className="box" key={index}>
              <div className="box-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
