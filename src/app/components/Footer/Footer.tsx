import React from "react";
import styles from "./Footer.module.css";
import clsx from "clsx";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className={styles.footer}>
      <div className={clsx(styles.info, styles.centered)}>
        <div className={styles.cyber}>
          <img src="./images/cyberwhite.png" alt="" />
          <p>
            We are a residential interior design firm located in Portland. Our
            boutique-studio offers more than
          </p>
        </div>
        <div className={styles.services}>
          <p>Services</p>
          <p>Bonus program</p>
          <p>Gift cards</p>
          <p>Credit and payment</p>
          <p>Service contracts</p>
          <p>Non-cash account</p>
          <p>Payment</p>
        </div>
        <div className={styles.assist}>
          <p>Assistance to the buyer</p>
          <p>Find an order</p>
          <p>Terms of delivery</p>
          <p>Exchange and return of goods</p>
          <p>Guarantee</p>
          <p>Frequently asked questions</p>
          <p>Terms of use of the site</p>
        </div>
      </div>
      <div className={clsx(styles.centered, styles.Social)}>
        <img src="./images/Social Icons.png" alt="" />
      </div>
    </footer>
  );
};

export default Footer;
