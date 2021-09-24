import styles from "./Footer.module.css";
import Image from "next/image";
import visa from "../../../img/visa.jpg";
import mastercard from "../../../img/mastercard.jpg";
import paypal from "../../../img/paypal.jpg";
import carte from "../../../img/carte_bleue.jpg";
import express from "../../../img/american_express.jpg";

const BottomFooter = () => {
  return (
    <div className={styles.bottom_footer}>
      <div className={styles.p}>
        <p>
          Powered by{" "}
          <a href="#" className={styles.name}>
            Team ReactJS
          </a>{" "}
          - Store &copy; 2021
        </p>
      </div>
      <div className={styles.img_footer}>
        <span className={styles.img}>
          <Image src={visa} width={50} height={30} />
        </span>
        <span className={styles.img}>
          <Image src={mastercard} width={50} height={30} />
        </span>
        <span className={styles.img}>
          <Image src={paypal} width={50} height={30} />
        </span>
        <span className={styles.img}>
          <Image src={carte} width={50} height={30} />
        </span>
        <span className={styles.img}>
          <Image src={express} width={50} height={30} />
        </span>
      </div>
    </div>
  );
};
export default BottomFooter;
