'use client'

import { updateUser } from '@/actions/user.actions'
import NextModal from '@/components/commons/NextModal'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { IUser } from '@/types/user.type'
import { Select } from '@radix-ui/react-select'

interface Props {
  open: boolean
  data: IUser | undefined
  onClose: () => void
}

const UpdateUser = ({ open, data, onClose }: Props) => {
  const handleUpdateUser = async(e: any)=> {
    e.preventDefault()
    try {
      const res = await updateUser()
      console.log(res)
    } catch(e) {
      console.log(e)
    }
  }


  return (
    <NextModal open={open} onClose={onClose} size='xs'>
      <form className='flex flex-col gap-2 mt-2'>
        <div>
          <label htmlFor='email'>Email</label>
          <Input placeholder='Enter your email' />
        </div>
        <div>
          <label htmlFor='fullName'>Fullname</label>
          <Input placeholder='Enter your fullname' />
        </div>

        <div>
          <label htmlFor='status'>Status</label>
          <Select>
            <SelectTrigger className='w-[180px]'>
              <SelectValue placeholder='Select a fruit' />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem value='apple'>Apple</SelectItem>
                <SelectItem value='banana'>Banana</SelectItem>
                <SelectItem value='blueberry'>Blueberry</SelectItem>
                <SelectItem value='grapes'>Grapes</SelectItem>
                <SelectItem value='pineapple'>Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Button onClick={(e)=> handleUpdateUser(e)}>Call API</Button>
        </div>
      </form>
    </NextModal>
  )
}

export default UpdateUser
