import ButtonHideSidebar from '../sidebar/button.hide.sidebar'
import ModeColor from './mode.color'
import UserDropdown from './user.dropdown'

const Header = () => {
  return (
    <div className='sticky top-0 flex items-center justify-between w-full h-header bg-white shadow-header px-5'>
      <div>
        <ButtonHideSidebar />
      </div>
      <div className='flex items-center gap-x-2'>
        <ModeColor />
        <UserDropdown />
      </div>
    </div>
  )
}

export default Header