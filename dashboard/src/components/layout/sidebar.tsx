import { Link } from 'react-router-dom'
import MenuTitle from './menu.title'
import NavItem from './nav.item'
import { LIST_NAV_ITEM } from '../../routers/links'

const Sidebar = () => {
  return (
    <div className='w-navbar h-dvh overflow-auto bg-primary'>
      <div>
        <Link to='/' className='sticky top-0 bg-primary z-50 flex text-white uppercase font-bold justify-center py-5 w-full'>
          DASHBOARD
        </Link>
        <ul>
          <MenuTitle>Menu</MenuTitle>
          {LIST_NAV_ITEM.map((item, index)=> (
            <NavItem title={item.name} Icon={item.icon} key={index}/>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
