import { useEffect, useState } from 'react'
import InputText from './InputText'
import InputNumber from './InputNumber';
import TextArea from './TextArea';
import Select from './Select';
import { useFetch } from '../hooks/useFetch';
import Checkbox from './Checkbox';
import SubmitButton from './SubmitButton';
import InputImage from './InputImage';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { imageDB } from '../firebase';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { v4 } from 'uuid';

const EditProductForm = ({ product, id }) => {
  const [imageSelected, setImageSelected] = useState(null)
  const [loading, setLoading] = useState(false)
  const [input, setInput] = useState({
    id: "",
    title: "",
    price: undefined,
    shortDescription: "",
    related: [],
    categoryId: "",
    largeDescription: "",
    quantity: undefined,
    discount: undefined,
    trending: false,
  });

  // fetching data for select inputs
  const products = useFetch("products/list")
  const categories = useFetch("categories/list")

  // function to handle input values when they change
  const handleInputChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value
    });
  }

  // function to handle checked value for trending checkbox
  const handleCheckboxChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.checked
    })
  }

  // function to handle related products select input
  const handleRelatedProducts = (event) => {
    setInput({
      ...input,
      related: [...input.related, event.target.value]
    })
  }

  // function to handle image selection
  const handleImage = (event) => {
    setImageSelected(event.target.files[0])
  }

  // function to handle images uploading
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

  // function that handles input data when form send them
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true)

    if (imageSelected && imageSelected.name) {
      const url = await handleUploadImage()
      const product = {
        title: input.title,
        price: parseInt(input.price),
        image: url,
        shortDescription: input.shortDescription,
        related: input.related,
        categoryId: input.categoryId,
        largeDescription: input.largeDescription,
        quantity: parseInt(input.quantity),
        discount: parseInt(input.discount),
        trending: Boolean(input.trending),
      }

      
      try {
        await axios.put(`http://localhost:3001/products/${id}/edit`, product, {
          headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFndXN0aW4iLCJmdWxsTmFtZSI6IkFndXN0aW4iLCJlbWFpbCI6ImFndXNAZ21haWwuY29tIiwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNzE0Njg0MTI5fQ.KML8tAJESr1ovnvP1BpmJ1ABe6vwAoVvBGXE939VFx4"
          }
        })
        toast.success("Product edited successfully.")
        setLoading(false)
        setInput({
          title: "",
          price: undefined,
          shortDescription: "",
          related: [],
          categoryId: "",
          largeDescription: "",
          quantity: undefined,
          discount: undefined,
          trending: false,
        })
        setTimeout(() => {
          window.location.href = "http://localhost:5173/products"
        }, 2000)
      } catch (err) {
        toast.error("Something went wrong.")
        setLoading(false)
        console.log(err)
      }

    } else if(imageSelected && imageSelected?.split(":")[0] === "https") {
      const product = {
        title: input.title,
        price: parseInt(input.price),
        image: imageSelected,
        shortDescription: input.shortDescription,
        related: input.related,
        categoryId: input.categoryId,
        largeDescription: input.largeDescription,
        quantity: parseInt(input.quantity),
        discount: parseInt(input.discount),
        trending: Boolean(input.trending),
      }

      try {
        await axios.put(`http://localhost:3001/products/${id}/edit`, product, {
          headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFndXN0aW4iLCJmdWxsTmFtZSI6IkFndXN0aW4iLCJlbWFpbCI6ImFndXNAZ21haWwuY29tIiwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNzE0Njg0MTI5fQ.KML8tAJESr1ovnvP1BpmJ1ABe6vwAoVvBGXE939VFx4"
          }
        })
        toast.success("Product edited successfully.")
        setLoading(false)
        setInput({
          title: "",
          price: undefined,
          shortDescription: "",
          related: [],
          categoryId: "",
          largeDescription: "",
          quantity: undefined,
          discount: undefined,
          trending: false,
        })
        setTimeout(() => {
          window.location.href = "http://localhost:5173/products"
        }, 2000)
      } catch (err) {
        toast.error("Something went wrong.")
        setLoading(false)
        console.log(err)
      }
    }
  }

  useEffect(() => {
    setInput({
      id: product?._id,
      title: product?.title,
      price: product?.price,
      image: product?.image,
      shortDescription: product?.shortDescription,
      related: product?.related,
      categoryId: product?.categoryId,
      largeDescription: product?.largeDescription,
      quantity: product?.quantity,
      discount: product?.discount,
      trending: product?.trending,
    })

    setImageSelected(product?.image)
  }, [product])

  return (
    <form
      onSubmit={handleSubmit}
      className='flex justify-between items-start w-full bg-slate-100 px-5 pt-3 pb-10 rounded-md shadow-lg'
    >
      <div>
        <h2 className='text-xl mb-5'>General Settings</h2>
        <div className='flex items-center gap-5'>
          <InputText
            label="Title"
            placeholder="Modern Sofa"
            value={input.title}
            name="title"
            onChange={handleInputChange}
            required={true}
          />
          <InputNumber
            label="Price"
            placeholder="1200"
            value={input.price}
            name="price"
            onChange={handleInputChange}
            required={true}
          />
        </div>
        <TextArea
          label="Short Description"
          placeholder="A unique and elegant table for your living room."
          name="shortDescription"
          onChange={handleInputChange}
          value={input.shortDescription}
          required={true}
        />
        <div className='flex items-start gap-5 mt-10'>
          <Select
            label="Related Products"
            onChange={handleRelatedProducts}
            name="related"
            value={input.related}
            placeholder="Select Related Products"
            data={products?.data}
            selected={input.related}
          />
          <Select
            label="Category"
            onChange={handleInputChange}
            name="categoryId"
            value={input.categoryId}
            placeholder="Select Product Category"
            data={categories?.data}
            selected={input.categoryId}
          />
        </div>
        <TextArea
          label="Large Description"
          placeholder="The Rustic Wooden Coffee Table is a unique piece that will add a touch of style to your living room. With its rustic and handcrafted design, this table is made from high-quality solid wood. The uneven surface and hand-carved details give the table a distinctive character. It's perfect for placing your drinks, books, and decorative objects."
          name="largeDescription"
          onChange={handleInputChange}
          value={input.largeDescription}
          required={true}
        />
        <div className='flex items-center gap-5 mt-10'>
          <InputNumber
            label="Quantity"
            placeholder="50"
            value={input.quantity}
            name="quantity"
            onChange={handleInputChange}
            required={true}
          />
          <InputNumber
            label="Discount"
            placeholder="20"
            value={input.discount}
            name="discount"
            onChange={handleInputChange}
            required={true}
          />
          <Checkbox
            label="Trending Product"
            name="trending"
            value={input.trending}
            onChange={handleCheckboxChange}
          />
        </div>
        <SubmitButton
          loading={loading}
          imageSelected={imageSelected}
        />
      </div>
      <InputImage
        title="Upload Image"
        imageSelected={imageSelected}
        onChange={handleImage}
        handleSelectImage={() => setImageSelected(null)}
      />
      <ToastContainer />
    </form>
  )
}

export default EditProductForm