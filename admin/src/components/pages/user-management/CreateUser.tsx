'use client'

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
import { STATUS_OPTIONS } from '@/lib/variable'
import { IUser } from '@/types/user.type'
import { useRouter } from 'next/navigation'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'sonner'

const CreateUser = () => {
  const router = useRouter()

  const handleClose = () => {
    router.back()
  }

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

  const onSubmit: SubmitHandler<IUser> = async (dataUpdate: IUser) => {
    try {
      console.log(dataUpdate)
    } catch (e: any) {
      console.log(e)
      toast.error(e?.message)
    }
  }

  return (
    <NextModal open={true} onClose={handleClose}>
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

export default CreateUser
