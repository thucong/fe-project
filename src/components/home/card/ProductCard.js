import React from "react";
import Image from "next/image";
import Slide from "react-reveal/Slide";
import styles from "./ProductCard.module.css";

export default function ProductCard(props) {
  let { productName, price, description, labels } = props;
  return (
    <Slide left>
      <div className={styles.card}>
        <div className={styles.wrapper}>
          <div className={styles.card_img}>
            <Image
              src={props.images}
              alt="Product Image"
              className={styles.image}
            ></Image>
          </div>

          <div className={styles.cardInfo}>
            <div className={styles.label}>
              {labels.slice(0, 2).map((label, i) => (
                <div key={i} className={styles.label_item}>
                  {label}
                </div>
              ))}
            </div>
            <h1>{productName}</h1>
            <p className={styles.date_}>
              {description.substring(0, 70) + " ..."}
            </p>
            <div className={styles.action}>
              <div className={styles.priceGroup}>
                <p className={styles.price}>{price}</p>
              </div>
              <div className={styles.cart}>
                <svg
                  className={styles.outCart}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 64 64"
                >
                  <path d="M2 6h10l10 40h32l8-24H16"></path>
                  <circle cx="23" cy="54" r="4"></circle>
                  <circle cx="49" cy="54" r="4"></circle>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
}
