import { useState } from "react"

export default function CustomInput({ type, placeholder, label, tag, selectOptions, selectOption }) {
  const [optSelect, setOptSelect] = useState("")

  return (
    <div className="flex flex-col w-full">
      {label && (
        <label className="font-semibold text-sm">{label}</label>
      )}
      {tag === "input" ? (
        <input
          type={type}
          placeholder={placeholder}
          className="px-4 py-2 w-full border-gray-300 border-[1px] bg-transparent rounded-md focus:outline-none text-sm"
        />
      ) : tag === "textarea" ? (
        <textarea
          type={type}
          placeholder={placeholder}
          className="px-4 py-2 w-full border-gray-300 border-[1px] bg-transparent rounded-md focus:outline-none text-sm h-20"
        />
      ) : (
        <select onChange={selectOption} value={optSelect} className="px-4 py-2 w-full border-gray-300 border-[1px] bg-transparent rounded-md focus:outline-none text-sm">
          {selectOptions.map((opt) => (
            <option value={opt._id} key={opt._id}>{opt?.name || opt?.title}</option>
          ))}
        </select>
      )}
    </div>

  )
}
