import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import DataTable from "../components/DataTable";

export default function CategoriesPage() {
  const columns = ["Image", "Name", "Created", "Updated"]
  const rows = ["name", "createdAt", "updatedAt"]

  return (
    <Layout>
      <div className="flex flex-col w-full px-16">
        <div className="w-full flex items-center justify-between pt-14 pb-4 px-5">
          <h3 className="text-2xl font-semibold">Categories</h3>
          <Link to="/create-category">
            <button className="bg-lime-500 px-5 py-2 text-white font-bold text-xs shadow-md rounded-sm">CREATE</button>
          </Link>
        </div>
        <DataTable
          columns={columns}
          rows={rows}
          url={"categories/list"}
          tag={"categories"}
        />
      </div>
    </Layout>
  )
}
