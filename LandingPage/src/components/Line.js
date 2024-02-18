import SSOenabled from "./SSOenabled";
import styles from "./Line.module.css";

const Line = () => {
  return (
    <section className={styles.line}>
      <SSOenabled
        group12="/group-11@2x.png"
        provider="Claims"
        comprehensiveAnalyticalSo={`Collaborate with UHC operation to develop and deliver innovative analytics & automation solutions for improving transactions processing outcomes in a timely and efficiently manner in turn improving customer experience`}
      />
      <div className={styles.fAVIconContainer}>
        <div className={styles.mainContentFrame}>
          <div className={styles.menuBar}>
            <div className={styles.menuItem}>
              <h2 className={styles.paymentIntegrity}>Payment Integrity</h2>
              <div className={styles.fraudWasteAbuse}>
                Fraud Waste Abuse and Error (FWAE) based insights and analytical
                solutions helping our Payment Integrity partners achieve their
                business goals.
              </div>
            </div>
            <div className={styles.exploreButton}>
              <b className={styles.explore}>Explore</b>
            </div>
          </div>
        </div>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <img
            className={styles.image5Icon}
            loading="eager"
            alt=""
            src="/image-5@2x.png"
          />
        </div>
      </div>
      <div className={styles.subheaderText}>
        <div className={styles.rectangleGroup}>
          <div className={styles.frameItem} />
          <img
            className={styles.image2Icon}
            loading="eager"
            alt=""
            src="/image-2@2x.png"
          />
        </div>
        <div className={styles.navLinksGroup}>
          <h2 className={styles.crossFunctionalSolutions}>
            Cross-Functional Solutions
          </h2>
          <div className={styles.tickerRectangle}>
            <div
              className={styles.crossFunctionalCollaboration}
            >{`Cross-Functional collaborations between Provider, Consumer, Claims & Payment Integrity, leading to efficient and streamlined data science processes, while leveraging each team's unique strengths, to build key strategic analytical solutions, which benefit all businesses achieve their goals.`}</div>
          </div>
          <div className={styles.exploreButton1}>
            <b className={styles.explore1}>Explore</b>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Line;
