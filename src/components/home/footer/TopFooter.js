import Extras from "./Extras";
import styles from "./Footer.module.css";
import Information from "./Information";
import Newsletter from "./Newsletter";
import StoreInfo from "./StoreInfo";

const TopFooter = () => {
  return (
    <div className={styles.footer}>
      <StoreInfo />
      <Information />
      <Extras />
      <Newsletter />
    </div>
  );
};
export default TopFooter;
