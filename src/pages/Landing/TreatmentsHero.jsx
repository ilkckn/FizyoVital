import "./TreatmentsHero.css"
import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router-dom";

const TreatmentsHero = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  
  const treatments = [
    {
      title: t("landing.treatments.title1"),
      tags: t("landing.treatments.tag1", { returnObjects: true }),
      description: t("landing.treatments.description1"),
    },
    {
      title: t("landing.treatments.title2"),
      tags: t("landing.treatments.tag2", { returnObjects: true }),
      description: t("landing.treatments.description2"),
    },
    {
      title: t("landing.treatments.title3"),
      tags: t("landing.treatments.tag3", { returnObjects: true }),
      description: t("landing.treatments.description3"),
    },
    {
      title: t("landing.treatments.title4"),
      tags: t("landing.treatments.tag4", { returnObjects: true }),
      description: t("landing.treatments.description4"),
    },
    
  ];
  return (
    <section className="treatments-hero">
      <div className="container">
        <div className="content">
          <div className="tag">
            <p>{t("landing.treatments.tag")}</p>
          </div>
          <div className="header">
            <h1>{t("landing.treatments.header")}</h1>
            <p>{t("landing.treatments.description")}</p>
          </div>
          <div className="treatments">
            
              {treatments.map((treatment, index) => (
                <div key={index} className="treatment">
                  <h3>{treatment.title}</h3>
                  <div className="tags">
                    {treatment.tags.map((tag, index) => (
                      <span key={index}>{tag}</span>
                    ))}
                  </div>
                  <p>{treatment.description}</p>
                </div>
              ))}
          </div>
          <div className="consult">
            <p>{t("landing.treatments.consult")}</p>
            <button onClick={() => navigate("/contact")}>{t("landing.treatments.consultButton")}</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TreatmentsHero