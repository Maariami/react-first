import styles from "./page.module.css";
import Hero from "./components/Hero/Hero";
import Pics from "./components/pictuesblock/pics";
import Types from "./components/Types/Types";
import Products from "./components/Products/Products";
import Discount from "./components/Discount/Discount";
import Banner from "./components/Banner/Banner";

export default function Home() {
  return (
    <div className={styles.page}>
      <Hero></Hero>
      <Pics></Pics>
      <Types></Types>
      <Products></Products>
      <Discount></Discount>
      <Banner></Banner>
    </div>
  );
}
