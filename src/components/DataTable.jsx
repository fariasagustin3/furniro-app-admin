import { Link } from "react-router-dom"
import { Pagination } from "./Pagination"
import { useState } from "react"
import { useFetch } from "../hooks/useFetch"
import AlertDeleteDialog from "./AlertDeleteDialog"
import axios from "axios"
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

const DataTable = ({ columns, rows, url, tag, editRoute }) => {
  const [page, setPage] = useState(1)
  const { data } = useFetch(url, page)
  const [open, setOpen] = useState(false)
  const [id, setId] = useState("")

  const previousPage = () => {
    setPage(page - 1)
  }

  const nextPage = () => {
    setPage(page + 1)
  }

  const openDialog = (id) => {
    setOpen(true)
    setId(id)
  }

  const closeModal = (value) => {
    setOpen(value)
    setId("")
  }

  const deleteElement = async (value) => {
    if (value === false) {
      setOpen(false)
      console.log(editRoute)
    } else {
      try {
        await axios.delete(`http://localhost:3001/${tag}/${id}/delete`, {
          headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFndXN0aW4iLCJmdWxsTmFtZSI6IkFndXN0aW4iLCJlbWFpbCI6ImFndXNAZ21haWwuY29tIiwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNzE0Njg0MTI5fQ.KML8tAJESr1ovnvP1BpmJ1ABe6vwAoVvBGXE939VFx4"
          }
        })
        setOpen(false)
        toast.success("Deleted Successfully")
        setTimeout(() => {
          window.location.reload()
        }, 2000)
      } catch (err) {
        console.log(err)
        setOpen(false)
        toast.error("Something went wrong.")
      }

    }
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
                    <img src={item.image || item.images[0]} className="w-10 h-10 object-cover" alt="" />
                  </div>
                </td>
              )}
              {rows?.map((row) => (
                <td key={row} className='text-sm text-center py-5'>
                  {item[row].toString()}
                </td>
              ))}
              {tag !== "orders" && (

                <td key={index} className='text-center py-5'>
                  <Link to={`${editRoute}/${item._id}`}>
                    <button className="bg-yellow-400 text-slate-100 px-4 py-1 rounded-sm text-sm mr-1">Edit</button>
                  </Link>
                  <button onClick={() => openDialog(item._id)} className="bg-red-400 text-slate-100 px-4 py-1 rounded-sm text-sm ml-1">Delete</button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        page={page}
        previousPage={previousPage}
        nextPage={nextPage}
        totalPages={data.totalPages}
        totalItems={data.total}
        itemsPerPage={data[tag]?.length}
      />
      {open && (
        <AlertDeleteDialog open={open} onClose={closeModal} onDelete={deleteElement} />
      )}
      <ToastContainer />
    </div>
  )
}

export default DataTable