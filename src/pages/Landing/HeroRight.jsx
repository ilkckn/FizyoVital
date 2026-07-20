import "./HeroRight.css";
import { useTranslation } from "react-i18next";
import { FaRegStar } from "react-icons/fa";
import { FiCheckCircle } from "react-icons/fi";

const HeroRight = () => {
  const { t } = useTranslation();

  return (
    <section className="hero-right">
      <div className="boxes">
        <div className="box-middle">
          <div className="image">
            <img src="/nav-logo.png" alt="logo image" />
          </div>
          <p>{t("landing.hero-right.box-middle.header")}</p>
          <span>{t("landing.hero-right.box-middle.text")}</span>
        </div>
        <div className="box-top">
          <div className="icon">
            <FaRegStar />
          </div>
          <p>{t("landing.hero-right.box-top.header")}</p>
        </div>
        <div className="box-bottom">
          <div className="icon">
            <FiCheckCircle />
          </div>
          <p>{t("landing.hero-right.box-bottom.header")}</p>
        </div>
      </div>
    </section>
  );
};

export default HeroRight;
