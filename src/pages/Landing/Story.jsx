import "./Story.css";
import { useTranslation } from "react-i18next";
import { PiDotOutlineFill } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

const Story = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <section className="story">
      <div className="container">
        <div className="content">
          <div className="content-left">
            <div className="image">
              <img src="/landing-story.png" alt="story image" />
            </div>
          </div>
          <div className="content-right">
            <div className="tag">
              <p>{t("landing.story.tag")}</p>
            </div>
            <div className="header">
              <h2>{t("landing.story.header.title1")}</h2>
              <h2>{t("landing.story.header.title2")}</h2>
              <p>{t("landing.story.header.description")}</p>
            </div>
            <div className="stories">
              <div className="story1">
                <div className="icon">
                  <PiDotOutlineFill />
                </div>
                <div className="content">
                  <h4>{t("landing.story.stories.title1")}</h4>
                  <p>{t("landing.story.stories.description1")}</p>
                </div>
              </div>
              <div className="story2">
                <div className="icon">
                  <PiDotOutlineFill />
                </div>
                <div className="content">
                  <h4>{t("landing.story.stories.title2")}</h4>
                  <p>{t("landing.story.stories.description2")}</p>
                </div>
              </div>
              <div className="story3">
                <div className="icon">
                  <PiDotOutlineFill />
                </div>
                <div className="content">
                  <h4>{t("landing.story.stories.title3")}</h4>
                  <p>{t("landing.story.stories.description3")}</p>
                </div>
              </div>
            </div>
            <div className="story-btn">
              <button onClick={() => navigate("/contact")}>
                {t("landing.story.button")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
