import React from "react";
import styles from "./Hero.module.css";

import clsx from "clsx";
type Props = {};

const Hero = (props: Props) => {
  return (
    <div className={styles.hero}>
      <div className={clsx(styles.heroo, styles.centered)}>
        <div className={styles.headText}>
          <p>Pro.Beyond.</p>
          <p>
            IPhone 14 <span className={styles.span}>Pro</span>
          </p>
          <p>Created to change everything for the better. For everyone</p>
          <button className={styles.shopNow}>Shop now</button>
        </div>
        <img src="./images/Iphone Image.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
