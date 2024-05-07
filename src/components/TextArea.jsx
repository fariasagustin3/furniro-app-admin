import React from 'react'

const TextArea = ({ label, placeholder, name, onChange, value, required }) => {
  return (
    <div className='w-full mt-10 flex flex-col gap-1'>
      {label && (
        <label className='font-semibold text-sm'>{label}</label>
      )}
      <textarea
        placeholder={placeholder}
        className='w-full py-2 px-3 border-[1px] border-gray-400 bg-transparent text-sm focus:outline-none h-28'
        name={name}
        onChange={onChange}
        value={value}
        required={required}
      />
    </div>
  )
}

export default TextArea