'use client'

import { createUser } from '@/actions/user.actions'
import auth from '@/apiRequest/auth'
import NextModal from '@/components/commons/NextModal'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { ERROR_STATUS, USERS_STATUS_OPTIONS } from '@/lib/variable'
import { useRouter } from 'next/navigation'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'sonner'

interface Props {
  open: boolean
  onClose: () => void
}

interface INewUser {
  email: string
  fullName: string
  status: string
  password: string
}

const CreateUser = ({ open, onClose }: Props) => {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors }
  } = useForm<INewUser>({
    defaultValues: {
      email: '',
      fullName: '',
      password: '',
      status: ''
    }
  })

  const handleClose = () => {
    onClose()
    reset()
  }

  const onSubmit: SubmitHandler<INewUser> = async (dataUpdate: INewUser) => {
    try {
      const res = await createUser(dataUpdate)
      if(res?.statusCode !== ERROR_STATUS.AUTHENTICATION) {
        if(res?.statusCode !== ERROR_STATUS.SUCCESS) {
          toast.error(res?.message || 'Hệ thống bảo trì')
        } else {
          toast.success('Add a new user successfully')
        }
        handleClose()
      } else {
        toast.info('Phiên đăng nhập hết hạn')
        await auth.logoutNextClientToNextServer()
        router.push('/login')
      }
    } catch (e: any) {
      toast.error(e?.message)
    }
  }

  return (
    <NextModal open={open} onClose={handleClose} size='xs' title='Create User'>
      <form
        className='flex flex-col gap-2 mt-2'
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <label htmlFor='email'>Email</label>
          <Input
            placeholder='Enter your email'
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
        <div>
          <label htmlFor='fullName'>Fullname</label>
          <Input
            placeholder='Enter your fullname'
            {...register('fullName', {
              required: {
                value: true,
                message: 'Please enter your fullname'
              },
              minLength: {
                value: 4,
                message: 'Minimum 2 characters required'
              },
              maxLength: {
                value: 50,
                message: 'Maximum 50 characters required'
              }
            })}
          />
          {errors.fullName?.message && (
            <p className='text-sm mt-1 text-pink-500'>
              {errors.fullName?.message}
            </p>
          )}
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <Input
            placeholder='Enter your password'
            {...register('password', {
              required: {
                value: true,
                message: 'Please enter your password'
              },
              minLength: {
                value: 1,
                message: 'Minimum 1 characters required'
              },
              maxLength: {
                value: 50,
                message: 'Maximum 20 characters required'
              }
            })}
          />
          {errors.password?.message && (
            <p className='text-sm mt-1 text-pink-500'>
              {errors.password?.message}
            </p>
          )}
        </div>
        <div>
          <label htmlFor='status'>Status</label>
          <Controller
            name='status'
            control={control}
            render={({ field, fieldState }) => (
              <Select
                key={field.value}
                value={field.value?.toString()}
                defaultValue={field.value?.toString()}
                onValueChange={field.onChange}
              >
                <SelectTrigger
                  className='w-[180px]'
                  ref={field.ref}
                  aria-invalid={fieldState['invalid']}
                >
                  <SelectValue placeholder='Select a role' />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup defaultValue='1'>
                    {USERS_STATUS_OPTIONS.map((option) => (
                      <SelectItem
                        key={option.value}
                        value={option.value?.toString()}
                      >
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            )}
          />
        </div>
        <div>
          <Button type='submit'>Update</Button>
        </div>
      </form>
    </NextModal>
  )
}

export default CreateUser