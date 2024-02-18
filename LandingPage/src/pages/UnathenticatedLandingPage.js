import USAGEMETRICS from "../components/USAGEMETRICS";
import SSOenabled from "../components/SSOenabled";
import NavigationBar from "../components/NavigationBar";
import Line from "../components/Line";
import AllInclusive from "../components/AllInclusive";
import UsageMetricsSection from "../components/UsageMetricsSection";
import FAQsToggle from "../components/FAQsToggle";
import FOOTER from "../components/FOOTER";
import styles from "./UnathenticatedLandingPage.module.scss";
import data from "../JsonObject/Landing-page-data.json";
const UnathenticatedLandingPage = () => {
  console.log(data);
  return (
    <div className={styles.unathenticatedLandingPage}>
      <USAGEMETRICS />
      <section className={styles.frameRectanglechevronright}>
        <div className={styles.whatisJarvis}>
          <h1 className={styles.actionableInsightsFor}>
            Actionable insights for your business
          </h1>
          <div className={styles.learnMoreOn}>
            Learn more on how Jarvis can help in your decision making
          </div>
        </div>
        {data.businessAreas.map((item, index) => (
          <SSOenabled
            group12={item.ilustration}
            provider={item.title}
            comprehensiveAnalyticalSo="Comprehensive Analytical Solutions generating insights for all Provider touchpoints, and helping the business achieve its goals."
          />
        ))}
      </section>
      <section className={styles.fAQs}>
        <div className={styles.header}>
          <h1 className={styles.whatJarvisDoes}>What Jarvis does</h1>
        </div>
        <div className={styles.allInclusiveParent}>
          {data.features.map((item, index) => (
            <AllInclusive
              image={item.image_url}
              Title={item.title}
              Content={item.content}
            />
          ))}
        </div>
      </section>
      <UsageMetricsSection metricData={data.usageMetric} />
      <section className={styles.faqsParent}>
        <h1 className={styles.faqs}>FAQs</h1>
        <FAQsToggle Faqs={data.faqs} />
      </section>
      <FOOTER />
    </div>
  );
};

export default UnathenticatedLandingPage;
