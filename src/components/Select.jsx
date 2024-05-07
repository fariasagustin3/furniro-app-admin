import React from 'react'

const Select = ({ label, onChange, name, value, placeholder, data, selected }) => {
  return (
    <div className='flex flex-col  gap-1 w-full'>
      {label && (
        <label className='font-semibold text-sm'>{label}</label>
      )}
      <select 
        onChange={onChange} 
        name={name}
        value={value}
        className='w-full py-2 px-3 border-[1px] border-gray-400 bg-transparent text-sm focus:outline-none'
      >
        <option disabled value={value} selected>{placeholder}</option>
        {data.map((item) => (
          <option key={item._id} value={item?._id}>{item?.title || item?.name}</option>
        ))}
      </select>
      {typeof selected === "array" ? selected.map((option) => (
        <span key={option} className='text-green-400 text-xs'>{option}</span>
      )) : (
        <span className='text-green-400 text-xs'>{selected}</span>
      )}
    </div>
  )
}

export default Select