import React from "react";
import styles from "./Pics.module.css";

type Props = {};

const pics = (props: Props) => {
  return (
    <div className={styles.pictures}>
      <div className={styles.playstation}>
        <img
          className={styles.picturesShow}
          src="./images/PlayStationbig.png"
          alt=""
        />
        <img src="./images/PlayStation.png" alt="" />
        <div className={styles.picturesText}>
          <p>
            <span>Playstation 5</span>
          </p>
          <p>
            Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will
            redefine your PlayStation experience.
          </p>
        </div>
      </div>
      <div className={styles.macbook}>
        <img
          className={styles.picturesShow}
          src="./images/MacBookbig.png"
          alt=""
        />
        <div className={styles.picturesText}>
          <p>
            Macbook <span>Air</span>
          </p>
          <p>
            The new 15‑inch MacBook Air makes room for more of what you love
            with a spacious Liquid Retina display.
          </p>
          <button className={styles.shopNow}>Shop now</button>
        </div>
        <img src="./images/MacBook Pro 14.png" alt="" />
      </div>
      <div className={styles.airpod}>
        <img
          className={styles.picturesShow}
          src="./images/airpodbig.png"
          alt=""
        />
        <img src="./images/airpod.png" alt="" />
        <div className={styles.picturesText}>
          <p>
            Apple AirPods <span> Max </span>
          </p>
          <p>Computational audio. Listen, it's powerful</p>
        </div>
      </div>
      <div className={styles.vision}>
        <img
          className={styles.picturesShow}
          src="./images/visionbig.png"
          alt=""
        />
        <img src="./images/vision.png" alt="" />
        <div className={styles.picturesText}>
          <p>
            Apple Vision <span>Pro</span>
          </p>
          <p>An immersive way to experience entertainment</p>
        </div>
      </div>
    </div>
  );
};

export default pics;
