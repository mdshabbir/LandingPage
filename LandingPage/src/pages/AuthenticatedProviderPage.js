import { useCallback, useState } from "react";
import styles from "./AuthenticatedProviderPage.module.css";
import ProviderSolution from "../components/ProviderSolution";
import data from "../JsonObject/Landing-page-data.json";
import GroupComponent from "../components/GroupComponent";
import FOOTER from "../components/FOOTER";

const AuthenticatedProviderPage = () => {
  const buttonValue = [
    "call volume",
    "Portal Interactions",
    "EDI Transactions",
    "API Transactions",
    "Chat Volume",
    "Digital Adoption",
  ];
  const onJarvisLogo1ImageClick = useCallback(() => {
    // Please sync "Authenticated - Landing page" to the project
  }, []);
  const handleonClick = (event) => {
    console.log(event.target.innerHTML);
    setBtnValue(event.target.innerHTML);
  };
  let [btnValue, setBtnValue] = useState([]);

  const onArrowBackFILL1Wght500GRAD0IconClick = useCallback(() => {
    // Please sync "Authenticated - Landing page" to the project
  }, []);

  return (
    <div className={styles.authenticatedProviderPage}>
      <div className={styles.authenticatedProviderPageChild} />
      <div className={styles.keyComponentsButtonFrame}>
        <div className={styles.arrowBackFill1Wght500Grad0Parent}>
          <img
            className={styles.arrowBackFill1Wght500Grad0Icon}
            loading="eager"
            alt=""
            src="/arrow-back-fill1-wght500-grad0-opsz24-1.svg"
            onClick={onArrowBackFILL1Wght500GRAD0IconClick}
          />
          <h1 className={styles.providerSolutions}>Provider Solutions</h1>
        </div>
      </div>
      <ProviderSolution />

      <div className={styles.keyComponentsButton2}>
        {/* {data.providerSolution.map((items, index) => (
          <button className={styles.keyComponentsButton11} key={index}>
            <b onClick={handleonClick} className={styles.explore}>
              {buttonValue[index]}
            </b>
          </button>
        ))} */}
      </div>
      <GroupComponent
        exploreDisplay="inline-block"
        // onExploreButtonClick={onExploreButtonClick}
      />

      <FOOTER />
    </div>
  );
};

export default AuthenticatedProviderPage;
