"use client";
import React, { useState } from "react";
import styles from "./Discount.module.css";
import clsx from "clsx";

type Props = {};

const Discount = (props: Props) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useState(() => {
    fetch("/jsons/discount.json")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((error) => console.log("eoooor", error));
  }, []);

  if (loading) return <p>loading.valueOf...</p>;
  return (
    <>
      <div className={clsx(styles.centered, styles.browse, styles.upped)}>
        <p>Discounts up to -50%</p>
      </div>
      <div className={clsx(styles.centered, styles.prods)}>
        {data.map((prod: any) => (
          <div key={prod.id} className={styles.product}>
            <img className="" src="./images/cart.png" />
            <img src={prod.image} alt="" />
            <p className={styles.desc}>
              {prod.name} {prod.storage} {prod.color} {prod.resolution}
              {prod.size} {prod.material}
            </p>
            <p className={styles.price}>{prod.price}$</p>
            <button className={styles.shopNow}>Buy Now</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Discount;
