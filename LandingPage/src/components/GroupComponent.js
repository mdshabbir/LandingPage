import { useMemo } from "react";
// import HoverOff from "./HoverOff";
import styles from "./GroupComponent.module.css";

const GroupComponent = ({ exploreDisplay, onExploreButtonClick }) => {
  const exploreStyle = useMemo(() => {
    return {
      display: exploreDisplay,
    };
  }, [exploreDisplay]);

  return (
    <div className={styles.frameParent}>
      <img
        className={styles.frameChild}
        loading="eager"
        alt=""
        src="/group-27@2x.png"
      />
      <div className={styles.rectangleParent}>
        <div className={styles.frameItem} />
        <h2 className={styles.comprehensiveAnalyticalSuite}>
          <p className={styles.comprehensive}>Comprehensive</p>
          <p className={styles.analyticalSuite}>Analytical Suite</p>
        </h2>
        {/* <HoverOff
          hoverOffPosition="unset"
          hoverOffTop="unset"
          hoverOffLeft="unset"
          hoverOffWidth="103px"
          exploreAlignSelf="unset"
          exploreDisplay="inline-block"
          onExploreButtonClick={onExploreButtonClick}
        /> */}
      </div>
    </div>
  );
};

export default GroupComponent;
