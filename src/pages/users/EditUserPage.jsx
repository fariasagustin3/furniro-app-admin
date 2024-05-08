import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout'
import NothingTemplate from '../../components/NothingTemplate'
import Checkbox from '../../components/Checkbox'
import { useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import SubmitButton from '../../components/SubmitButton'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'

const EditUserPage = () => {
  const [loading, setLoading] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)
  const { id } = useParams()
  const { data } = useFetch(`users/${id}/user`)
  const [token, setToken] = useState(null)

  useEffect(() => {
    setToken(localStorage.getItem("token"))
  }, [])

  const handleCheckboxChange = () => {
    setIsAdmin(!isAdmin)
  }

  const editUser = async (event) => {
    event.preventDefault()

    try {
      await axios.put(`http://localhost:3001/users/${id}/edit`, {isAdmin}, {
        headers: {
          "Authorization": token
        }
      })
      toast.success("User edited successfully.")
      setLoading(false)
      setTimeout(() => {
        window.location.href = "http://localhost:5173/users"
      }, 2000)
    } catch (err) {
      toast.error("Something went wrong.")
      console.log(err)
    }
  }

  useEffect(() => {
    setIsAdmin(data.isAdmin)
  }, [data])

  return (
    <Layout>
      <div className='px-10 py-5 w-full h-full mb-60 flex items-start justify-start'>
        <div>

          <h3 className='text-2xl text-slate-800 mb-5'>Editing: {data.username}</h3>
          <form onSubmit={editUser} className=''>
            <Checkbox label="Admin" name="isAdmin" value={isAdmin} onChange={handleCheckboxChange} checked={isAdmin} />
            <SubmitButton
              loading={loading}
              imageSelected={true}
            />
          </form>
        </div>
        <ToastContainer />
      </div>
    </Layout>
  )
}

export default EditUserPage