import CreateCategoryForm from '../../components/CreateCategoryForm'
import Layout from '../../components/Layout'
import NothingTemplate from '../../components/NothingTemplate'

const CreateCategoryPage = () => {
  return (
    <Layout>
      <div className='px-10 py-5 w-full h-full mb-60'>
        <h3 className='text-2xl text-slate-800 mb-5'>Create a new category</h3>
        <div className='w-full flex flex-col gap-5'>
          <CreateCategoryForm />
        </div>
      </div>
    </Layout>
  )
}

export default CreateCategoryPage