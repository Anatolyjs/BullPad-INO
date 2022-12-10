import styles from './ProjectAbout.module.scss';

const ProjectProgress = ({supply, price}) => {
    return (
        <div className={styles.projectProgress}>
            <div className={styles.projectProgress__stages}>
                <div className={styles.stages__item}>
                    <div className={styles.item__title}>Registration</div>
                    <div className={styles.item__dates}>
                        <div className={styles.item__bordersTime}>From:</div>
                        <div className={styles.item__data}>Sep 5, 13:00 (10:00 UTC)</div>
                    </div>
                    <div className={styles.item__dates}>
                        <div className={styles.item__bordersTime}>To:</div>
                        <div className={styles.item__data}>Sep 20, 19:59 (16:59 UTC)</div>
                    </div>
                </div>
                <div className={styles.stages__item}>
                    <div className={styles.item__title}>Sell</div>
                    <div className={styles.item__dates}>
                        <div className={styles.item__bordersTime}>From:</div>
                        <div className={styles.item__data}>Sep 21, 18:15 (15:15 UTC)</div>
                    </div>
                    <div className={styles.item__dates}>
                        <div className={styles.item__bordersTime}>To:</div>
                        <div className={styles.item__data}>Sep 21, 22:15 (19:15 UTC)</div>
                    </div>
                </div>
                <button className={styles.stages__btn}><a href='#'>Join whitelist</a></button>
            </div>
            <div className={styles.projectProgress__progress}>
                <div className={styles.progress__title}>Progress</div>
                <div className={styles.progress__item}>
                    <div className={styles.item__name}>Total</div>
                    <div className={styles.item__value}>{supply}</div>
                </div>
                <div className={styles.progress__item}>
                    <div className={styles.item__name}>Price</div>
                    <div className={styles.item__value}>{price}</div>
                </div>
                <div className={styles.progress__item}>
                    <div className={styles.item__name}>Total fundraise</div>
                    <div className={styles.item__value}>21,250 BUSD</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectProgress;