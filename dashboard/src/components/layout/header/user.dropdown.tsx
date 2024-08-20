import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger
} from '@nextui-org/react'

const UserDropdown = () => {
  return (
    <Dropdown>
      <DropdownTrigger>
        <button>
          <Avatar isDisabled name='Joe' className='h-[42px] w-[42px]'/>
        </button>
      </DropdownTrigger>
      <DropdownMenu aria-label='Static Actions'>
        <DropdownItem key='new'>New file</DropdownItem>
        <DropdownItem key='copy'>Copy link</DropdownItem>
        <DropdownItem key='edit'>Edit file</DropdownItem>
        <DropdownItem key='delete' className='text-danger' color='danger'>
          Delete file
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}

export default UserDropdown
