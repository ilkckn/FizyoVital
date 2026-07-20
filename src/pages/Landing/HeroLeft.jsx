import "./HeroLeft.css";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { HiMiniArrowSmallRight } from "react-icons/hi2";

const HeroLeft = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  
  return (
    <section className="hero-left">
      <div className="tag">
        <p>{t("landing.tag")}</p>
      </div>
      <div className="main-header">
        <h1>{t("landing.main-header.title1")}</h1>
        <h1>{t("landing.main-header.title2")}</h1>
      </div>
      <p>{t("landing.description")}</p>
      <div className="btns">
        <button onClick={() => navigate("/contact")}>
          {t("landing.btns.btn1")}
          <HiMiniArrowSmallRight />
        </button>
        <button onClick={() => navigate("/services")}>
          {t("landing.btns.btn2")}
        </button>
      </div>
      <div className="cta">
        <div className="box">
          <p>12+</p>
          <span>{t("landing.cta.cta1")}</span>
        </div>
        <div className="box">
          <p>3.500+</p>
          <span>{t("landing.cta.cta2")}</span>
        </div>
        <div className="box">
          <p>%96</p>
          <span>{t("landing.cta.cta3")}</span>
        </div>
      </div>
    </section>
  )
}

export default HeroLeft