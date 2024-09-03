import auth from '@/apiRequest/auth'
import { RootState } from '@/redux/store'
import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger
} from '@nextui-org/react'
import { useSelector } from 'react-redux'

const UserDropdown = () => {
  const { user } = useSelector((state: RootState)=> state.auth)

  return (
    <Dropdown>
      <DropdownTrigger>
        <div className='flex gap-x-3 p-2 cursor-pointer items-center justify-between max-w-[200px] h-header bg-slate-50 hover:bg-slate-100'>
          <div>
            <Avatar
              isDisabled
              name={user?.fullName || ''}
              className='h-[35px] w-[35px]'
            />
          </div>
          <div>
            <p className='line-clamp-1 text-xs'>{user?.fullName}</p>
            <p className='line-clamp-1 text-xs'>{user?.email}</p>
          </div>
        </div>
      </DropdownTrigger>
      <DropdownMenu aria-label='Static Actions'>
        <DropdownItem key='new'>Trang cá nhân</DropdownItem>
        <DropdownItem
          key='delete'
          className='text-danger'
          color='danger'
          onClick={() => auth.logout()}
        >
          Đăng xuất
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}

export default UserDropdown
