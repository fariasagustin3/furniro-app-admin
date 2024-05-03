import React from 'react'

const CustomTitle = ({ title, type }) => {
  return (
    <h3 className={
      type === "subtitle"
        ? "text-2xl font-normal mb-4"
        : "text-4xl font-normal mb-4"
    }>{title}</h3>
  )
}

export default CustomTitle