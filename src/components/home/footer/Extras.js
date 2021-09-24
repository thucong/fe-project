import styles from "./Footer.module.css";

const Extras = () => {
  return (
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
  );
};
export default Extras;
