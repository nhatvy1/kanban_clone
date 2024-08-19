import Header from "./header"
import Sidebar from "./sidebar"

const Layout = () => {
  return (
    <div className='flex'>
      <Sidebar />
      <div className="flex-1">
        <Header />
      </div>
    </div>
  )
}

export default Layout
