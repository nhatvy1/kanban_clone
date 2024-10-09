import { Link, useNavigate } from 'react-router-dom'

const NotAccessPage = () => {
  const navigate = useNavigate()

  return (
    <section className='flex items-center h-screen p-16 bg-gray-50 dark:bg-gray-700'>
      <div className='container mx-auto flex flex-col items-center '>
        <div className='flex flex-col gap-6 max-w-md text-center'>
          <h2 className='font-extrabold text-9xl text-gray-600 dark:text-gray-100'>
            <span className='sr-only'>Error</span>403
          </h2>
          <p className='text-2xl md:text-3xl dark:text-gray-300'>
            Sorry, You Are Not Allowed to Access This Page.
          </p>
          <Link
            to='/'
            className='px-8 py-4 text-xl font-semibold rounded bg-primary text-gray-50 hover:text-gray-200'
            onClick={() => navigate(-1)}
          >
            Back to home
          </Link>
        </div>
      </div>
    </section>
  )
}

export default NotAccessPage
