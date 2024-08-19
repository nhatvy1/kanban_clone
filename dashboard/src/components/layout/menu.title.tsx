import { ReactNode } from 'react'

const MenuTitle = ({ children }: { children: ReactNode }) => {
  return (
    <li className='text-grayNormal text-[11px] uppercase py-2 px-5'>
      {children}
    </li>
  )
}

export default MenuTitle
