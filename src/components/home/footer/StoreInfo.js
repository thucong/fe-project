import {
  faEnvelope,
  faMapMarkedAlt,
  faPhoneAlt,
  faRss,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Footer.module.css";

const StoreInfo = () => {
  return (
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
  );
};
export default StoreInfo;
