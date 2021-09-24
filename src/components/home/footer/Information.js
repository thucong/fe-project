import styles from "./Footer.module.css";

const Information = () => {
  return (
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
  );
};
export default Information;
