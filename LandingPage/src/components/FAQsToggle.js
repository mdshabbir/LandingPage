import { useCallback } from "react";
import styles from "./FAQsToggle.module.css";

const FAQsToggle = ({ Faqs }) => {
  console.log(Faqs);
  return (
    <div className={styles.fAQsToggle}>
      {console.log(Faqs)}
      {Faqs?.map((item, value) => (
        <>
          <div className={styles.fAQsQuestions} />

          <div className={styles.fAQsQuestions1}>
            <img
              className={styles.chevronRightFill0Wght500GrIcon}
              loading="eager"
              alt=""
              src="/chevron-right-fill0-wght500-grad0-opsz48-1.svg"
              // onClick={onChevronRightFILL0Wght500GRIconClick}
            />
            <div className={styles.whatIsJarvis}>{item.question}</div>
            <div className={styles.whatIsJarvis}>{item.answer}</div>
          </div>
        </>
      ))}
    </div>
  );
};

export default FAQsToggle;
