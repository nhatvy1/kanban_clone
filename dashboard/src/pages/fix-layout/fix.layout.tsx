import { useState } from 'react'
import { CgMenuLeft } from 'react-icons/cg'
import { PiUserSwitchThin } from 'react-icons/pi'

const FixLayout = () => {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false)

  const toggleSidebar = () => {
    setIsOpenSidebar(!isOpenSidebar)
  }

  return (
    <div className='flex'>
      <div
        className={`${
          isOpenSidebar ? 'w-[80px]' : 'w-[250px]'
        } h-dvh duration-200 bg-primary overflow-auto`}
      >
        <div className='sticky bg-primary top-0 text-center py-5'>Logo</div>
        {Array.from({ length: 20 }, (_, index) => (
          <div className='py-3 px-5 flex items-center gap-2 text-white '>
            <PiUserSwitchThin className='text-2xl'/>
            <span className={!isOpenSidebar ? 'block' : 'hidden'}>
              Quản lý người dùng {index + 1}
            </span>
          </div>
        ))}
      </div>
      <div className='flex-1'>
        <header className='h-[65px] flex items-center justify-between px-5 shadow-lg w-full'>
          <div>
            <CgMenuLeft
              size={30}
              className='text-grayNormal cursor-pointer'
              onClick={toggleSidebar}
            />
          </div>
        </header>
        <div className='p-5'>
          <h1>Fix layout</h1>
        </div>
      </div>
    </div>
  )
}

export default FixLayout
