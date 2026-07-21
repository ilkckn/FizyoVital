import "./Landing.css";
import BgOrbs from "./BgOrbs";
import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";
import Services from "./ServicesHero";
import Story from "./Story";
import TreatmentsHero from "./TreatmentsHero";

const Landing = () => {

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
        <div className="services-component">
          <Services />
        </div>
        <div className="story-component">
          <Story />
        </div>
        <div className="treatments-component">
          <TreatmentsHero />
        </div>
      </div>
    </section>
  );
};

export default Landing;
