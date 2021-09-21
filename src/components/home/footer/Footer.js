import {
  faEnvelope,
  faMapMarkedAlt,
  faPhoneAlt,
  faRss,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Footer.module.css";
import {
  SendOutlined,
  TwitterOutlined,
  YoutubeOutlined,
  GooglePlusOutlined,
} from "@ant-design/icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import visa from "../../../img/visa.jpg";
import mastercard from "../../../img/mastercard.jpg";
import paypal from "../../../img/paypal.jpg";
import carte from "../../../img/carte_bleue.jpg";
import express from "../../../img/american_express.jpg";
const Footer = () => {
  return (
    <div>
      <div className={styles.footer}>
        <div className={styles.info}>
          <div className={styles.store_info}>
            <h5 className={styles.h5}>Store Information</h5>
            <hr className={styles.hr} /> <br />
            <ul className={styles.li}>
              <li>
                <FontAwesomeIcon icon={faMapMarkedAlt} className={styles.color} />
                <span className={styles.span}>Lien Chieu, Da Nang</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faPhoneAlt} className={styles.color} />
                <span className={styles.span}>000-000-0000</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faEnvelope} className={styles.color} />
                <span className={styles.span}>enclave@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.info}>
          <div className={styles.information}>
            <h5 className={styles.h5}>Information</h5>
            <hr className={styles.hr} /> <br />
            <ul className={styles.li}>
              <li>
                <a href="#" className={styles.a}>
                  About us
                </a>
              </li>
              <li>
                <a href="#" className={styles.a}>
                  Delivery Information
                </a>
              </li>
              <li>
                <a href="#" className={styles.a}>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className={styles.a}>
                  Terms & Conditons
                </a>
              </li>
              <li>
                <a href="#" className={styles.a}>
                  Site Map
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.info}>
          <div className={styles.extra}>
            <h5 className={styles.h5}>Extras</h5>
            <hr className={styles.hr} /> <br />
            <ul className={styles.li}>
              <li>
                <a href="#" className={styles.a}>
                  Brands
                </a>
              </li>
              <li>
                <a href="#" className={styles.a}>
                  Gift Certificates
                </a>
              </li>
              <li>
                <a href="#" className={styles.a}>
                  Affilitate
                </a>
              </li>
              <li>
                <a href="#" className={styles.a}>
                  Specials
                </a>
              </li>
              <li>
                <a href="#" className={styles.a}>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.info}>
          <div className={styles.letter}>
            <h5 className={styles.h5}>Newsletter</h5>
            <hr className={styles.hr} /> <br />
            <div className={styles.letter1}>
              <span>
                Subscribe to our latest newsletter to get news about special
                discounts
              </span>
              <form>
                <div className={styles.form}>
                  <input
                    type="email"
                    placeholder="Enter Your Email Address"
                    className={styles.input}
                  />
                  <SendOutlined className={styles.icon}></SendOutlined>
                </div>
              </form>
            </div>
            <div className={styles.list_social}>
              <ul className={styles.list}>
                <li className={styles.list1}>
                  <a href="#" className={styles.social}>
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                </li>
                <li className={styles.list1}>
                  <a href="#" className={styles.social}>
                    <TwitterOutlined />
                  </a>
                </li>
                <li className={styles.list1}>
                  <a href="#" className={styles.social}>
                    <YoutubeOutlined />
                  </a>
                </li>
                <li className={styles.list1}>
                  <a href="#" className={styles.social}>
                    <GooglePlusOutlined />
                  </a>
                </li>
                <li className={styles.list1}>
                  <a href="#" className={styles.social}>
                    <FontAwesomeIcon icon={faRss} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
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
    </div>
  );
};

export default Footer;
