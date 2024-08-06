import FormLogin from "@/components/pages/auth/login/LoginForm"

const LoginPage = () => {
  return (
    <div className='w-full min-h-screen flex  flex-wrap'>
      <div className='md:basis-1/2 basis-full bg-gray-light pt-[150px] pb-4 max-md:px-4'>
        <div className='max-w-[1200px] flex justify-around mt-[10vh]'>
          <div className='border min-[480px]:max-w-[480px] w-full px-10 py-6 bg-white rounded-2xl shadow-formLogin'>
            <h3 className='text-dark text-[32px] max-lg:text-2xl max-md:text-xl font-bold mb-4'>
              Log in to your account
            </h3>
            <FormLogin />
          </div>
        </div>
      </div>
      <div className='md:basis-1/2 basis-full bg-login bg-no-repeat bg-cover'></div>
    </div>
  )
}

export default LoginPage
