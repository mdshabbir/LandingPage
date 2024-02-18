import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ComponentMetricTicker from "./ComponentMetricTicker";
import GroupComponent from "./GroupComponent";
import styles from "./ProviderSolution.module.css";
// import data from "../JsonObject/LandingPage-data.json";

const ProviderSolution = ({ data }) => {
  const navigate = useNavigate();
  // data.forEach((element) => {
  //   console.log(element.entity_name);
  // });

  const onExploreButtonClick = useCallback(() => {
    navigate("/authenticated-provider-page-digital-adoption");
  }, [navigate]);
  const metricData = [
    { callVolume: "Overall Adoption Rate", prop: "98%", propPadding: "unset" },
    {
      callVolume: "Paperless Adoption",
      prop: "91.2%",
      propPadding: "0px 0px 8px",
    },
    {
      callVolume: "Paperless Adoption",
      prop: "91.2%",
      propPadding: "0px 0px 8px",
    },
    {
      callVolume: "Paperless Adoption",
      prop: "91.2%",
      propPadding: "0px 0px 8px",
    },
    // Add more metric data as needed
  ];
  return (
    <section className={styles.keyComponentsButton}>
      <div className={styles.providerButton}>
        <div className={styles.chevronInstance}>
          <img
            className={styles.chevronButtonIcon}
            loading="eager"
            alt=""
            src="/chevron-button.svg"
          />
          <div className={styles.chevronButton}>
            <div className={styles.providerFrame}>
              <div className={styles.providerFrameChild} />
              <img
                className={styles.providerIcon}
                loading="eager"
                alt=""
                src="/provider.svg"
              />
              <div className={styles.groupFrame}>
                <div className={styles.assetFrame}>
                  <img
                    className={styles.assetFrameChild}
                    loading="eager"
                    alt=""
                    src="/group-44.svg"
                  />
                  <img
                    className={styles.asset111}
                    alt=""
                    src="/7asset-11-1.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.chevronButton1}>
              <div className={styles.chevronButtonChild} />
              <div className={styles.providerPageFrame}>
                <div className={styles.textFrame}>
                  <h1 className={styles.digitalAdoption}>Digital Adoption</h1>
                </div>
                <div className={styles.metricSection}>
                  {metricData.map((value, index) => (
                    <ComponentMetricTicker
                      style={{ width: "202px" }}
                      key={index}
                      callVolume={value.callVolume}
                      prop={value.prop}
                      propPadding={value.propPadding}
                    />
                  ))}
                </div>
              </div>
            </div>
            <img
              className={styles.chevronButtonIcon1}
              alt=""
              src="/chevron-button-1@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProviderSolution;
