import { Link } from 'react-router-dom'
import MenuTitle from './menu.title'
import NavItem from './nav.item'
import { RootState } from '@/redux/store'
import { useSelector } from 'react-redux'
import { LIST_NAV_ITEM } from '@/routers/links'

const Sidebar = () => {
  const { isOpenSidebar } = useSelector((state: RootState) => state.layout)

  return (
    <div
      className={`${
        isOpenSidebar ? 'w-navbar' : 'w-[80px]'
      } overflow-x-hidden duration-200 min-h-dvh overflow-auto bg-primary`}
    >
      <div>
        <Link
          to='/'
          className='sticky top-0 bg-primary z-50 flex text-white uppercase font-bold justify-center py-5 w-full'
        >
          {isOpenSidebar ? (
            <span className='tracking-[5px]'>DASHBOARD</span>
          ) : (
            <img src='/vite.svg' alt='Loi anh' />
          )}
        </Link>
        <ul>
          <MenuTitle>Menu</MenuTitle>
          {LIST_NAV_ITEM.map((item, index) => (
            <NavItem item={item} key={index} showTitle={isOpenSidebar} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
