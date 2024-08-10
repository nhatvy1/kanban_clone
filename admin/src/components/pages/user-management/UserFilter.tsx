'use client'

import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { USERS_STATUS_OPTIONS } from '@/lib/variable'
import { Search } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'sonner'
import queryString from 'query-string'

interface ISearch {
  search: string
}

const UserFilter = () => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const { register, handleSubmit } = useForm<ISearch>({
    defaultValues: {
      search: searchParams.get('search') ?? ''
    }
  })

  const onSubmit: SubmitHandler<ISearch> = async (data: ISearch) => {
    try {
      const pushQueryString = queryString.stringify(data)
      router.push(`/user-management?${pushQueryString}`)
    } catch (e: any) {
      toast.error(e?.message)
    }
  }

  return (
    <div className='flex items-center gap-x-2'>
      <div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='relative ml-auto flex-1 md:grow-0'
        >
          <Search className='absolute left-2.5 top-[.75rem] h-4 w-4 text-muted-foreground' />
          <Input
            {...register('search')}
            type='text'
            placeholder='Search users by email or fullname'
            className='w-full rounded-md bg-background pl-8 md:w-[200px] lg:w-[336px] !outline-none'
          />
        </form>
      </div>
      <div>
        <Select>
          <SelectTrigger className='w-[180px]'>
            <SelectValue placeholder='Find a status' />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup defaultValue='1'>
              {USERS_STATUS_OPTIONS.map((option) => (
                <SelectItem key={option.value} value={option.value?.toString()}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}

export default UserFilter
