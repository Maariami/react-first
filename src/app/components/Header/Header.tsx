import clsx from "clsx";
import React from "react";
import styles from "./Header.module.css";
import Link from "next/link";

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
            <Link className={styles.a} href="/">
              Home
            </Link>
          </li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Blog</li>
        </ul>
        <div className={styles.profile}>
          <img src="./images/cart.png" alt="" />
          <Link href="/Cart">
            <img src="./images/heart.png" alt="Heart Icon" />
          </Link>
          <img src="./images/profile.png" alt="" />
        </div>
        <img className={styles.burger} src="./images/Burger.png" alt="" />
      </div>
    </header>
  );
};

export default Header;
