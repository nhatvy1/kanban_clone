import { useState } from 'react'
import { Link } from 'react-router-dom'
import { RiMenu4Fill } from 'react-icons/ri'
import { GiFox } from 'react-icons/gi'

const HeaderHomePage = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className='sticky top-0 h-[70px] shadow-xl z-30 bg-white'>
      <div className='container mx-auto flex justify-between h-full items-center'>
        <Link to='#' className='flex items-center text-blue-500'>
          <GiFox className='text-4xl' />
          <span className='text-2xl font-bold'>Foxy</span>
        </Link>

        <nav>
          <div
            className='cursor-pointer lg:hidden'
            onClick={() => setIsOpen(!isOpen)}
          >
            <RiMenu4Fill className='text-3xl' />
          </div>
          <ul
            className={`fixed w-full ${
              isOpen ? 'h-[350px] p-6' : 'h-0'
            } bg-white overflow-hidden border-t top-[90px] left-0 right-0 flex flex-col gap-4 lg:relative lg:flex-row lg:items-center lg:p-0 lg:top-0 lg:border-none lg:h-full transition-all duration-300`}
          >
            <li>
              <Link to='#'>Home</Link>
            </li>
            <li>
              <Link to='#'>About</Link>
            </li>
            <li>
              <Link to='#'>Testimonials</Link>
            </li>
            <li>
              <Link to='#'>Our Work</Link>
            </li>
            <li>
              <Link to='#' className='px-[20px] block py-2 bg-blue-500 rounded-full text-white'>
              Đăng nhập
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default HeaderHomePage
