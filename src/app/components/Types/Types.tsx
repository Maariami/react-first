import React from "react";
import styles from "./Types.module.css";
import clsx from "clsx";

type Props = {};

const Types = (props: Props) => {
  return (
    <section className={styles.feriqonia}>
      <div className={clsx(styles.centered, styles.browse)}>
        <p>Browse By Category</p>
        <img src="./images/Arrow`s.png" alt="" />
      </div>
      <div className={clsx(styles.centered, styles.categorys)}>
        <div className={styles.category}>
          <img src="./images/Phones.png" alt="" />
          <p>Phones</p>
        </div>
        <div className={styles.category}>
          <img src="./images/Phones.png" alt="" />
          <p>Phones</p>
        </div>
        <div className={styles.category}>
          <img src="./images/Phones.png" alt="" />
          <p>Phones</p>
        </div>
        <div className={styles.category}>
          <img src="./images/Phones.png" alt="" />
          <p>Phones</p>
        </div>
        <div className={styles.category}>
          <img src="./images/Phones.png" alt="" />
          <p>Phones</p>
        </div>
        <div className={styles.category}>
          <img src="./images/Phones.png" alt="" />
          <p>Phones</p>
        </div>
      </div>
    </section>
  );
};

export default Types;
