import React from "react";
import styles from "./Discount.module.css";
import clsx from "clsx";

type Props = {};

const Discount = (props: Props) => {
  return (
    <>
      <div className={clsx(styles.centered, styles.browse, styles.upped)}>
        <p>Discounts up to -50%</p>
      </div>
      <div className={clsx(styles.prods, styles.centered)}>
        <div className={styles.product}>
          <img className="" src="./images/cart.png" />
          <img src="./images/Iphone 14 pro 1.png" alt="" />
          <p className={styles.desc}>
            Apple iPhone 14 Pro Max 128GB Deep Purple
          </p>
          <p className={styles.price}>$900</p>
          <button className={styles.shopNow}>Buy Now</button>
        </div>
        <div className={styles.product}>
          <img className="" src="./images/cart.png" />
          <img src="./images/Iphone 14 pro 1.png" alt="" />
          <p className={styles.desc}>
            Apple iPhone 14 Pro Max 128GB Deep Purple
          </p>
          <p className={styles.price}>$900</p>
          <button className={styles.shopNow}>Buy Now</button>
        </div>
        <div className={styles.product}>
          <img className="" src="./images/cart.png" />
          <img src="./images/Iphone 14 pro 1.png" alt="" />
          <p className={styles.desc}>
            Apple iPhone 14 Pro Max 128GB Deep Purple
          </p>
          <p className={styles.price}>$900</p>
          <button className={styles.shopNow}>Buy Now</button>
        </div>
        <div className={styles.product}>
          <img className="" src="./images/cart.png" />
          <img src="./images/Iphone 14 pro 1.png" alt="" />
          <p className={styles.desc}>
            Apple iPhone 14 Pro Max 128GB Deep Purple
          </p>
          <p className={styles.price}>$900</p>
          <button className={styles.shopNow}>Buy Now</button>
        </div>
      </div>
    </>
  );
};

export default Discount;
