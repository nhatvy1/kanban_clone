import { Outlet } from 'react-router-dom'

const LayoutAdmin = () => {
  return (
    <div>
      <p>Sidebar</p>
      <p>Header</p>
      <Outlet />
    </div>
  )
}

export default LayoutAdmin
