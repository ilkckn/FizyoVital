import "./Navbar.css";
import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher.jsx";
import { IoChevronDownSharp, IoMenu } from "react-icons/io5";

const Navbar = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const handleAppointmentClick = () => {
    navigate("/appointment");
    setIsOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleKeydown = (e) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, []);

  return (
    <section className="navbar">
      <div
        className={`mobile-overlay ${isOpen ? "open" : ""}`}
        onClick={handleMenuToggle}
      ></div>
      <div className="container">
        <nav>
          <div className="logo" onClick={() => navigate("/")}>
            <img src="/nav-logo.png" alt="navbar logo" />
            <p>
              Fizyo <span>Vital</span>
            </p>
          </div>
          <div className="links">
            <ul>
              <li>
                <NavLink to="/">{t("navbar.startpage")}</NavLink>
              </li>
              <li className="dropdown">
                <NavLink to="/services">
                  {t("navbar.services")} <IoChevronDownSharp />
                </NavLink>
                <ul className="sub-links">
                  <li>
                    <NavLink to="/services/manual-therapy">
                      {t("navbar.sub-links.manual-therapy")}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/services/sports-rehabilitation">
                      {t("navbar.sub-links.sports-rehabilitation")}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/services/neurological-physiotherapy">
                      {t("navbar.sub-links.neurological-physiotherapy")}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/services/orthopedic-rehabilitation">
                      {t("navbar.sub-links.orthopedic-rehabilitation")}
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink to="/about">{t("navbar.about")}</NavLink>
              </li>
              <li>
                <NavLink to="/treatments">{t("navbar.treatments")}</NavLink>
              </li>
              <li>
                <NavLink to="/contact">{t("navbar.contact")}</NavLink>
              </li>
            </ul>
          </div>
          <div className="appointment-mobile-language">
            <div className="language">
              <LanguageSwitcher />
            </div>
            <button
              className="appointment-btn"
              onClick={() => navigate("/appointment")}
            >
              {t("navbar.appointment")}
            </button>
            <IoMenu className="menu-icon" onClick={handleMenuToggle} />
          </div>
          {isOpen && (
            <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
              <div className="language-switcher">
                <LanguageSwitcher />
              </div>
              <ul>
                <li>
                  <NavLink to="/" onClick={handleLinkClick}>
                    {t("navbar.startpage")}
                  </NavLink>
                </li>
                <li className="mobile-sub-menu">
                  <NavLink to="/services" onClick={handleLinkClick}>
                    {t("navbar.services")}
                  </NavLink>
                  <ul className="mobile-sub-links">
                    <li>
                      <NavLink
                        to="/services/manual-therapy"
                        onClick={handleLinkClick}
                      >
                        {t("navbar.sub-links.manual-therapy")}
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/services/sports-rehabilitation"
                        onClick={handleLinkClick}
                      >
                        {t("navbar.sub-links.sports-rehabilitation")}
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/services/neurological-physiotherapy"
                        onClick={handleLinkClick}
                      >
                        {t("navbar.sub-links.neurological-physiotherapy")}
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/services/orthopedic-rehabilitation"
                        onClick={handleLinkClick}
                      >
                        {t("navbar.sub-links.orthopedic-rehabilitation")}
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li>
                  <NavLink to="/about" onClick={handleLinkClick}>
                    {t("navbar.about")}
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/treatments" onClick={handleLinkClick}>
                    {t("navbar.treatments")}
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact" onClick={handleLinkClick}>
                    {t("navbar.contact")}
                  </NavLink>
                </li>
              </ul>
              <div className="mobile-appointment">
                <button onClick={handleAppointmentClick}>
                  {t("navbar.mobile-appointment")}
                </button>
              </div>
            </div>
          )}
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
