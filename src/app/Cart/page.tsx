"use client";
import clsx from "clsx";
import styles from "./page.module.css";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [cartItems, setCartItems] = useState<any[]>([]);

  useEffect(() => {
    console.log("useEffect triggered");
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      const parsedCart = JSON.parse(storedCart);
      console.log("Cart Items from localStorage:", parsedCart);
      setCartItems(parsedCart);
    }
  }, []);

  const increaseQuantity = (id: number) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === id) {
        item.quantity += 1;
      }
      return item;
    });

    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const decreaseQuantity = (id: number) => {
    const updatedCart = cartItems
      .map((item) => {
        if (item.id === id) {
          if (item.quantity > 1) {
            item.quantity -= 1;
          } else {
            return null;
          }
        }
        return item;
      })
      .filter(Boolean);

    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  console.log("cartItems in state:", cartItems);

  return (
    <>
      <section className={clsx(styles.section, styles.centered)}>
        <div className={styles.shoppingCart}>
          <p>Shopping Cart</p>

          {cartItems.length > 0 ? (
            cartItems.map((item: any) => (
              <div key={item.id} className={styles.item}>
                <img src={item.image} alt={item.name} />
                <div className={styles.nameId}>
                  <p className={styles.title}>{item.name}</p>
                </div>
                <div className={styles.num}>
                  <p
                    style={{ cursor: "pointer" }}
                    onClick={() => decreaseQuantity(item.id)}
                  >
                    -
                  </p>
                  <div className={styles.amount}>{item.quantity}</div>
                  <p
                    style={{ cursor: "pointer" }}
                    onClick={() => increaseQuantity(item.id)}
                  >
                    +
                  </p>
                  <p>${item.price}</p>
                  <img
                    src="/images/Close.png"
                    alt="Close"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      const updatedCart = cartItems.filter(
                        (i) => i.id !== item.id
                      );
                      setCartItems(updatedCart);
                      localStorage.setItem("cart", JSON.stringify(updatedCart));
                    }}
                  />
                </div>
              </div>
            ))
          ) : (
            <p>Your cart is empty.</p>
          )}
        </div>

        <div className={styles.orderSummary}>
          <p>Order Summary</p>
          <div className={styles.promo}>
            <p>Discount code / Promo code</p>
            <input type="text" placeholder="Code" />
          </div>
          <div className={styles.card}>
            <p>Your bonus card number</p>
            <div className={styles.cardNumber}>
              <input type="number" placeholder="Enter Card Number" />
              <button>Apply</button>
            </div>
          </div>
          <div className={styles.subtotal}>
            <p>Subtotal</p>
            <p>
              $
              {cartItems.reduce(
                (acc, item) => acc + item.price * item.quantity,
                0
              )}
            </p>
          </div>
          <div className={styles.details}>
            <div className={styles.tax}>
              <p>Estimated Tax</p>
              <p>$50</p>
            </div>
            <div className={styles.ship}>
              <p>Estimated shipping & Handling</p>
              <p>$29</p>
            </div>
          </div>
          <div className={styles.total}>
            <p>Total</p>
            <p>
              $
              {cartItems.reduce(
                (acc, item) => acc + item.price * item.quantity,
                0
              ) +
                50 +
                29}
            </p>
          </div>
          <button className={styles.checkout}>Checkout</button>
        </div>
      </section>
    </>
  );
}
