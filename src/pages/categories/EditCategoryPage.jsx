import React from 'react'
import Layout from '../../components/Layout'
import EditCategoryForm from '../../components/EditCategoryForm'
import { useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'

const EditCategoryPage = () => {
  const { id } = useParams()
  const { data } = useFetch(`categories/${id}/category`)

  return (
    <Layout>
      <div className='px-10 py-5 w-full h-full mb-60'>
        <h3 className='text-2xl text-slate-800 mb-5'>Editing: {data.name}</h3>
        <div className='w-full flex flex-col gap-5'>
          <EditCategoryForm category={data} id={id} />
        </div>
      </div>
    </Layout>
  )
}

export default EditCategoryPage