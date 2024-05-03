import { useState } from "react"

export const Pagination = ({ page, previousPage, nextPage, totalPages, productsPerPage, totalProducts }) => {
  return (
    <div className="mt-7 flex justify-between items-center">
      <span className="text-slate-700">Showing {productsPerPage} elements from {totalProducts}</span>
      <div className="flex items-center gap-5 shadow-md rounded-full">
        <button onClick={previousPage} disabled={page === 1} className="py-2 px-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
        </button>
        <span>{page}</span>
        <button onClick={nextPage} className="py-2 px-2" disabled={page === totalPages}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>
    </div>
  )
}
