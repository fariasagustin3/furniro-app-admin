import { useParams } from 'react-router-dom'
import EditProductForm from '../components/EditProductForm'
import Layout from '../components/Layout'
import { useFetch } from '../hooks/useFetch'
import { useEffect, useState } from 'react'
import axios from 'axios'

const EditProductPage = () => {
  const { id } = useParams()

  const { data } = useFetch(`products/${id}/product`)

  return (
    <Layout>
      <div className='px-10 py-5 w-full h-full mb-60'>
        <h3 className='text-2xl text-slate-800 mb-5'>Editing: {data.title}</h3>
        <div className='w-full flex flex-col gap-5'>
          <EditProductForm product={data} id={id} />
        </div>
      </div>
    </Layout>
  )
}

export default EditProductPage