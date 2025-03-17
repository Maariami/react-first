"use client";
import styles from "./Types.module.css";
import clsx from "clsx";
import { useEffect, useState } from "react";

type Props = {};

const Types = (props: Props) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/jsons/types.json") // Fetch from public folder
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (loading) return <p>Loading...</p>;
  return (
    <section className={styles.feriqonia}>
      <div className={clsx(styles.centered, styles.browse)}>
        <p>Browse By Category</p>
        <img src="./images/Arrow`s.png" alt="" />
      </div>
      <div className={clsx(styles.centered, styles.categorys)}>
        {data.map((type: any) => (
          <div key={type.id} className={styles.category}>
            <img src={type.img} alt={type.text} />
            <p>{type.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Types;
