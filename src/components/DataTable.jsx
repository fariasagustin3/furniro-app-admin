import { Link } from "react-router-dom"
import { Pagination } from "./Pagination"
import { useState } from "react"
import { useFetch } from "../hooks/useFetch"

const DataTable = ({ columns, rows, url, tag }) => {
  const [page, setPage] = useState(1)
  const { data } = useFetch(url, page)
  
  const previousPage = () => {
    setPage(page - 1)
  }

  const nextPage = () => {
    setPage(page + 1)
  }

  return (
    <div className="pb-14">
      <table className="w-full shadow-md">
        <thead>
          <tr className='border-b-[1px] border-b-gray-300  '>
            {columns.map((column) => (
              <th key={column} className="text-center py-7 font-semibold text-md">{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data[tag]?.map((item, index) => (
            <tr key={index} className='border-b-[1px] border-b-gray-300'>
              {columns.includes("Image") && (
                <td>
                  <div className="flex items-center justify-center w-full h-full">
                    <img src={item.images[0]} className="w-10 h-10 object-cover" alt="" />
                  </div>
                </td>
              )}
              {rows.map((row) => (
                <td key={row} className='text-sm text-center py-5'>{item[row]}</td>
              ))}
              <td key={index} className='text-center py-5'>
                <Link to={`/edit-product/${item._id}`}>
                  <button className="bg-yellow-400 text-slate-100 px-4 py-1 rounded-sm text-sm mr-1">Edit</button>
                </Link>
                <button className="bg-red-400 text-slate-100 px-4 py-1 rounded-sm text-sm ml-1">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        page={page}
        previousPage={previousPage}
        nextPage={nextPage}
        totalPages={data.totalPages}
        totalProducts={data.totalProducts}
        productsPerPage={data[tag]?.length}
      />
    </div>
  )
}

export default DataTable