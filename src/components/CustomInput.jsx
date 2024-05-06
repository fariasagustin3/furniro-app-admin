import { useState } from "react"

export default function CustomInput({ type, name, placeholder, label, tag, selectOptions, selectOption }) {
  const [optSelect, setOptSelect] = useState("")
  const [input, setInput] = useState({
    title: "",
    price: null,
    shortDescription: "",
    quantity: null,
    largeDescription: "",
    additionalInformation: [],
    categoryId: "",
    trending: false,
    discount: 0,
    related: [],
  })

  const handleInputChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value
    })
  }

  return (
    <div className="flex flex-col w-full">
      {label && (
        <label className="font-semibold text-sm">{label}</label>
      )}
      {tag === "input" ? (
        <input
          onChange={handleInputChange}
          name={name}
          value={input[name]}
          type={type}
          placeholder={placeholder}
          className="px-4 py-2 w-full border-gray-300 border-[1px] bg-transparent rounded-md focus:outline-none text-sm"
        />
      ) : tag === "textarea" ? (
        <textarea
          onChange={handleInputChange}
          name={name}
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
