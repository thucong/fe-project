import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";

function HeaderTop(props) {
  const [hiddenAccount, setHiddenAccount] = useState(true);
  const [hiddenCart, setHiddenCart] = useState(true);
  let timer = setTimeout(() => {
    setHiddenAccount(true);
    setHiddenCart(true);
  }, 3000);
  useEffect(() => {
    return () => {
      clearTimeout(timer);
    };
  }, [hiddenCart, hiddenAccount, timer]);
  return (
    <div className="header_container">
      <div className={styles.container}>
        <div className={styles.header_top}>
          <div className={styles.header_logo}>
            <div className={styles.logo}></div>
          </div>
          <div className={styles.header_search}>
            <div className={styles.search_toggle}>
              <div>
                <input
                  type="text"
                  className={styles.input_lg}
                  name="search"
                  placeholder="Search Products Here"
                />
                <span className={styles.input_group_btn}>
                  <button type="button" className={styles.btn_lg}>
                    Search
                  </button>
                </span>
              </div>
            </div>
          </div>
          <div className={styles.header_social}>
            <div className={styles.header_user}>
              <a
                className={styles.user_outline}
                onClick={() => {
                  setHiddenCart(true);
                  setHiddenAccount(!hiddenAccount);
                }}
              ></a>
              <ul
                className={
                  hiddenAccount === true
                    ? `${styles.myaccount_menu} + " " + ${styles.hidden}`
                    : styles.myaccount_menu
                }
              >
                <li>
                  <a>Register</a>
                </li>
                <li>
                  <a>Register</a>
                </li>
                <li>
                  <a>Register</a>
                </li>
                <li>
                  <a>Register</a>
                </li>
              </ul>
            </div>
            <div className={styles.header_cart}>
              <span
                className={styles.cart_heading}
                onClick={() => {
                  setHiddenCart(!hiddenCart);
                  setHiddenAccount(true);
                }}
              >
                cart
              </span>
              <button type="button" className={styles.dropdown_toggle}>
                <span className={styles.cart_quantity}>0</span>
              </button>
              <ul
                className={
                  hiddenCart === true
                    ? `${styles.cart_menu} + " " + ${styles.hidden}`
                    : styles.cart_menu
                }
              >
                <li>
                  <p className={styles.text_center}>
                    Your shopping cart is empty!
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.header_bottom}></div>
      </div>
    </div>
  );
}

export default HeaderTop;
