import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";
import Image from "next/image";
import flag from "../../../img/en-gb.jpg";
function HeaderBottom(props) {
  const [hiddenFlag, setHiddenFlag] = useState(true);
  const [hiddenCurr, setHiddenCurr] = useState(true);
  let timer = setTimeout(() => {
    setHiddenCurr(true);
    setHiddenFlag(true);
  }, 5000);
  useEffect(() => {
    return () => {
      clearTimeout(timer);
    };
  }, [hiddenCurr, hiddenFlag, timer]);
  return (
    <div className={styles.header_bottom}>
      <div className={styles.container}>
        <div className={styles.nav_container}>
          <div className={styles.nav_inner}>
            <div className={styles.main_menu}>
              <ul className={styles.nav_menu}>
                <li className={styles.nav_item}>
                  <a>item1</a>
                </li>
                <li className={styles.nav_item}>
                  <a>item2</a>
                </li>
                <li className={styles.nav_item}>
                  <a>item3</a>
                </li>
                <li className={styles.nav_item}>
                  <a>item4</a>
                </li>
                <li className={styles.nav_item}>
                  <a>item5</a>
                </li>
                <li className={styles.nav_item}>
                  <a>item6</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.nav_social}>
          <div className={styles.lang_curr}>
            <div className={styles.pull_left}>
              <div
                className={styles.btn_group}
                onClick={() => {
                  setHiddenFlag(!hiddenFlag);
                  setHiddenCurr(true);
                }}
              >
                <button className={styles.dropdown_toggle}>
                  <Image
                    src={flag}
                    width={17}
                    height={13}
                    className={styles.img_flag}
                    alt="flag"
                  />
                  <span className={styles.hidden}>Language</span>
                  &nbsp;
                  <i
                    className={styles.dropdown_icon}
                    style={{ transform: "rotate(-180deg)" }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                      <path d="M8 6.81l3.97 3.97a.75.75 0 0 0 1.06-1.06l-4.5-4.5a.75.75 0 0 0-1.06 0l-4.5 4.5a.75.75 0 0 0 1.06 1.06L8 6.81z"></path>
                    </svg>
                  </i>
                </button>
                <ul
                  className={
                    hiddenFlag === true
                      ? `${styles.language_menu} + " " + ${styles.hidden}`
                      : styles.language_menu
                  }
                >
                  <li>
                    <button
                      className={styles.language_select}
                      type="button"
                      name="en-gb"
                    >
                      <Image
                        src={flag}
                        width={17}
                        height={13}
                        className={styles.imgflag_item}
                        alt="flag"
                      />
                      <span className={styles.flag_name}>English</span>
                    </button>
                  </li>
                  <li>
                    <button
                      className={styles.language_select}
                      type="button"
                      name="en-gb"
                    >
                      <Image
                        src={flag}
                        width={17}
                        height={13}
                        className={styles.imgflag_item}
                        alt="flag"
                      />
                      <span className={styles.flag_name}>English</span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.pull_left}>
              <div
                className={styles.btn_group}
                onClick={() => {
                  setHiddenFlag(true);
                  setHiddenCurr(!hiddenCurr);
                }}
              >
                <button className={styles.dropdown_toggle}>
                  <strong>$</strong>
                  <span className={styles.hidden}>current</span>
                  &nbsp;
                  <i
                    className={styles.dropdown_icon}
                    style={{ transform: "rotate(-180deg)" }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                      <path d="M8 6.81l3.97 3.97a.75.75 0 0 0 1.06-1.06l-4.5-4.5a.75.75 0 0 0-1.06 0l-4.5 4.5a.75.75 0 0 0 1.06 1.06L8 6.81z"></path>
                    </svg>
                  </i>
                </button>
                <ul
                  className={
                    hiddenCurr === true
                      ? `${styles.currency_menu} + " " + ${styles.hidden}`
                      : styles.currency_menu
                  }
                >
                  <li>
                    <button
                      className={styles.currency_select}
                      type="button"
                      name="EUR"
                    >
                      € Euro
                    </button>
                  </li>
                  <li>
                    <button
                      className={styles.currency_select}
                      type="button"
                      name="GBP"
                    >
                      £ Pound Sterling
                    </button>
                  </li>
                  <li>
                    <button
                      className={styles.currency_select}
                      type="button"
                      name="USD"
                    >
                      $ US Dollar
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderBottom;
