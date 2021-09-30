import "antd/dist/antd.css";
import { Button } from "antd";
import {
  LeftOutlined,
  RightOutlined,
  SearchOutlined,
  PlusOutlined,
  EyeOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import styles from "./DataTable.module.css";
import { useState } from "react";
import AddModal from "../Modal/AddModal";
import EditModal from "../Modal/EditModal";
import DeleteModal from "../Modal/DeleteModal";

function DataTable(props) {
  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const closeAdd = () => {
    setShowAdd(false);
  };
  const openAdd = () => {
    setShowAdd(true);
    setShowEdit(false);
    setShowDelete(false);
  };
  const openEdit = () => {
    setShowEdit(true);
    setShowAdd(false);
    setShowDelete(false);
  };
  const closeEdit = () => {
    setShowEdit(false);
  };
  const openDelete = () => {
    setShowDelete(true);
    setShowEdit(false);
    setShowAdd(false);
  };
  const closeDelete = () => {
    setShowDelete(false);
  };
  return (
    <div className={styles.table_container}>
      <h2 className={styles.title}>LIST USER</h2>
      <div className={styles.search_add}>
        <div className={styles.input_form}>
          <SearchOutlined className={styles.search_icon} />
          <input placeholder="Search by fullname/username/phone"></input>
        </div>
        <Button className={styles.add_button} onClick={openAdd}>
          <PlusOutlined className={styles.add_icon} />
        </Button>
      </div>
      <div className={styles.vh_container}>
        <table cellSpacing="0" className={styles.table}>
          <thead>
            <tr>
              <th className={styles.number}>No.</th>
              <th>{props.headers[0]}</th>
              <th>{props.headers[1]}</th>
              <th>{props.headers[2]}</th>
              <th>{props.headers[3]}</th>
              <th>{props.headers[4]}</th>
              <th colSpan="2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {props.data.map((user, i) => (
              <tr key={i} className={styles.table_row}>
                <td>1</td>
                <td>{user.userName}</td>
                <td>{user.fullName}</td>
                <td>{user.phoneNumber}</td>
                <td>{user.dateofbirth}</td>
                <td>{user.role}</td>
                <td>
                  <Button className={styles.edit_button} onClick={openEdit}>
                    <EditOutlined />
                  </Button>
                </td>
                <td>
                  <Button className={styles.delete_button} onClick={openDelete}>
                    <DeleteOutlined />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={styles.bottom_page}>
        <h3>Showing 6 of 50</h3>
        <div className={styles.pagination}>
          <h4>1 - 6</h4>
          <Button className={styles.go_left_button}>
            <LeftOutlined className={styles.icon} />
          </Button>
          <Button className={styles.go_right_button}>
            <RightOutlined className={styles.icon} />
          </Button>
        </div>
      </div>
      <div className={`${styles.modal}  ${showAdd ? styles.is_show : ""}`}>
        <AddModal
          showAdd={showAdd}
          closeAdd={closeAdd}
          headers={[
            "Username",
            "Fullname",
            "Password",
            "Confirm password",
            "Phone",
            "Gmail",
            "Address",
            "Date of Birth",
            "Role",
          ]}
        />
      </div>
      <div className={`${styles.modal}  ${showEdit ? styles.is_show : ""}`}>
        <EditModal
          showEdit={showEdit}
          closeEdit={closeEdit}
          headers={[
            "Username",
            "Fullname",
            "Password",
            "Confirm password",
            "Phone",
            "Gmail",
            "Address",
            "Date of Birth",
            "Role",
          ]}
        />
      </div>
      <div className={`${styles.modal}  ${showDelete ? styles.is_show : ""}`}>
        <DeleteModal showDelete={showDelete} closeDelete={closeDelete} />
      </div>
    </div>
  );
}

export default DataTable;
