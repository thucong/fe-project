import styles from "./Login.module.css";
import {
  UserOutlined,
  LockOutlined,
  FacebookOutlined,
  GoogleOutlined,
} from "@ant-design/icons";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <form className={styles.login_content}>
          <h4 className={styles.title}>Login</h4>
          <div className={styles.wrap_input}>
            <span className={styles.input_label}>Username</span>
            <div className={styles.div}>
              <UserOutlined className={styles.icon}></UserOutlined>
              <input
                type="text"
                className={styles.input}
                placeholder="Type your username"
              ></input>
            </div>
          </div>

          <div className={styles.wrap_input}>
            <span className={styles.input_label}>Password</span>
            <div className={styles.div}>
              <LockOutlined className={styles.icon}></LockOutlined>
              <input
                type="password"
                className={styles.input}
                placeholder="Type your password"
              ></input>
            </div>
          </div>

          <div className={styles.forgot_password}>
            <a href="#">Forgot password?</a>
          </div>

          <button className={styles.btn_login}>Login</button>

          <div className={styles.center}>
            <h5> Or Sign In Using</h5>
          </div>
          <button className={styles.btn_google}>
            <GoogleOutlined />
          </button>
          <button className={styles.btn_facebook}>
            <FontAwesomeIcon icon={faFacebookF} />
          </button>

          <div className={styles.new_cus}>
            <div className={styles.sign_up}>
              <h5> New customer?</h5>
              <a href="#">Sign Up</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
