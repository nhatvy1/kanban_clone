import auth from '@/apiRequest/auth'
import { RootState } from '@/redux/store'
import {
  Avatar,
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@nextui-org/react'
import { CiShare1 } from 'react-icons/ci'
import { useSelector } from 'react-redux'

const Profiles = () => {
  const { user } = useSelector((state: RootState) => state.auth)

  return (
    <Popover
      placement='bottom'
      classNames={{ content: '!rounded-[5px] !p-0 !pb-2' }}
    >
      <PopoverTrigger>
        <Button size='sm' radius='none' isIconOnly className='rounded-full'>
          <Avatar name={user?.fullName} classNames={{ name: 'text-sm' }} />
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className='w-[300px] text-grayCustom'>
          <div className='px-4 py-2'>
            <p className='uppercase text-xs font-semibold'>Account</p>
            <div className='flex items-center gap-2'>
              <Avatar name={user?.fullName} classNames={{ name: 'text-sm' }} />
              <div>
                <p className='text-sm'>{user?.fullName}</p>
                <p className='text-xs'>{user?.email}</p>
              </div>
            </div>
          </div>
          <div className='flex-between-center hover:bg-gray-100 px-4 py-[6px]'>
            Profile <CiShare1 className='text-lg' />
          </div>
          <div className='flex-between-center hover:bg-gray-100 px-4 py-[6px]'>
            Manage account <CiShare1 className='text-lg' />
          </div>
          <div className='px-4 my-2'>
            <hr />
          </div>

          <div
            className='flex-between-center hover:bg-gray-100 px-4 py-[6px] cursor-pointer'
            onClick={() => auth.logout()}
          >
            Logout
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default Profiles
