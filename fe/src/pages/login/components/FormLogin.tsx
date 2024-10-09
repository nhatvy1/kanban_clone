import { useState } from 'react'
import { PiEyeLight, PiEyeSlash } from 'react-icons/pi'
import { Button, Checkbox } from '@nextui-org/react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'
import { useAppDispatch } from '@/hooks/useAppDispatch'
import { IFormLogin } from '@/types/auth.type'
import auth from '@/apiRequest/auth'
import { handleLogin } from '@/redux/slices/auth.slice'
import NextInput from '@/components/ui/NextInput'

const FormLogin = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isloading, setIsLoading] = useState(false)
  const toggleVisibility = () => setIsVisible(!isVisible)

  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IFormLogin>()

  const onSubmit: SubmitHandler<IFormLogin> = async (data: IFormLogin) => {
    try {
      setIsLoading(true)
      const res = await auth.login(data)
      dispatch(
        handleLogin({
          user: res.result.user,
          access_token: res.result.access_token,
          refresh_token: res.result.refresh_token
        })
      )
      toast.success('Login successfully')
      navigate('/')
    } catch (e: any) {
      console.log()
      toast.error(e?.message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='max-w-[460px] flex flex-col gap-3 w-full rounded-md bg-white shadow-lg p-8'
    >
      <div>
        <p className='text-primary font-semibold text-center'>Welcome Back!</p>
        <p className='text-center text-sm mt-1 mb-4 text-grayNormal'>
          Sign in to continue to Dashboard.
        </p>
      </div>
      <div className=''>
        <NextInput
          label='Email'
          {...register('email')}
          placeholder='Enter your email'
        />
        {errors.email?.message && (
          <p className='text-sm mt-1 text-pink-500'>{errors.email?.message}</p>
        )}
      </div>
      <div className=''>
        <NextInput
          label='Password'
          {...register('password')}
          placeholder='Enter your password'
          endContent={
            <button
              className='focus:outline-none'
              type='button'
              onClick={toggleVisibility}
              aria-label='toggle password visibility'
            >
              {isVisible ? (
                <PiEyeLight className='text-lg text-default-400 pointer-events-none' />
              ) : (
                <PiEyeSlash className='text-lg text-default-400 pointer-events-none' />
              )}
            </button>
          }
          type={isVisible ? 'text' : 'password'}
        />
        {errors.password?.message && (
          <p className='text-sm mt-1 text-pink-500'>
            {errors.password?.message}
          </p>
        )}
      </div>
      <div className='flex items-center justify-between'>
        <Checkbox defaultSelected size='sm'>
          Remember me
        </Checkbox>
        <p className='text-sm text-grayNormal'>
          <Link to='#'>Forgot password?</Link>
        </p>
      </div>
      <div>
        <Button
          fullWidth
          type='submit'
          className='rounded-md text-white font-medium bg-[#0ab39c]'
          isLoading={isloading}
        >
          Sign In
        </Button>
      </div>
    </form>
  )
}

export default FormLogin
