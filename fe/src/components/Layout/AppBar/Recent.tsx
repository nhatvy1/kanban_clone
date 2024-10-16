import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger
} from '@nextui-org/react'
import { IoIosArrowDown } from 'react-icons/io'

const Recent = () => {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          size='sm'
          radius='none'
          endContent={<IoIosArrowDown className='text-lg' />}
          className='bg-transparent hover:bg-gray-300 !py-1 !px-2 text-sm font-semibold text-grayCustom !scale-100'
        >
          Recent
        </Button>
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

export default Recent
