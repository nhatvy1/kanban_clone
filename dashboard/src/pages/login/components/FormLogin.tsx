import { useState } from 'react'
import { PiEyeLight, PiEyeSlash } from 'react-icons/pi'
import NextInput from '../../../components/ui/NextInput'
import { Button, Checkbox } from '@nextui-org/react'
import { Link, useNavigate } from 'react-router-dom'
import { IFormLogin } from '../../../types/auth.type'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import auth from '../../../apiRequest/auth'
import { login } from '../../../redux/slices/auth.slice'
import { useAppDispatch } from '../../../hooks/useAppDispatch'

const FormLogin = () => {
  const [isVisible, setIsVisible] = useState(false)
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
      const res = await auth.login(data)
      dispatch(
        login({
          user: res.result.user,
          accessToken: res.result.access_token,
          refreshToken: res.result.refresh_token
        })
      )
      toast.success('Login successfully')
      navigate('/')
    } catch (e: any) {
      toast.error(e?.message)
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
            <p className='text-sm mt-1 text-pink-500'>
              {errors.email?.message}
            </p>
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
        >
          Sign In
        </Button>
      </div>
    </form>
  )
}

export default FormLogin
