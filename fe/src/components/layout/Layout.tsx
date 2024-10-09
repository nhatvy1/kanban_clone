import { Outlet } from 'react-router-dom'
import Header from './header/header'
import Sidebar from './sidebar/sidebar'

const Layout = () => {
  return (
    <div className='flex'>
      <Sidebar />
      <div className='flex-1'>
        <Header />
        <div className='p-5'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Layout
