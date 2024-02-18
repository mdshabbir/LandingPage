import styles from "./NavigationBar.module.css";

const NavigationBar = () => {
  return (
    <section className={styles.navigationBar}>
      <div className={styles.frameContainer}>
        <div className={styles.contentArea}>
          <div className={styles.searchField}>
            <h2 className={styles.consumer}>Consumer</h2>
            <div className={styles.menu}>
              <div className={styles.analyticalSolutionsGeneratin}>
                Analytical Solutions generating insights for all Consumer
                touchpoints vis-à-vis the corresponding Providers.
              </div>
              <div className={styles.exploreButton}>
                <b className={styles.explore}>Explore</b>
              </div>
            </div>
          </div>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <img
              className={styles.image6Icon}
              loading="eager"
              alt=""
              src="/image-6@2x.png"
            />
          </div>
        </div>
        <img
          className={styles.backToTop}
          loading="eager"
          alt=""
          src="/back-to-top.svg"
        />
      </div>
    </section>
  );
};

export default NavigationBar;
