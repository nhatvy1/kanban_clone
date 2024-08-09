'use client'

import { updateUser } from '@/actions/user.actions'
import NextModal from '@/components/commons/NextModal'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { IUser } from '@/types/user.type'
import { Select } from '@radix-ui/react-select'
import { useEffect } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'sonner'

interface Props {
  open: boolean
  data: IUser | undefined
  onClose: () => void
}
const STATUS_OPTIONS = [
  { value: 1, label: 'Approved' },
  { value: -1, label: 'Block' },
  { value: 0, label: 'Pending' }
]

const UpdateUser = ({ open, data, onClose }: Props) => {
  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors }
  } = useForm<IUser>({
    defaultValues: {
      email: '',
      fullName: '',
      status: 0
    }
  })

  useEffect(() => {
    if (data) {
      setValue('email', data.email)
      setValue('fullName', data.fullName)
      setValue('status', data.status)
    }
  }, [data])

  const onSubmit: SubmitHandler<IUser> = async (data: IUser) => {
    try {
      console.log('Check data: ', data)
    } catch (e: any) {
      toast.error(e?.message)
    }
  }

  return (
    <NextModal open={open} onClose={onClose} size='xs'>
      <form
        className='flex flex-col gap-2 mt-2'
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <label htmlFor='email'>Email</label>
          <Input
            placeholder='Enter your email'
            {...register('email')}
            disabled
          />
        </div>
        <div>
          <label htmlFor='fullName'>Fullname</label>
          <Input placeholder='Enter your fullname' {...register('fullName')} />
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
                  <SelectValue placeholder={JSON.stringify(field.value)} />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup defaultValue='1'>
                    {STATUS_OPTIONS.map((option) => (
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

export default UpdateUser
