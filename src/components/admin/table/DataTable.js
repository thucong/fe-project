import "antd/dist/antd.css";
import { Button, Modal, Pagination, Spin } from "antd";
import {
  SearchOutlined,
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import styles from "./DataTable.module.css";
import "react-notifications/lib/notifications.css";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import { useState, useEffect } from "react";
import axios from "axios";
import CreateUser from "../Modal/CreateUser";

function DataTable(props) {
  const [deleteShow, setDeleteShow] = useState(false);
  const [createUserShow, setCreateUserShow] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [userID, setUserID] = useState("");
  const [data, setData] = useState(props.data);
  const [dataTmp, setDataTmp] = useState(props.data);
  const [page, setPage] = useState(1);
  const [isShow, setIsShow] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [propsUser, setPropsUser] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    updateUser();
  }, []);

  const updateUser = async () => {
    setLoading(true);

    try {
      const response = await axios.get(
        "https://team-project-be-dev.herokuapp.com/api/users",
        {
          headers: {
            authorization:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTU2ZDAzN2JiY2UyYzgwM2ZkMThmMWEiLCJuYW1lIjoidGVzdGFkbWluMSIsImVtYWlsIjoibWljaGFlbDQyNkBlYXJ0aGxpbmsubmV0IiwicGFzc3dvcmQiOiJ0ZXN0cGFzczEiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2MzQ2MDk2NjcsImV4cCI6MTYzNDY5NjA2N30.zR_Vy_albUmKkq-TsJSi21BpCmh-kugPf7-qCuLYspA",
          },
        }
      );
      let arr = response.data.reverse();
      await setData(arr);
      await setDataTmp(arr);
      setLoading(false);
    } catch (err) {
      setLoading(false);

      console.log(err);
    }
  };

  const handleOk = async () => {
    setLoading(true);

    try {
      const response = await axios.delete(
        `https://team-project-be-dev.herokuapp.com/api/users/${userID}`,
        {
          headers: {
            authorization:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTU2ZDAzN2JiY2UyYzgwM2ZkMThmMWEiLCJuYW1lIjoidGVzdGFkbWluMSIsImVtYWlsIjoibWljaGFlbDQyNkBlYXJ0aGxpbmsubmV0IiwicGFzc3dvcmQiOiJ0ZXN0cGFzczEiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2MzQ2MDk2NjcsImV4cCI6MTYzNDY5NjA2N30.zR_Vy_albUmKkq-TsJSi21BpCmh-kugPf7-qCuLYspA",
          },
        }
      );
      NotificationManager.success(response.data.message, "Notification", 2000);
      setLoading(false);
    } catch (err) {
      NotificationManager.error("Delete user failed", "Notification", 2000);
      setLoading(false);

      console.log(err);
    }
    await updateUser();
    setDeleteShow(false);
  };

  const handleCancel = () => {
    setDeleteShow(false);
  };

  const onChange = (page) => {
    setPage(page);
  };

  const handleSearch = async (e) => {
    setPage(1);
    const key = e.target.value;
    if (!key) {
      setData(dataTmp);
    } else {
      const tmp = dataTmp?.filter(
        (user) =>
          user.userName.includes(key) ||
          user.fullName.includes(key) ||
          user.phoneNumber.includes(key)
      );
      setData(tmp);
    }
  };

  const handleTableRowClick = () => {
    setIsUpdate(false);
    setIsShow(true);
    setModalTitle("Show user");
    setCreateUserShow(true);
  };
  return (
    <Spin tip="Loading..." spinning={loading}>
      <div className={styles.table_container}>
        <h2 className={styles.title}>LIST USER</h2>
        <div className={styles.search_add}>
          <div className={styles.input_form}>
            <SearchOutlined className={styles.search_icon} />
            <input
              placeholder="Search by fullname/username/phone"
              onChange={handleSearch}
            ></input>
          </div>
          <button
            className={styles.add_button}
            onClick={() => {
              setCreateUserShow(true);
              setPropsUser(null);
              setIsShow(false);
              setIsUpdate(false);
              setModalTitle("Add new user");
            }}
          >
            <PlusOutlined className={styles.add_icon} />
          </button>
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
              {data &&
                data.map((user, i) =>
                  page * 6 - 6 <= i && i <= page * 6 - 1 ? (
                    <tr key={i} className={styles.table_row}>
                      <td
                        onClick={() => {
                          setPropsUser(user._id);
                          handleTableRowClick();
                        }}
                      >
                        {i + 1}
                      </td>
                      <td
                        onClick={() => {
                          setPropsUser(user._id);
                          handleTableRowClick();
                        }}
                      >
                        {user.userName}
                      </td>
                      <td
                        onClick={() => {
                          setPropsUser(user._id);
                          handleTableRowClick();
                        }}
                      >
                        {user.fullName}
                      </td>
                      <td
                        onClick={() => {
                          setPropsUser(user._id);
                          handleTableRowClick();
                        }}
                      >
                        {user.phoneNumber}
                      </td>
                      <td
                        onClick={() => {
                          setPropsUser(user._id);
                          handleTableRowClick();
                        }}
                      >
                        {new Date(user.dateofbirth).getDate() +
                          "/" +
                          (new Date(user.dateofbirth).getMonth() + 1) +
                          "/" +
                          new Date(user.dateofbirth).getFullYear()}
                      </td>
                      <td
                        onClick={() => {
                          setPropsUser(user._id);
                          handleTableRowClick();
                        }}
                      >
                        {user.role}
                      </td>
                      <td>
                        <button
                          className={styles.edit_button}
                          onClick={() => {
                            setPropsUser(user._id);
                            setIsUpdate(true);
                            setModalTitle("Update user");
                            setCreateUserShow(true);
                          }}
                        >
                          <EditOutlined />
                        </button>
                      </td>
                      <td>
                        <button
                          className={styles.delete_button}
                          onClick={() => {
                            setDeleteShow(true);
                            setUserID(user._id);
                          }}
                        >
                          <DeleteOutlined />
                        </button>
                      </td>
                    </tr>
                  ) : null
                )}
            </tbody>
          </table>
        </div>
        <div className={styles.bottom_page}>
          <Pagination
            showSizeChanger={false}
            showQuickJumper
            defaultCurrent={1}
            pageSize={6}
            total={data ? data.length : 500}
            onChange={onChange}
            current={page}
            style={{ paddingBottom: "20px" }}
          />
        </div>
        <Modal
          title="Notification"
          visible={deleteShow}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          Do you want to delete this user?
        </Modal>
        <CreateUser
          visible={createUserShow}
          setVisible={setCreateUserShow}
          modalTitle={modalTitle}
          isShow={isShow}
          isUpdate={isUpdate}
          propsUser={propsUser}
          setIsShow={setIsShow}
          updateUser={updateUser}
          setIsUpdate={setIsUpdate}
        ></CreateUser>
      </div>
    </Spin>
  );
}

export default DataTable;
