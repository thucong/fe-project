import Layout from "../../components/admin/layout/Layout";
import DataTable from "../../components/admin/table/DataTable";
import { getCarts } from "../../services/cartService";
const Orders = (orders) => {
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
  const orders = await getCarts();
  return {
    props: {
      orders,
    },
  };
};

export default Orders;
