import { Outlet } from 'react-router-dom'
import Header from './header/header'
import Sidebar from './sidebar/sidebar'

const Layout = () => {
  return (
    <div className='flex'>
      <Sidebar />
      <div className='flex-1 overflow-y-auto'>
        <Header />
        <div className='p-5 h-[calc(100vh_-_80px)] max-[1200px]:w-[1200px]'>
          <Outlet />
          <div className='h-[10px]'>
            Fix layout
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout
