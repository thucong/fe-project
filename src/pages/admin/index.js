import Layout from "../../components/admin/layout/Layout";
import DataTable from "../../components/admin/table/DataTable";
import { getUsers } from "../../services/userService";
const Admin = (users) => {
  return (
    <div>
      <Layout>
        <DataTable
          headers={["Username", "Fullname", "Phone", "Date of birth", "Role"]}
          data={users.users}
        ></DataTable>
      </Layout>
    </div>
  );
};

export const getStaticProps = async () => {
  const users = await getUsers();
  return {
    props: {
      users,
    },
  };
};

export default Admin;
