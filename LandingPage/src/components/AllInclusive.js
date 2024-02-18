import { useMemo } from "react";
import styles from "./AllInclusive.module.css";

const AllInclusive = ({
  image,
  Title,
  Content,
  propPadding,
  propHeight,
  propHeight1,
}) => {
  const allInclusiveStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const allInclusive1Style = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const viewCompleteAnalyticStyle = useMemo(() => {
    return {
      height: propHeight1,
    };
  }, [propHeight1]);

  return (
    <div className={styles.allInclusive} style={allInclusiveStyle}>
      <div className={styles.allInclusiveChild} />
      <img
        className={styles.allInclusiveItem}
        loading="eager"
        alt=""
        src={image}
      />
      <div className={styles.rectangle}>
        <h2 className={styles.allInclusive1} style={allInclusive1Style}>
          {Title}
        </h2>
        <div
          className={styles.viewCompleteAnalytic}
          style={viewCompleteAnalyticStyle}
        >
          {Content}
        </div>
      </div>
    </div>
  );
};

export default AllInclusive;
