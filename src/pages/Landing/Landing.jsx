import "./Landing.css";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import BgOrbs from "./BgOrbs";
import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";

const Landing = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <section className="landing">
      <div className="container">
        <div className="hero">
          <BgOrbs />
          <div className="hero-left">
            <HeroLeft />
          </div>
          <div className="hero-right">
            <HeroRight />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
