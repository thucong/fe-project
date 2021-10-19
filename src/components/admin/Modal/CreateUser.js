import React, { useState, useEffect } from "react";
import { Button, DatePicker, Drawer, Spin } from "antd";
import moment, { Moment } from "moment";
import axios from "axios";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import styles from "./CreateUser.module.css";
import "react-notifications/lib/notifications.css";

const CreateUser = (props) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [dob, setDob] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("admin");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [cfPassword, setCfPassword] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    props.isShow || props.isUpdate ? fillData() : initValue();
  }, [props.isShow, props.isUpdate]);

  const initValue = () => {
    setDob(moment());
  };

  const fillData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://team-project-be-dev.herokuapp.com/api/users",
        {
          params: {
            id: `${props.propsUser}`,
          },
          headers: {
            authorization:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTU2ZDAzN2JiY2UyYzgwM2ZkMThmMWEiLCJuYW1lIjoidGVzdGFkbWluMSIsImVtYWlsIjoibWljaGFlbDQyNkBlYXJ0aGxpbmsubmV0IiwicGFzc3dvcmQiOiJ0ZXN0cGFzczEiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2MzQ1MjIwMTEsImV4cCI6MTYzNDYwODQxMX0.842ZXgtL3YH8xdEDICVP6lWdz7eU9bzZiWD6IwgA7oo",
          },
        }
      );
      let user = response.data;
      setFullName(user.fullName);
      setEmail(user.email);
      setUsername(user.userName);
      setDob(user.dateofbirth);
      setPhone(user.phoneNumber);
      setRole(user.role);
      setAddress(user.address);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(true);
    }
  };

  const onClose = () => {
    props.setVisible(false);
    props.setIsShow(null);
    props.setIsUpdate(null);
    setFullName("");
    setEmail("");
    setUsername("");
    setDob("");
    setPhone("");
    setRole("admin");
    setAddress("");
    setPassword("");
    setCfPassword("");
  };

  const updateValue = (event, type) => {
    if (type === "fullname") {
      setFullName(event.target.value);
    } else if (type === "email") {
      setEmail(event.target.value);
    } else if (type === "username") {
      setUsername(event.target.value);
    } else if (type === "password") {
      setPassword(event.target.value);
    } else if (type === "cfpassword") {
      setCfPassword(event.target.value);
    } else if (type === "phone") {
      setPhone(event.target.value);
    } else if (type === "role") {
      setRole(event.target.value);
    } else if (type === "address") {
      setAddress(event.target.value);
    } else if (type === "date") {
      //prettier-ignore
      let dateofbirth =
        (new Date(event._d).getMonth() + 1) + "/" + new Date(event._d).getDate() + "/" + new Date(event._d).getFullYear();
      setDob(dateofbirth);
    }
  };

  const handleAddUser = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        "https://team-project-be-dev.herokuapp.com/api/users",
        {
          userName: `${username}`,
          fullName: `${fullName}`,
          password: `${password}`,
          phoneNumber: `${phone}`,
          email: `${email}`,
          address: `${address}`,
          dateofbirth: `${dob}`,
          role: `${role}`,
        },
        {
          headers: {
            authorization:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTU2ZDAzN2JiY2UyYzgwM2ZkMThmMWEiLCJuYW1lIjoidGVzdGFkbWluMSIsImVtYWlsIjoibWljaGFlbDQyNkBlYXJ0aGxpbmsubmV0IiwicGFzc3dvcmQiOiJ0ZXN0cGFzczEiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2MzQ1MjIwMTEsImV4cCI6MTYzNDYwODQxMX0.842ZXgtL3YH8xdEDICVP6lWdz7eU9bzZiWD6IwgA7oo",
          },
        }
      );
      NotificationManager.success(response.data.message, "Notification", 2000);
      onClose();
      props.updateUser();
      setLoading(false);
    } catch (err) {
      NotificationManager.error("Create user failed", "Notification", 2000);
      setLoading(false);
      console.log(err);
    }
  };

  const handleUpdateUser = async () => {
    setLoading(true);
    try {
      const response = await axios.put(
        `https://team-project-be-dev.herokuapp.com/api/users/${props.propsUser}`,
        {
          userName: `${username}`,
          fullName: `${fullName}`,
          phoneNumber: `${phone}`,
          email: `${email}`,
          address: `${address}`,
          dateofbirth: `${dob}`,
          role: `${role}`,
        },
        {
          headers: {
            authorization:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTU2ZDAzN2JiY2UyYzgwM2ZkMThmMWEiLCJuYW1lIjoidGVzdGFkbWluMSIsImVtYWlsIjoibWljaGFlbDQyNkBlYXJ0aGxpbmsubmV0IiwicGFzc3dvcmQiOiJ0ZXN0cGFzczEiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2MzQ1MjIwMTEsImV4cCI6MTYzNDYwODQxMX0.842ZXgtL3YH8xdEDICVP6lWdz7eU9bzZiWD6IwgA7oo",
          },
        }
      );
      NotificationManager.success(response.data.message, "Notification", 2000);
      onClose();
      props.updateUser();
      setLoading(false);
    } catch (err) {
      NotificationManager.error("Update user failed", "Notification", 2000);
      setLoading(false);
      console.log(err);
    }
  };
  return (
    <Drawer
      placement="right"
      title={props.modalTitle}
      width={"50%"}
      closable={false}
      onClose={onClose}
      visible={props.visible}
      forceRender={true}
    >
      <Spin tip="Loading..." spinning={loading}>
        <div className={styles.modalContainer}>
          <div className={styles.grid_container}>
            <div className={styles.grid_item}>
              <label className={styles.label}>
                Fullname
                <span className={styles.span}>*</span>
              </label>
              <input
                type="text"
                className={styles.input}
                placeholder="Type your fullname"
                value={fullName}
                disabled={props.isShow}
                onChange={(event) => updateValue(event, "fullname")}
              ></input>
            </div>
            <div className={styles.grid_item}>
              <label className={styles.label}>
                Email
                <span className={styles.span}>*</span>
              </label>
              <input
                type="text"
                className={styles.input}
                placeholder="Type your email"
                value={email}
                disabled={props.isShow}
                onChange={(event) => updateValue(event, "email")}
              ></input>
            </div>
          </div>
          <div className={styles.grid_item}>
            <label className={styles.label}>
              Username
              <span className={styles.span}>*</span>
            </label>
            <input
              type="text"
              className={styles.input_full}
              placeholder="Type your username"
              value={username}
              disabled={props.isShow || props.isUpdate}
              onChange={(event) => updateValue(event, "username")}
            ></input>
          </div>
          <div className={styles.grid_container}>
            <div className={styles.grid_item}>
              <label className={styles.label}>
                Password
                <span className={styles.span}>*</span>
              </label>
              <input
                type="password"
                className={styles.input}
                placeholder="Type your password"
                disabled={props.isShow || props.isUpdate}
                value={password}
                onChange={(event) => updateValue(event, "password")}
              ></input>
            </div>
            <div className={styles.grid_item}>
              <label className={styles.label}>
                Confirm Password
                <span className={styles.span}>*</span>
              </label>
              <input
                type="password"
                className={styles.input}
                placeholder="Type your confirm password"
                disabled={props.isShow || props.isUpdate}
                value={cfPassword}
                onChange={(event) => updateValue(event, "cfpassword")}
              ></input>
            </div>
          </div>
          <div className={styles.grid_item}>
            <label className={styles.label}>
              Date of birth
              <span className={styles.span}>*</span>
            </label>
            <DatePicker
              placeholder={"Choose your date of birth"}
              className={styles.datetime_picker}
              format={"DD-MM-YYYY"}
              value={moment(dob)}
              disabled={props.isShow}
              style={{
                fontSize: "2vh",
              }}
              onChange={(date, dateString) => updateValue(date, "date")}
            />
          </div>
          <div className={styles.grid_container}>
            <div className={styles.grid_item}>
              <label className={styles.label}>
                Phone number
                <span className={styles.span}>*</span>
              </label>
              <input
                type="text"
                className={styles.input}
                placeholder="Type your phone number"
                value={phone}
                disabled={props.isShow}
                onChange={(event) => updateValue(event, "phone")}
              ></input>
            </div>
            <div className={styles.grid_item}>
              <label className={styles.label}>
                Role
                <span className={styles.span}>*</span>
              </label>
              <select
                className={styles.input}
                disabled={props.isShow}
                value={role}
                onChange={(event) => updateValue(event, "role")}
              >
                <option value="customer">Customer</option>
                <option value="admin">Admin</option>
              </select>
            </div>
          </div>
          <div className={styles.grid_item}>
            <label className={styles.label}>
              Address
              <span className={styles.span}>*</span>
            </label>
            <input
              type="text"
              className={styles.input_full}
              placeholder="Type your address"
              value={address}
              disabled={props.isShow}
              onChange={(event) => updateValue(event, "address")}
            ></input>
          </div>
        </div>
        <div className={styles.button_container}>
          <div className={styles.button}>
            <button
              type="button"
              className={styles.cancel_button}
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
          {!props.isShow && !props.isUpdate ? (
            <div className={styles.button}>
              <button
                type="submit"
                className={styles.add_button}
                onClick={handleAddUser}
              >
                Add
              </button>
            </div>
          ) : null}
          {!props.isShow && props.isUpdate ? (
            <div className={styles.button}>
              <button
                type="submit"
                className={styles.edit_button}
                onClick={handleUpdateUser}
              >
                Edit
              </button>
            </div>
          ) : null}
        </div>
        <NotificationContainer />
      </Spin>
    </Drawer>
  );
};

export default CreateUser;
