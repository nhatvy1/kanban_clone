import { IconType } from 'react-icons'
import { Link, useLocation } from 'react-router-dom'

interface Props {
  title: string
  Icon: IconType
  href: string
  showTitle: boolean
}

const NavItem = ({ title, Icon, href = '#', showTitle }: Props) => {
  const { pathname } = useLocation()

  return (
    <li>
      <Link
        to={href}
        className={`flex items-center ${
          !showTitle && 'justify-center'
        } gap-x-2 ${
          href === pathname ? 'text-white' : 'text-[#abb9e8]'
        } py-3 px-5`}
      >
        <Icon className='text-xl' />
        <span className={showTitle ? 'block' : 'hidden'}>{title}</span>
      </Link>
    </li>
  )
}

export default NavItem
