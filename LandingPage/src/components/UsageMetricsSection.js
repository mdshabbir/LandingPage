// UsageMetricsSection.js
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./UsageMetricsSection.module.scss";

const UsageMetricsSection = ({ metricData }) => {
  useEffect(() => {
    const ctx = document.getElementById("usageChart");
    if (ctx) {
      new Chart(ctx, {
        type: "line",
        data: {
          labels: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
          ],
          datasets: [
            {
              label: "My First Dataset",
              data: [65, 59, 80, 81, 56, 55, 40],
              fill: false,
              borderColor: "rgb(75, 192, 192)",
              tension: 0.1,
            },
          ],
          options: {
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          },
        },
      });
    }
  }, []);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleCardHover = (index) => {
    setHoveredIndex(index);
  };

  const handleCardHoverExit = () => {
    setHoveredIndex(null);
  };

  return (
    <section className={styles.usageMetricsSection}>
      <div className={styles.usageMetricsSection1}>
        <div className={styles.usageMetricsSectionChild} />
        <h1 className={styles.howItsGoing}>How it's going so far</h1>
        <div className={styles.ticker3Parent}>
          {metricData?.map((item, index) => (
            <div
              key={index}
              className={`${styles.ticker3} ${
                hoveredIndex === index ? styles.hovered : ""
              }`}
              onMouseEnter={() => handleCardHover(index)}
              onMouseLeave={handleCardHoverExit}
            >
              <div className={styles.ticker3Child} />
              <div className={styles.uniqueVisits}>{item.title}</div>
              <div className={styles.ticker3Inner}>
                <div className={styles.trendingUpFill1Wght500GradParent}>
                  <img
                    className={styles.trendingUpFill1Wght500GradIcon}
                    alt=""
                    src="/trending-up-fill1-wght500-grad0-opsz24-1.svg"
                  />
                  <b className={styles.b}>{item.NumberOfVisits}</b>
                </div>
              </div>
              <div className={styles.asOfDec}>{item.Date}</div>
              {hoveredIndex === index && (
                <div className={styles.ticker3Graph}>
                  <canvas id="usageChart"></canvas>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

UsageMetricsSection.propTypes = {
  metricData: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      NumberOfVisits: PropTypes.number.isRequired,
      Date: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default UsageMetricsSection;
