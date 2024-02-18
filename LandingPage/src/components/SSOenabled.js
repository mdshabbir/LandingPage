import { useNavigate } from "react-router-dom";
import styles from "./SSOenabled.module.css";

const SSOenabled = ({ group12, provider, comprehensiveAnalyticalSo }) => {
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate("/AuthenticatedProviderPage.js");
  };
  return (
    <div className={styles.sSOenabled}>
      <img
        className={styles.sSOenabledChild}
        loading="eager"
        alt=""
        src={group12}
      />
      <div className={styles.businessSolutions}>
        <h2 className={styles.provider}>{provider}</h2>
        <div className={styles.crossFunctionalSolutions}>
          <div className={styles.comprehensiveAnalyticalSolut}>
            {comprehensiveAnalyticalSo}
          </div>
          <button onClick={handleOnClick} className={styles.exploreButton}>
            <b className={styles.explore}>Explore</b>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SSOenabled;
