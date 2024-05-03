import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import DataTable from "../components/DataTable";
import { useFetch } from "../hooks/useFetch";
import { useState } from "react";

export default function ProductsPage() {
  const columns = ["Image", "Title", "Price", "Quantity", "Actions"]
  const rows = ["title", "price", "quantity"] // no debe incluir images al menos de momento

  return (
    <Layout>
      <div className="flex flex-col w-full px-16">
        <div className="w-full flex items-center justify-between pt-14 pb-4 px-5">
          <h3 className="text-2xl font-semibold">Products</h3>
          <Link to="/create-product">
            <button className="bg-lime-500 px-5 py-2 text-white font-bold text-xs shadow-md rounded-sm">CREATE</button>
          </Link>
        </div>
        <DataTable
          columns={columns}
          rows={rows}
          url={"products/list"}
          tag={"products"}
        />
      </div>
    </Layout>
  )
}
