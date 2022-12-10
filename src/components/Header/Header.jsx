import styles from "./Header.module.scss";
import logo from "../../img/BULLPADwhite(1).svg";
import cn from 'classnames';
import { useState } from "react";

const Header = () => {
  return (
    <header className="Header">
      <div className="container">
        <div className={cn(styles.header)}>
          <div className={styles.header__body}>
            <div className={styles.header__left}>
              <div className={styles.header__logo}>
                <img src={logo} alt="Bollpad"></img>
              </div>
              <nav className={styles.header__nav}>
                <a href="http://194.163.190.127/index.html#">Home</a>
              </nav>
            </div>
          </div>
         
        </div>
      </div>
    </header>
  );
};

export default Header;
