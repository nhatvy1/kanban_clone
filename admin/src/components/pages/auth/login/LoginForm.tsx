'use client'
import auth from '@/apiRequest/auth'
import TextField from '@/components/ui/textfield'
import { IFormLogin } from '@/types/auth.type'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'sonner'

const FormLogin = () => {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IFormLogin>()

  const onSubmit: SubmitHandler<IFormLogin> = async (data: IFormLogin) => {
    try {
      const response = await auth.login(data)
      const { access_token } = response.result
      await auth.authSetCookie({
        accessToken: access_token
      })
      router.push('/')
      toast.success('Login successfully')
    } catch (e: any) {
      toast.error(e?.message)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label
            htmlFor='email'
            className='text-blue-bold flex items-center alig'
          >
            email <span className='text-pink-600 pl-1'>*</span>
          </label>
          <TextField
            placeholder='Please enter your email'
            type='text'
            {...register('email', {
              required: 'Vui lòng nhập email',
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: 'Email không đúng định dạng'
              }
            })}
          />
          {errors.email?.message && (
            <p className='text-sm mt-1 text-pink-500'>
              {errors.email?.message}
            </p>
          )}
        </div>
        <div className='mt-4'>
          <label htmlFor='email' className='text-blue-bold'>
            password<span className='text-pink-600 pl-1'>*</span>
          </label>
          <TextField
            placeholder='Please enter your email'
            type='password'
            {...register('password', {
              required: {
                value: true,
                message: 'Vui lòng nhập mật khẩu'
              }
            })}
          />
          {errors.password?.message && (
            <p className='text-sm mt-1 text-pink-500'>
              {errors.password?.message}
            </p>
          )}
        </div>
        <div className='mt-4'>
          <button
            className='w-full bg-blue-light rounded-lg h-12 text-white font-bold'
            type='submit'
          >
            Log In
          </button>
        </div>
      </form>
      <div className='mt-4'>
        <Link href='#' className='text-blue-light underline'>
          Forgot Password?
        </Link>
      </div>
    </div>
  )
}

export default FormLogin
