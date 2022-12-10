import styles from "./ProjectAbout.module.scss";

const ProjectInfo = () => {
  return (
    <div className={styles.projectInfo}>
      <div className={styles.projectInfo__title}>Project Information</div>
      <div className={styles.projectInfo__description}>
        <p>
          In the unpredictable world of cryptocurrencies and DeFi investing,
          there are many different market phases, including bull, bear,
          stagnant, and choppy. Since the introduction of futures trading, every
          sort of market offers opportunities for short-term traders, some of
          which are riskier than others. These possibilities become considerably
          more limited in a bear market for the longer-term investor. The
          launchpad is one project type that will always have a use-case and
          offers a profitable investment opportunity, even during a bear market.
        </p>
      </div>
    </div>
  );
};

export default ProjectInfo;
