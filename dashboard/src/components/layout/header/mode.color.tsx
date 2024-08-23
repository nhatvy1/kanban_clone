import { Button } from '@nextui-org/react'
import { MdOutlineNightlight } from 'react-icons/md'

const ModeColor = () => {
  return (
    <Button isIconOnly className='size-[42px] flex items-center justify-center hover:bg-[#f3f3f9] bg-transparent rounded-full'>
      <MdOutlineNightlight className='-rotate-45 text-2xl' />
    </Button>
  )
}

export default ModeColor
