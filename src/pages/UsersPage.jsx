import { Link } from "react-router-dom";
import DataTable from "../components/DataTable";
import Layout from "../components/Layout";

export default function UsersPage() {
  const columns = ["Username", "Full Name", "Email", "Admin"]
  const rows = ["username", "fullName", "email", "isAdmin"]

  return (
    <Layout>
      <div className="flex flex-col w-full px-16">
        <div className="w-full flex items-center justify-between pt-14 pb-4 px-5">
          <h3 className="text-2xl font-semibold">Users</h3>
        </div>
        <DataTable
          columns={columns}
          rows={rows}
          url={"users/list"}
          tag={"users"}
          editRoute={"/edit-user"}
        />
      </div>
    </Layout>
  )
}
