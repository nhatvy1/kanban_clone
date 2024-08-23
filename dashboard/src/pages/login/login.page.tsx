import FormLogin from './components/FormLogin'

const LoginPage = () => {
  return (
    <div className='min-h-dvh'>
      <div className='w-full h-[380px] bg-login bg-[50%] top-0 right-0 left-0 absolute bg-cover'>
        <div className='absolute top-0 right-0 left-0 h-full opacity-90 w-full bg-[#405189]'></div>
        <img
          className='absolute bottom-0 left-0 right-0 pointer-events-none'
          src='/shape.svg'
          alt='shape'
        />
        <div className='relative w-full h-[400px] px-4 mt-32 max-lg:mt-20'>
          <div className='text-center mb-4 text-white '>
            <h2 className='text-3xl font-bold'>DASHBOARD</h2>
            <p>Premium Admin & Dashboard Template</p>
          </div>
          <div className='max-w-[1140px] mx-auto flex items-center justify-center'>
            <FormLogin />
          </div>
        </div>
      </div>
      <div className='absolute bottom-0 pb-2 w-full'>
        <p className='text-grayNormal text-sm text-center'>
          © 2024 Velzon. Crafted with by Themesbrand
        </p>
      </div>
    </div>
  )
}

export default LoginPage
