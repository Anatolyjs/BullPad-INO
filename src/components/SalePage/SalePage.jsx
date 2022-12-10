import styles from "./SalePage.module.scss";
import logo from "../../img/logoBullpad.png";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setActiveProjectInfo } from "../../redux/sales-reduce";

const SalePage = () => {
  const project = useSelector((state) => state.reducer.activeProjectInfo);
  const dispatch = useDispatch();
  const params = useParams();
  if (!project) {
    dispatch(setActiveProjectInfo(params.inoId));
  }
  return (
    <section className={styles.salePage}>
      <div className="container">
        <div className={styles.salePage__body}>
          <div className={styles.salePage__image}>
            <img src={logo} alt="sale image" />
          </div>
          <div className={styles.salePage__description}>
            <div className={styles.description__body}>
              <div className={styles.salePage__social}>
                <div className={styles.salePage__item}>
                  <a href="https://twitter.com/LCH_Bullpad" target={"_blank"}>
                    <i className="fa fa-twitter fa-2x"></i>
                  </a>
                </div>
                <div className={styles.salePage__item}>
                  <a href="https://t.me/BullPadChat" target={"_blank"}>
                    <i className="fa fa-paper-plane fa-2x"></i>
                  </a>
                </div>
                <div className={styles.salePage__item}>
                  <a href="https://t.me/Bull_Pad" target={"_blank"}>
                    <i className="fa-brands fa-discord"></i>
                  </a>
                </div>
              </div>
              <div className={styles.salePage__name}>Mystery box</div>
              <div className={styles.salePage__minted}>
                {" "}
                Minted: 200 / {project.supply}
              </div>
              <div className={styles.salePage__price}>
                Price: {project.price}
              </div>
              <button className={styles.salePage__btn}>buy</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SalePage;
