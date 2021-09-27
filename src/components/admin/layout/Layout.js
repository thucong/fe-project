import { useState } from "react";
import {
  MenuOutlined,
  LineChartOutlined,
  TeamOutlined,
  UserOutlined,
  LogoutOutlined,
  ShopOutlined,
  UnorderedListOutlined,
  RightOutlined,
} from "@ant-design/icons";
import styles from "./Layout.module.css";
const Layout = ({ children }) => {
  const [showDrawer, setShowDrawer] = useState(true);

  const switchDrawer = () => {
    setShowDrawer(!showDrawer);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.left}>
          <div className={styles.logo}></div>
          <div className={styles.projectTitle}>Project name</div>
          <MenuOutlined className={styles.menu} onClick={switchDrawer} />
        </div>
        <div className={styles.avatar}>
          <div className={styles.welcome}>Welcome</div>
          <div className={styles.name}>Dave Tran</div>
          <div className={styles.ava}></div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={showDrawer ? styles.sideNavActive : styles.sideNav}>
          <p>CORE MODULES</p>
          <ul>
            <li>
              <div className={styles.menuItem}>
                <LineChartOutlined className={styles.menuIcon} />
                <div>Dashboard</div>
              </div>
              <div className={styles.menuItem}>
                <TeamOutlined className={styles.menuIcon} />
                <div>Users</div>
              </div>
              <div className={styles.menuItem}>
                <ShopOutlined className={styles.menuIcon} />
                <div>Products</div>
              </div>
              <div className={styles.menuItem}>
                <UnorderedListOutlined className={styles.menuIcon} />
                <div>Orders</div>
              </div>
              <div className={styles.menuItem}>
                <UserOutlined className={styles.menuIcon} />
                <div>Profile</div>
              </div>
              <div className={styles.menuItem}>
                <LogoutOutlined className={styles.menuIcon} />
                <div>Logout</div>
              </div>
            </li>
          </ul>
        </div>
        <div className={showDrawer ? styles.tableActive : styles.table}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
