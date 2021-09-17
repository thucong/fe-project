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
import Slide from "react-reveal/Slide";
import styles from "./Layout.module.css";
import Dashboard from "../dashboard/Dashboard";
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
          <div className={styles.linker}>
            <a className={styles.linkTitle}>Link 1</a>

            <RightOutlined className={styles.linkIcon} />
            <a className={styles.linkTitle}>Link 2</a>
            <RightOutlined className={styles.linkIcon} />
            <a className={styles.linkTitle}>Link 3</a>
          </div>
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
                <a href="#">Dashboard</a>
              </div>
              <div className={styles.menuItem}>
                <TeamOutlined className={styles.menuIcon} />
                <a href="#">Users</a>
              </div>
              <div className={styles.menuItem}>
                <ShopOutlined className={styles.menuIcon} />
                <a href="#">Products</a>
              </div>
              <div className={styles.menuItem}>
                <UnorderedListOutlined className={styles.menuIcon} />
                <a href="#">Orders</a>
              </div>
              <div className={styles.menuItem}>
                <UserOutlined className={styles.menuIcon} />
                <a href="#">Profile</a>
              </div>
              <div className={styles.menuItem}>
                <LogoutOutlined className={styles.menuIcon} />
                <a href="#">Logout</a>
              </div>
            </li>
          </ul>
        </div>
        <div className={showDrawer ? styles.tableActive : styles.table}>
          <Dashboard />
        </div>
      </div>
    </div>
  );
};

export default Layout;
