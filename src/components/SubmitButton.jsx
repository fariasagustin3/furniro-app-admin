import React from 'react'

const SubmitButton = ({ imageSelected, loading }) => {
  return (
    <button
      type='submit'
      className={!imageSelected ? 'bg-green-400 text-slate-100 px-5 py-2 rounded-sm mt-5 font-semibold' : 'bg-green-600 text-slate-100 px-5 py-2 rounded-sm mt-5 font-semibold'}
      disabled={!imageSelected}
    >
      {!loading ? "Save" : "Loading"}
    </button>
  )
}

export default SubmitButton