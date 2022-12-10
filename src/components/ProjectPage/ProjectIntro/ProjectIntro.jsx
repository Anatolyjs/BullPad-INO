import styles from "./ProjectIntro.module.scss";
import logo from "../../../img/Bullpad.jpg";
import { useNavigate } from "react-router-dom";

const ProjectIntro = ({inoId}) => {
  const navigate = useNavigate();
  const onButtonClick = () => {
    navigate(`/ino/${inoId}/sale`)
  }
  return (
    <div className={styles.projectIntro}>
      <div className={styles.projectIntro__logo}>
        <img src={logo} alt="project logo" />
      </div>
      <div className={styles.projectIntro__info}>
        <div>
          <div className={styles.projectIntro__name}>NFT Shoebox - FCFS</div>
          <div className={styles.projectIntro__social}>
            <div className={styles.projectIntro__item}>
              <a href="https://twitter.com/LCH_Bullpad" target={"_blank"}>
                <i className="fa fa-twitter fa-2x"></i>
              </a>
            </div>
            <div className={styles.projectIntro__item}>
              <a href="https://t.me/BullPadChat" target={"_blank"}>
                <i className="fa fa-paper-plane fa-2x"></i>
              </a>
            </div>
            <div className={styles.projectIntro__item}>
              <a href="https://t.me/Bull_Pad" target={"_blank"}>
                <i className="fa fa-paper-plane fa-2x"></i>
              </a>
            </div>
          </div>
        </div>
        <button onClick={onButtonClick} className={styles.projectIntro__btn}>Go to sale</button>
      </div>
    </div>
  );
};

export default ProjectIntro;
