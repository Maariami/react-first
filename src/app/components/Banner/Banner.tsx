import React from "react";
import styles from "./Banner.module.css";
import clsx from "clsx";

type Props = {};

const Banner = (props: Props) => {
  return (
    <div className={styles.saleimage}>
      <div className={styles.saleTexts}>
        <p className={styles.saleHead}>
          Big Summer <span> Sale</span>
        </p>
        <p className={styles.saleText}>
          Commodo fames vitae vitae leo mauris in. Eu consequat.
        </p>
        <button className={clsx(styles.saleButt, styles.shopNow)}>
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Banner;
