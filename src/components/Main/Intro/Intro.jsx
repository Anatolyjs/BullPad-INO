import styles from './Intro.module.scss';
import logo from '../../../img/logoBullpad.png'

const Intro = () => {
    return (
        <section className={styles.intro}>
            <div className={styles.intro__body}>
                <div className={styles.intro__logo}>
                    <img src={logo} alt='BullPad logo'/>
                </div>
                <h1 className={styles.intro__title}>BullPad Initial NFT Offering</h1>
            </div>
        </section>
    )
}

export default Intro;