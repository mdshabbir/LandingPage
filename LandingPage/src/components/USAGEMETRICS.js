import styles from "./USAGEMETRICS.module.css";

const USAGEMETRICS = () => {
  return (
    <section className={styles.uSAGEMETRICS}>
      <div className={styles.topNav}>
        <div className={styles.topNavChild} />
        <img
          className={styles.jarvislogo1Icon}
          loading="eager"
          alt=""
          src="/jarvislogo-1@2x.png"
        />
        <div className={styles.ticker}>
          <h3 className={styles.home}>Home</h3>
          <div className={styles.uniqueVisits}>
            <div className={styles.business}>Business</div>
            <img
              className={styles.arrowDropDownFill1Wght500Icon}
              alt=""
              src="/arrow-drop-down-fill1-wght500-grad0-opsz24-1.svg"
            />
          </div>
          <h3 className={styles.onboarding}>Onboarding</h3>
          <h3 className={styles.login}>Login</h3>
        </div>
      </div>
      <img className={styles.bannerIcon} alt="" src="/banner@2x.png" />
    </section>
  );
};

export default USAGEMETRICS;
