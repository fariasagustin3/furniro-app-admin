import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import DataTable from "../components/DataTable";

export default function OrdersPage() {
  const columns = ["First Name", "Last Name", "Country", "Address", "Town", "Province", "Phone", "Status"]
  const rows = ["firstName", "lastName", "country", "address", "town", "province", "phone", "status"]

  return (
    <Layout>
      <div className="flex flex-col w-full px-16">
        <div className="w-full flex items-center justify-between pt-14 pb-4 px-5">
          <h3 className="text-2xl font-semibold">Orders</h3>
        </div>
        <DataTable
          columns={columns}
          rows={rows}
          url={"orders/list"}
          tag={"orders"}
          editRoute={"/edit-order"}
        />
      </div>
    </Layout>
  )
}
