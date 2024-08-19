import { Button } from '@nextui-org/react'
import { MdOutlineNightlight } from 'react-icons/md'

const ModeColor = () => {
  return (
    <Button isIconOnly className='size-[42px] flex items-center justify-center bg-[#f3f3f9] rounded-full'>
      <MdOutlineNightlight className='-rotate-45 text-xl' />
    </Button>
  )
}

export default ModeColor
