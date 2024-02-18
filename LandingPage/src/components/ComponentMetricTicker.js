import { useMemo } from "react";
import styles from "./ComponentMetricTicker.module.css";

const ComponentMetricTicker = ({ callVolume, prop, propPadding }) => {
  const componentMetricTicker1Style = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div
      className={styles.componentMetricTicker1}
      style={componentMetricTicker1Style}
    >
      <div className={styles.callVolume}>{callVolume}</div>
      <div className={styles.frameParent}>
        <img className={styles.frameInput} src="./trendingup.png" />
        <b className={styles.b}>{prop}</b>
      </div>
    </div>
  );
};

export default ComponentMetricTicker;
