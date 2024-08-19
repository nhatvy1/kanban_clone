import { IconType } from 'react-icons'
import { Link } from 'react-router-dom'

interface Props {
  title: string
  Icon: IconType
}

const NavItem = ({ title, Icon }: Props) => {
  return (
    <li>
      <Link to='/' className='flex items-center gap-x-2 text-[#abb9e8] py-3 px-5'>
        <Icon className='text-xl'/>
        <span>{title}</span>
      </Link>
    </li>
  )
}

export default NavItem
