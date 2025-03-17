"use client";
import React, { useEffect, useState } from "react";
import styles from "./Products.module.css";
import clsx from "clsx";

type Props = {};

const Products = (props: Props) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/jsons/products.json")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((error) => console.log("erroria erroriii", error));
  }, []);

  const addToCart = (product: Product) => {
    const cartItems: Product[] = JSON.parse(
      localStorage.getItem("cart") || "[]"
    );

    // Find the product in the cart
    const existingProduct = cartItems.find((item) => item.id === product.id);

    if (existingProduct) {
      // If product exists, increase its quantity
      existingProduct.quantity = (existingProduct.quantity || 1) + 1;
    } else {
      // If not found, add it with quantity 1
      cartItems.push({ ...product, quantity: 1 });
    }

    // Save updated cart to localStorage
    localStorage.setItem("cart", JSON.stringify(cartItems));
  };

  if (loading) return <p>loading...</p>;
  return (
    <>
      <div className={clsx(styles.centered, styles.description)}>
        <p>New Arrival</p>
        <p>Bestseller</p>
        <p>Featured Products</p>
      </div>
      <div className={clsx(styles.prods, styles.centered)}>
        {data.map((prod: any) => (
          <div key={prod.id} className={styles.product}>
            <img className="" src="./images/cart.png" />
            <img src={prod.image} alt="" />
            <p className={styles.desc}>
              {prod.name} {prod.storage} {prod.color} {prod.resolution}
              {prod.size} {prod.material}
            </p>
            <p className={styles.price}>{prod.price}$</p>
            <button
              className={clsx(styles.shopNow)}
              onClick={() => addToCart(prod)} // Add to cart on click
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
