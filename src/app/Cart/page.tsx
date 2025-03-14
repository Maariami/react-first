import clsx from "clsx";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <section className={clsx(styles.section, styles.centered)}>
        <div className={styles.shoppingCart}>
          <p>Shopping Cart</p>

          <div className={styles.item}>
            <img src="/images/Iphone 14 pro 1.png" alt="iPhone 14 Pro" />
            <div className={styles.nameId}>
              <p className={styles.title}>
                Apple iPhone 14 Pro Max 128Gb Deep Purple
              </p>
              <p className={styles.id}>#25139526913984</p>
            </div>
            <div className={styles.num}>
              <p>-</p>
              <div className={styles.amount}>1</div>
              <p>+</p>
              <p>$1399</p>
              <img src="/images/Close.png" alt="Close" />
            </div>
          </div>

          <div className={styles.item}>
            <img src="/images/Iphone 14 pro 1.png" alt="iPhone 14 Pro" />
            <div className={styles.nameId}>
              <p className={styles.title}>
                Apple iPhone 14 Pro Max 128Gb Deep Purple
              </p>
              <p className={styles.id}>#25139526913984</p>
            </div>
            <div className={styles.num}>
              <p>-</p>
              <div className={styles.amount}>1</div>
              <p>+</p>
              <p>$1399</p>
              <img src="/images/Close.png" alt="Close" />
            </div>
          </div>
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
            <p>$2347</p>
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
            <p>$2426</p>
          </div>
          <button className={styles.checkout}>Checkout</button>
        </div>
      </section>
    </>
  );
}
