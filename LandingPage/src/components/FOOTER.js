import styles from "./FOOTER.module.css";

const FOOTER = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerChild} />
      <div className={styles.fAQsQuestions}>
        <div className={styles.fAQsQuestions1}>
          <b className={styles.businessSolutions}>Business Solutions</b>
          <div className={styles.businessSolutionsGroup}>
            <div className={styles.footerLink}>
              <div className={styles.crossFunctionalSolutions}>
                Cross-Functional Solutions
              </div>
            </div>
            <div className={styles.footerLink1}>
              <div className={styles.provider}>Provider</div>
            </div>
            <div className={styles.footerLink2}>
              <div className={styles.consumer}>Consumer</div>
            </div>
            <div className={styles.footerLink3}>
              <div className={styles.claims}>Claims</div>
            </div>
            <div className={styles.footerLink4}>
              <div className={styles.paymentIntegrity}>Payment Integrity</div>
            </div>
          </div>
        </div>
        <div className={styles.supportLink}>
          <b className={styles.support}>Support</b>
          <div className={styles.footerLink5}>
            <div className={styles.crossFunctionalSolutions1}>Contact Us</div>
          </div>
        </div>
        <div className={styles.eTAITeamLogo}>
          <b className={styles.externalLinks}>External Links</b>
          <div className={styles.rectangle}>
            <div className={styles.footerLink6}>
              <div className={styles.crossFunctionalSolutions2}>
                UnitedHealth Group
              </div>
            </div>
            <div className={styles.footerLink7}>
              <div className={styles.provider1}>UnitedHealthcare</div>
            </div>
            <div className={styles.footerLink8}>
              <div className={styles.consumer1}>Optum</div>
            </div>
          </div>
        </div>
        <img
          className={styles.etaiTeamLogo1Icon}
          loading="eager"
          alt=""
          src="/etaiteamlogo-1@2x.png"
        />
      </div>
      <div className={styles.footerBase} />
      <div
        className={styles.developedByUhc}
      >{`© 2024 Developed by UHC Provider Emerging Tech, Analytics & Insights Team`}</div>
    </footer>
  );
};

export default FOOTER;
