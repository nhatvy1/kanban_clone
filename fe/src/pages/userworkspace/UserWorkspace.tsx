import AppBar from '@/components/Layout/AppBar'
import SideBar from '@/components/Layout/SideBar'

const UserWorkspace = () => {
  return (
    <div>
      <AppBar />
      <div className='flex w-full h-board-content-height'>
        <SideBar />
        <div className='flex-1'></div>
      </div>
    </div>
  )
}

export default UserWorkspace
