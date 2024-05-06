import { useRef, useState } from 'react'
import { useFetch } from '../hooks/useFetch'
import Layout from '../components/Layout'
import { imageDB } from '../firebase'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { v4 } from 'uuid'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import { Navigate, redirect } from 'react-router-dom'

export const CreateProductPage = () => {
  const [imageSelected, setImageSelected] = useState(null)
  const [input, setInput] = useState({
    title: "",
    price: undefined,
    shortDescription: "",
    largeDescription: "",
    quantity: undefined,
    discount: undefined,
    related: [],
    categoryId: "",
    trending: false
  });

  const title = useRef()
  const price = useRef()
  const shortDescription = useRef()
  const largeDescription = useRef()
  const quantity = useRef()
  const discount = useRef()
  const related = useRef()
  const categoryId = useRef()
  const trending = useRef()

  const handleInputChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }

  const handleRelatedProducts = (e) => {
    console.log(input.related)
    setInput({
      ...input,
      related: [...input.related, e.target.value]
    })
  }

  const handleImage = (e) => {
    setImageSelected(e.target.files[0])
  }

  const handleUploadImage = async () => {
    const imgRef = ref(imageDB, `products/${v4()}`);

    try {
      await uploadBytes(imgRef, imageSelected)
      const url = await getDownloadURL(imgRef)
      return url;
    } catch (err) {
      console.log(err)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (imageSelected) {
      const url = await handleUploadImage()
      const newProduct = {
        title: title.current.value,
        price: parseInt(price.current.value),
        image: url,
        shortDescription: shortDescription.current.value,
        largeDescription: largeDescription.current.value,
        quantity: parseInt(quantity.current.value),
        discount: parseInt(discount.current.value),
        related: related.current.value,
        categoryId: categoryId.current.value,
        trending: Boolean(trending.current.checked),
      }

      try {
        await axios.post("http://localhost:3001/products/create", newProduct, {
          headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFndXN0aW4iLCJmdWxsTmFtZSI6IkFndXN0aW4iLCJlbWFpbCI6ImFndXNAZ21haWwuY29tIiwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNzE0Njg0MTI5fQ.KML8tAJESr1ovnvP1BpmJ1ABe6vwAoVvBGXE939VFx4"
          }
        })
        toast.success("Product created successfully.")
        setInput({
          title: "",
          price: undefined,
          shortDescription: "",
          largeDescription: "",
          quantity: undefined,
          discount: undefined,
          related: [],
          categoryId: "",
          trending: false
        })

        setTimeout(() => {
          window.location.href = "http://localhost:5173/products"
        }, 2000)
      } catch (err) {
        toast.error("Somethin went wrong")
        console.log(err)
      }



    }
  }

  const products = useFetch("products/list")
  const categories = useFetch("categories/list")

  return (
    <Layout>
      <div className='px-10 py-5 w-full h-full mb-60'>
        <h3 className='text-2xl text-slate-800 mb-5'>Create a new product</h3>
        <div className='w-full flex flex-col gap-5'>

          {/* card */}
          <form
            onSubmit={handleSubmit}
            className='flex justify-between items-start w-full bg-slate-100 px-5 pt-3 pb-10 rounded-md shadow-lg'
          >
            <div>


              <h2 className='text-xl mb-5'>General Settings</h2>

              <div className='flex items-center gap-5'>
                <div className='flex flex-col gap-1 w-full'>
                  <label className='font-semibold text-sm'>Title</label>
                  <input
                    className='w-full py-2 px-3 border-[1px] border-gray-400 bg-transparent text-sm focus:outline-none'
                    type="text"
                    placeholder="Rustic Wooden Coffee Table"
                    name="title"
                    value={input.title}
                    ref={title}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className='flex flex-col gap-1 w-full'>
                  <label className='font-semibold text-sm'>Price</label>
                  <input
                    className='w-full py-2 px-3 border-[1px] border-gray-400 bg-transparent text-sm focus:outline-none'
                    type="number"
                    placeholder="10"
                    name="price"
                    ref={price}
                    value={input.price}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className='w-full mt-10 flex flex-col gap-1'>
                <label className='font-semibold text-sm'>Short Description</label>
                <textarea
                  placeholder="A unique and elegant table for your living room."
                  className='w-full py-2 px-3 border-[1px] border-gray-400 bg-transparent text-sm focus:outline-none h-28'
                  name="shortDescription"
                  ref={shortDescription}
                  onChange={handleInputChange}
                  value={input.shortDescription}
                  required
                />
              </div>

              <div className='flex items-start gap-5 mt-10'>
                <div className='flex flex-col  gap-1 w-full'>
                  <label className='font-semibold text-sm'>Related Products</label>
                  <select ref={related} onChange={handleRelatedProducts} name="related" className='w-full py-2 px-3 border-[1px] border-gray-400 bg-transparent text-sm focus:outline-none'>
                    {products?.data.map((product) => (
                      <option key={product._id} value={product?._id}>{product?.title}</option>
                    ))}
                  </select>
                  {input.related?.map((relatedProduct) => (
                    <span key={relatedProduct} className='text-green-400 text-xs'>{relatedProduct}</span>
                  ))}
                </div>
                <div className='flex flex-col gap-1 w-full'>
                  <label className='font-semibold text-sm'>Category</label>
                  <select required ref={categoryId} name="categoryId" onChange={handleInputChange} className='w-full py-2 px-3 border-[1px] border-gray-400 bg-transparent text-sm focus:outline-none'>
                    {categories?.data.map((category) => (
                      <option key={category._id} value={category?._id}>{category?.name}</option>
                    ))}
                  </select>
                  <span className='text-green-400 text-xs'>{input.categoryId}</span>
                </div>
              </div>

              <div className='w-full mt-10 flex flex-col gap-1'>
                <label className='font-semibold text-sm'>Large Description</label>
                <textarea
                  placeholder="The Rustic Wooden Coffee Table is a unique piece that will add a touch of style to your living room. With its rustic and handcrafted design, this table is made from high-quality solid wood. The uneven surface and hand-carved details give the table a distinctive character. It's perfect for placing your drinks, books, and decorative objects."
                  className='w-full py-2 px-3 border-[1px] border-gray-400 bg-transparent text-sm focus:outline-none h-28'
                  name="largeDescription"
                  ref={largeDescription}
                  onChange={handleInputChange}
                  value={input.largeDescription}
                  required
                />
              </div>

              <div className='flex items-center gap-5 mt-10'>
                <div className='flex flex-col gap-1 w-full'>
                  <label className='font-semibold text-sm'>Quantity</label>
                  <input
                    className='w-full py-2 px-3 border-[1px] border-gray-400 bg-transparent text-sm focus:outline-none'
                    type="number"
                    placeholder="20"
                    name="quantity"
                    ref={quantity}
                    onChange={handleInputChange}
                    value={input.quantity}
                    required
                  />
                </div>
                <div className='flex flex-col gap-1 w-full'>
                  <label className='font-semibold text-sm'>Discount (%)</label>
                  <input
                    className='w-full py-2 px-3 border-[1px] border-gray-400 bg-transparent text-sm focus:outline-none'
                    type="number"
                    placeholder="50"
                    name="discount"
                    ref={discount}
                    onChange={handleInputChange}
                    value={input.discount}
                  />
                </div>
                <div className='flex flex-col items-center gap-1 w-full'>
                  <label className='font-semibold text-sm'>Trending product</label>
                  <input
                    className='h-10 w-10 border-gray-400 border-[1px]'
                    type="checkbox"
                    name="trending"
                    ref={trending}
                    value={input.trending}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <button
                type='submit'
                className={!imageSelected ? 'bg-green-400 text-slate-100 px-5 py-2 rounded-sm mt-5 font-semibold' : 'bg-green-600 text-slate-100 px-5 py-2 rounded-sm mt-5 font-semibold'}
                disabled={!imageSelected}
              >
                Save
              </button>
            </div>
            <div className=' pr-7'>
              <h2 className='text-xl mb-5'>Upload Image</h2>
              <div className='w-80 h-80 border-[1px] border-gray-400 relative'>
                {imageSelected ? (
                  <img
                    src={URL.createObjectURL(imageSelected)}
                    alt="image-selected"
                    className='absolute w-full h-full object-cover'
                  />
                ) : (
                  <label htmlFor="main-image" className=' w-full h-full absolute'>
                    <div className='flex items-center justify-center w-full h-full cursor-pointer'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#c1c1c1" className="w-16 h-16">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                      </svg>
                      <input onChange={handleImage} id="main-image" className='hidden' type="file" />
                    </div>
                  </label>
                )}
              </div>
              <div>
                <button
                  disabled={!imageSelected}
                  className={!imageSelected ? 'bg-red-300 px-4 py-2 text-slate-100 font-semibold text-sm mt-2' : 'bg-red-600 px-4 py-2 text-slate-100 font-semibold text-sm mt-2'}
                  onClick={() => setImageSelected(null)}
                >
                  CLEAR
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </Layout>
  )
}
