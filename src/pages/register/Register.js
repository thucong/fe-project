import styles from "./Register.module.css";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
const Register = () => {
  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <form className={styles.login_content}>
          <h4 className={styles.title}>Register</h4>
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
            <span className={styles.input_label}>Email</span>
            <div className={styles.div}>
              <MailOutlined className={styles.icon}></MailOutlined>
              <input
                type="text"
                className={styles.input}
                placeholder="Type your email"
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
          <div className={styles.wrap_input}>
            <span className={styles.input_label}>Confirm password</span>
            <div className={styles.div}>
              <LockOutlined className={styles.icon}></LockOutlined>
              <input
                type="password"
                className={styles.input}
                placeholder="Confirm password"
              ></input>
            </div>
          </div>

          <button className={styles.btn_login}>Register</button>

          <div className={styles.new_cus}>
            <div className={styles.sign_up}>
              <h5> Already have an account?</h5>
              <a href="#">Sign In</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
