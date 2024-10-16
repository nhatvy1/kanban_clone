import { GiFox } from 'react-icons/gi'

const SideBar = () => {
  return (
    <div className='w-[260px] h-full border-r'>
      <div>
        <div className='flex items-center gap-2 text-grayCustom'>
        <SiKahoot />
          <p className='text-xl font-semibold'>Foxy</p>
        </div>
      </div>
    </div>
  )
}

export default SideBar
