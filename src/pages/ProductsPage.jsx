import Layout from "../components/Layout";
import { useFetch } from "../hooks/useFetch";

export default function ProductsPage() {
  const { data } = useFetch("products/list")
  return (
    <Layout>
      <div className="flex flex-col w-full px-32">
        <div className="w-full flex items-center justify-between pt-14 pb-4 px-5">
          <h3 className="text-2xl font-semibold">Products</h3>
          <button className="bg-lime-500 px-5 py-2 text-white font-bold text-xs shadow-md rounded-sm">CREATE</button>
        </div>
        <hr />
        <div className="w-full mt-5">
          <table className="w-full shadow-md">
            <thead>
              <tr>
                <th className="text-center py-5">Image</th>
                <th className="text-center py-5">Title</th>
                <th className="text-center py-5">Price</th>
                <th className="text-center py-5">Quantity</th>
                <th className="text-center py-5">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((product, index) => (
                <tr key={product._id} className={index % 2 === 0 ? "bg-[#e2e6eb]" : "bg-[#d5d8ddb9]"}>
                  <td className="flex justify-center items-center py-1 my-2">
                    <img className="w-14 object-cover self-center" src={product.images[0]} alt="" />
                  </td>
                  <td className="text-center py-1 my-2 text-sm font-semibold">{product.title}</td>
                  <td className="text-center py-1 my-2 text-sm font-semibold">{product.price}</td>
                  <td className="text-center py-1 my-2 text-sm font-semibold">{product.quantity}</td>
                  <td className="text-center py-1 my-2 text-xs font-semibold text-slate-100">
                    <button className="px-4 py-2 mr-1 bg-yellow-400 rounded-sm">Edit</button>
                    <button className="px-4 py-2 ml-1 bg-red-400 rounded-sm">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-7 flex justify-between items-center">
            <span className="text-slate-700">Showing {data.length} elements from {data.length}</span>
            <div className="flex items-center gap-5 shadow-md rounded-full">
              <button className="py-2 px-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
              </button>
              <button className="py-2 px-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
