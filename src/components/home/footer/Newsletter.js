import styles from "./Footer.module.css";
import {
  SendOutlined,
  TwitterOutlined,
  YoutubeOutlined,
  GooglePlusOutlined,
} from "@ant-design/icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRss } from "@fortawesome/free-solid-svg-icons";

const Newsletter = () => {
  return (
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
  );
};
export default Newsletter;
