import { useState } from 'react'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { Link, useLocation } from 'react-router-dom'

interface Props {
  item: any
  showTitle: boolean
}

const NavItem = ({ item, showTitle }: Props) => {
  const [isOpenSubMenu, setIsOpenSubMenu] = useState(false)
  const { pathname } = useLocation()

  const activeLink = item?.subMenu?.some((sub: any) => sub.href === pathname)

  return (
    <li className='relative'>
      {item.subMenu ? (
        <div className={`${!showTitle && 'justify-center'}`}>
          <Link to='#'
            className={`flex items-center ${showTitle ? 'justify-between': 'justify-center'} cursor-pointer py-3 px-5 ${
              activeLink ? 'text-white' : 'text-[#abb9e8]'
            }`}
            onClick={() => setIsOpenSubMenu(!isOpenSubMenu)}
          >
            <p className='flex items-center gap-x-2'>
              <item.icon className='text-xl' />
              <span className={showTitle ? 'block' : 'hidden'}>
                {item?.name}
              </span>
            </p>
            <p className={`${showTitle ? 'block' : 'hidden'}`}>
              <MdOutlineKeyboardArrowRight />
            </p>
          </Link>
          <ul
            className={`pl-5 ${!showTitle && ('hidden')} ${
              isOpenSubMenu ? 'h-full' : 'h-0'
            } overflow-hidden`}
          >
            {item.subMenu.map((sub: any, index: any) => (
              <li key={index}>
                <Link
                  to={sub.href}
                  className={`relative block text-sm py-2 px-5 before:absolute before:left-0 before:content-["-"] ${
                    sub.href === pathname ? 'text-white' : 'text-[#abb9e8]'
                  }`}
                >
                  {sub?.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <Link
          to={item.href}
          className={`flex items-center ${
            !showTitle && 'justify-center'
          } gap-x-2 ${
            item.href === pathname ? 'text-white' : 'text-[#abb9e8]'
          } py-3 px-5 group`}
        >
          <item.icon className='text-xl' />
          <span className={showTitle ? 'block' : 'hidden'}>{item?.name}</span>
        </Link>
      )}
    </li>
  )
}

export default NavItem
