import { Outlet } from 'react-router-dom'
import Header from './header/header'
import Sidebar from './sidebar/sidebar'

const Layout = () => {
  return (
    <div className='flex'>
      <Sidebar />
      <div className='flex-1 overflow-auto'>
        <Header />
        <div className='p-5 h-[calc(100vh_-_70px)]'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Layout
