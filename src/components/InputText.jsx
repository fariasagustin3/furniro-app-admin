import React from 'react'

const InputText = ({ label, placeholder, value, name, onChange, required }) => {
  return (
    <div className='flex w-full flex-col gap-1'>
      {label && (
        <label className='text-sm font-semibold'>{label}</label>
      )}
      <input 
        type="text"
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onChange}
        required={required}
        className='w-full py-2 px-3 border-[1px] border-gray-400 bg-transparent text-sm focus:outline-none'
      />
    </div>
  )
}

export default InputText