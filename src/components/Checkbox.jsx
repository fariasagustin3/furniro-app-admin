import React from 'react'

const Checkbox = ({ label, name, value, onChange }) => {
  return (
    <div className='flex flex-col items-center gap-1 w-full'>
      {label && (
        <label className='font-semibold text-sm'>{label}</label>
      )}
      <input
        className='h-10 w-10 border-gray-400 border-[1px]'
        type="checkbox"
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default Checkbox