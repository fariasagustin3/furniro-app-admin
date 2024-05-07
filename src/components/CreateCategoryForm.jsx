import { useState } from 'react'
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

const CreateCategoryForm = () => {
  const [imageSelected, setImageSelected] = useState(null)
  const [loading, setLoading] = useState(false)
  const [input, setInput] = useState({
    name: "",
    description: "",
  });

  // function to handle input values when they change
  const handleInputChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value
    });
  }

  // function to handle image selection
  const handleImage = (event) => {
    setImageSelected(event.target.files[0])
  }

  // function to handle images uploading
  const handleUploadImage = async () => {
    const imgRef = ref(imageDB, `categories/${v4()}`);

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

    if (imageSelected) {
      const url = await handleUploadImage()
      const category = {
        name: input.name,
        description: input.description,
        image: url,
      }

      try {
        await axios.post("http://localhost:3001/categories/create", category, {
          headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFndXN0aW4iLCJmdWxsTmFtZSI6IkFndXN0aW4iLCJlbWFpbCI6ImFndXNAZ21haWwuY29tIiwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNzE0Njg0MTI5fQ.KML8tAJESr1ovnvP1BpmJ1ABe6vwAoVvBGXE939VFx4"
          }
        })
        toast.success("Category created successfully.")
        setLoading(false)
        setInput({
          name: "",
          description: "",
        })
        setTimeout(() => {
          window.location.href = "http://localhost:5173/categories"
        }, 2000)
      } catch (err) {
        toast.error("Something went wrong.")
        setLoading(false)
        console.log(err)
      }
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='w-full bg-slate-100 px-5 pt-3 pb-10 rounded-md shadow-lg'
    >
      <h2 className='text-xl mb-5'>General Settings</h2>
      <div className='flex items-start w-full justify-between gap-10'>

        <div className='flex flex-col w-full'>
          <InputText
            label="Name"
            placeholder="Living Room"
            value={input.name}
            name="name"
            onChange={handleInputChange}
            required={true}
          />
          <TextArea
            label="Description"
            placeholder="This category features a comprehensive selection of furniture designed to transform your living space into a comfortable, stylish, and functional haven. We offer high-quality, durable pieces that cater to various aesthetics and living needs, allowing you to create a living room that reflects your unique personality."
            name="description"
            onChange={handleInputChange}
            value={input.description}
            required={true}
          />
          <SubmitButton
            loading={loading}
            imageSelected={imageSelected}
          />
        </div>
        <InputImage
          imageSelected={imageSelected}
          onChange={handleImage}
          handleSelectImage={() => setImageSelected(null)}
        />
      </div>
      <ToastContainer />
    </form>
  )
}

export default CreateCategoryForm