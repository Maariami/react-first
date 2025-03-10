import clsx from "clsx";
import React from "react";
import styles from "./Header.module.css";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className={styles.header}>
      <div className={clsx(styles.centered, styles.head)}>
        <img src="./images/cyber.png" alt="" />
        <div className={styles.search}>
          <img src="./images/serach.png" alt="" />
          <input className={styles.input} type="text" placeholder="search" />
        </div>
        <ul className={styles.navbar}>
          <li>
            <a className={styles.a} href="./home.html">
              Home
            </a>
          </li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Blog</li>
        </ul>
        <div className={styles.profile}>
          <img src="./images/cart.png" alt="" />
          <a href="cart.html">
            <img src="./images/heart.png" alt="Heart Icon" />
          </a>
          <img src="./images/profile.png" alt="" />
        </div>
        <img className={styles.burger} src="./images/Burger.png" alt="" />
      </div>
    </header>
  );
};

export default Header;
