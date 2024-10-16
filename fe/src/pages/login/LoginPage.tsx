import FormLogin from './components/FormLogin'

const LoginPage = () => {
  return (
    <div className='min-h-dvh flex items-center justify-center'>
      <div className='w-full'>
          <div className='max-w-[1140px] mx-auto flex items-center justify-center'>
            <FormLogin />
        </div>
      </div>
    </div>
  )
}

export default LoginPage
