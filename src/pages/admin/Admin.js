import Layout from "../../components/admin/layout/Layout";
import DataTable from "../../components/admin/table/DataTable";

const Admin = () => {
  return (
    <div>
      <Layout>
        <DataTable
          headers={["Username", "Fullname", "Phone", "Date of birth", "Role"]}
          data={[
            {
              _id: "61444da265c04ef8d5d91e0f",
              userName: "UpdateUser",
              fullName: "UpdateUser",
              phoneNumber: "123456789",
              email: "conganhtest7@gmail.com",
              password: "UpdateUser",
              address: "",
              dateofbirth: "06/04/1999",
              role: "customer",
              activated: false,
              createdAt: "2021-09-17T08:11:14.804Z",
              updatedAt: "2021-09-20T03:23:58.062Z",
              __v: 0,
            },
            {
              _id: "614451bba86f933aac85eb0f",
              userName: "SignUp3",
              fullName: "SignUp3",
              phoneNumber: "signup1",
              email: "congtran24499@gmail.com",
              password:
                "$2b$10$N.ntFZwsgNaSx6FqO9OuQ.PN/maTLi/ypM4Vow2zxj5oRMw4jxHRS",
              address: "signup1",
              dateofbirth: "06/04/1999",
              role: "admin",
              activated: false,
              createdAt: "2021-09-17T08:28:43.109Z",
              updatedAt: "2021-09-17T08:28:43.109Z",
              __v: 0,
            },
            {
              _id: "614451bba86f933aac85eb0f",
              userName: "SignUp3",
              fullName: "SignUp3",
              phoneNumber: "signup1",
              email: "congtran24499@gmail.com",
              password:
                "$2b$10$N.ntFZwsgNaSx6FqO9OuQ.PN/maTLi/ypM4Vow2zxj5oRMw4jxHRS",
              address: "signup1",
              dateofbirth: "06/04/1999",
              role: "admin",
              activated: false,
              createdAt: "2021-09-17T08:28:43.109Z",
              updatedAt: "2021-09-17T08:28:43.109Z",
              __v: 0,
            },
            {
              _id: "614451bba86f933aac85eb0f",
              userName: "SignUp3",
              fullName: "SignUp3",
              phoneNumber: "signup1",
              email: "congtran24499@gmail.com",
              password:
                "$2b$10$N.ntFZwsgNaSx6FqO9OuQ.PN/maTLi/ypM4Vow2zxj5oRMw4jxHRS",
              address: "signup1",
              dateofbirth: "06/04/1999",
              role: "admin",
              activated: false,
              createdAt: "2021-09-17T08:28:43.109Z",
              updatedAt: "2021-09-17T08:28:43.109Z",
              __v: 0,
            },
            {
              _id: "614451bba86f933aac85eb0f",
              userName: "SignUp3",
              fullName: "SignUp3",
              phoneNumber: "signup1",
              email: "congtran24499@gmail.com",
              password:
                "$2b$10$N.ntFZwsgNaSx6FqO9OuQ.PN/maTLi/ypM4Vow2zxj5oRMw4jxHRS",
              address: "signup1",
              dateofbirth: "06/04/1999",
              role: "admin",
              activated: false,
              createdAt: "2021-09-17T08:28:43.109Z",
              updatedAt: "2021-09-17T08:28:43.109Z",
              __v: 0,
            },
            {
              _id: "614451bba86f933aac85eb0f",
              userName: "SignUp3",
              fullName: "SignUp3",
              phoneNumber: "signup1",
              email: "congtran24499@gmail.com",
              password:
                "$2b$10$N.ntFZwsgNaSx6FqO9OuQ.PN/maTLi/ypM4Vow2zxj5oRMw4jxHRS",
              address: "signup1",
              dateofbirth: "06/04/1999",
              role: "admin",
              activated: false,
              createdAt: "2021-09-17T08:28:43.109Z",
              updatedAt: "2021-09-17T08:28:43.109Z",
              __v: 0,
            },
          ]}
        ></DataTable>
      </Layout>
    </div>
  );
};

export default Admin;
