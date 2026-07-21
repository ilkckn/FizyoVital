import "./LanguageSwitcher.css";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { GrLanguage } from "react-icons/gr";

function LanguageSwitcher({ setMenuOpen }) {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
    setIsOpen(false);
    setMenuOpen(false);
    setCurrentLanguage(language);
  };

  return (
    <div className="lang-switcher">
      <div className="btns">
        <GrLanguage
          className="lang-switcher-icon"
          onClick={() => setIsOpen(!isOpen)}
        />
        {isOpen && (
          <div className="lang-switcher-dropdown">
            <button
              className={`${currentLanguage === "tr" ? "active" : ""}`}
              onClick={() => handleLanguageChange("tr")}
            >
              TR
            </button>
            <button
              className={`${currentLanguage === "en" ? "active" : ""}`}
              onClick={() => handleLanguageChange("en")}
            >
              EN
            </button>
            <button
              className={`${currentLanguage === "de" ? "active" : ""}`}
              onClick={() => handleLanguageChange("de")}
            >
              DE
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default LanguageSwitcher;
