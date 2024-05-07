import Layout from '../components/Layout'
import CreateProductForm from '../components/CreateProductForm'

export const CreateProductPage = () => {
  return (
    <Layout>
      <div className='px-10 py-5 w-full h-full mb-60'>
        <h3 className='text-2xl text-slate-800 mb-5'>Create a new product</h3>
        <div className='w-full flex flex-col gap-5'>

          {/* card */}
          <CreateProductForm />
        </div>
      </div>
    </Layout>
  )
}
