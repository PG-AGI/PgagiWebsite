import { getPostBySlug } from "../../../lib/mdx" 
import Navbar from '../../components/navbar';  // Import Navbar if it's not already imported



const getPageContent = async slug => {
  const { meta, content } = await getPostBySlug(slug)
  return { meta, content }
}

const Page =  async ({ params }) => {
  const { meta, content } = await getPageContent(params.slug)

  return (
    <>
      <Navbar />
      <>
        {/* thumbnail and title */}
        <div
          className='relative h-80 bg-cover bg-center mb-8'
          style={{ backgroundImage: `url(${meta.thumbnail})` }}
        >
          <div className='absolute inset-0 bg-black opacity-70'></div>
          <div className='absolute bottom-0 left-0 mb-4 ml-4'>
            <h1 className='text-4xl font-bold text-white'>{meta.title}</h1>
          </div>
        </div>
         {/* thumbnail and title */}

         {/* author and date  */}
         <div className='mt-8 px-8 flex items-center'>
            <div className='bg-gray-200 p-2 rounded-md'>
              <p className='text-sm'>By {meta.author}</p>
            </div>
            <div className='ml-4 text-gray-500 text-sm'>
              <p>{meta.publishDate}</p>
            </div>
          </div>  
       {/* author and date  */}

        {/* Fetching content */}
        <div className='container items-center sm:max-w-3/4 md:max-w-3/4 lg:max-w-3/4 xl:max-w-3/4 2xl:max-w-3/4 py-4 prose'>{content}</div>

      </>
    </>
  )
}

export default Page
