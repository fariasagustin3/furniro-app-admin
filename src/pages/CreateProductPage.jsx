import { useState } from 'react'
import CustomInput from '../components/CustomInput'
import CustomTitle from '../components/CustomTitle'
import Layout from '../components/Layout'
import { useFetch } from '../hooks/useFetch'

export const CreateProductPage = () => {
  const [additionalInput, setAdditionalInput] = useState([{
    key: "",
    value: "",
  }])

  const addInput = () => {
    setAdditionalInput([
      ...additionalInput,
      {
        key: "",
        value: "",
      }
    ])
  }

  const handleReceiveSelectValue = (event) => {
    console.log(event.target.value)
  }

  const categories = useFetch("categories/list")
  const products = useFetch("products/list")

  return (
    <Layout>
      <div className='w-full h-full px-5 py-3 flex flex-col gap-4'>
        <CustomTitle title="Create a new product" type="subtitle" />
        <div className='flex flex-col justify-center'>
          <div className='flex items-center w-2/3 gap-4'>
            <CustomInput
              type="text"
              placeholder="Sofa"
              label="Title"
              tag="input"
            />
            <CustomInput
              type="number"
              placeholder="500"
              label="Price"
              tag="input"
            />
          </div>
        </div>
        <div className='w-2/3'>
          <CustomInput
            type="text"
            placeholder="Relax and enjoy your space with the example sofa. Its sleek and inviting design makes it the perfect addition to your living room."
            label="Short Description"
            tag="textarea"
          />
        </div>
        <div className='flex flex-col justify-center'>
          <div className='flex items-center w-2/3 gap-4'>
            <CustomInput
              type="number"
              placeholder="10"
              label="Quantity"
              tag="input"
            />
            <CustomInput
              label="Categories"
              tag="select"
              selectOptions={categories.data}
              selectOption={handleReceiveSelectValue}
            />
          </div>
        </div>
        <div className='w-2/3'>
          <CustomInput
            type="text"
            placeholder="Relax and enjoy your space with the example sofa. Its sleek and inviting design makes it the perfect addition to your living room."
            label="Long Description"
            tag="textarea"
          />
        </div>
        <div className='w-2/3'>
          <CustomTitle
            type="subtitle"
            title="Related Products"
          />
          <CustomInput
            label="Related Products"
            tag="select"
            selectOptions={products.data}
            selectOption={handleReceiveSelectValue}
          />
        </div>


        {/*
          TODO: TRENDING AND DISCOUNT PERCENTAGE, ONE 
          IS A CHECKBOX AND DISCOUNT IS AN INPUT NUMBER
        */}


        <div className='flex items-center gap-4'>
          <CustomTitle
            type="subtitle"
            title="Additional Information"
          />
          <button onClick={addInput} className='bg-green-400 text-slate-100 px-2 py-2 rounded-sm'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          </button>
        </div>
        <div className='w-2/3 pb-10'>
          {additionalInput.map((_, index) => (
            <div key={index} className='flex items-center gap-3'>
              <CustomInput
                type="text"
                placeholder="Color"
                label="Information Title"
                tag="input"
              />
              <CustomInput
                type="text"
                placeholder="Blue"
                label="Value"
                tag="input"
              />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}
