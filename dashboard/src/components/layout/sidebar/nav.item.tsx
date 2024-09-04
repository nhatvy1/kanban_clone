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
    <li>
      {item.subMenu ? (
        <div className={`relative group ${!showTitle && 'justify-center'}`}>
          <Link
            to='#'
            className={`flex items-center ${
              showTitle ? 'justify-between' : 'justify-center'
            } cursor-pointer py-3 px-5 ${
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
              <MdOutlineKeyboardArrowRight
                className={`${isOpenSubMenu && 'rotate-90'} duration-300`}
              />
            </p>
          </Link>
          <div
            className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm
              ${
                showTitle
                  ? isOpenSubMenu
                    ? 'grid-rows-[1fr] opacity-100'
                    : 'grid-rows-[0fr] opacity-0'
                  : 'hidden group-hover:block group-hover:absolute top-0 left-full w-sidebar-open bg-primary'
              } z-50`}
          >
            <ul className={`pl-5 overflow-hidden`}>
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
        </div>
      ) : (
        <Link
          to={item.href}
          className={`flex items-center ${
            !showTitle && 'justify-center'
          } gap-x-2 ${
            pathname === item.href ? 'text-white' : 'text-[#abb9e8]'
          } py-3 px-5 group relative`}
        >
          <item.icon className='text-xl' />
          <span
            className={
              showTitle
                ? 'block'
                : 'hidden group-hover:block group-hover:absolute top-0 left-full w-sidebar-open text-nowrap py-3 px-5 bg-primary z-50'
            }
          >
            {item?.name}
          </span>
        </Link>
      )}
    </li>
  )
}

export default NavItem
