import { useAppDispatch } from '@/hooks/useAppDispatch'
import { handleSidebar } from '@/redux/slices/layout.slice'
import { RootState } from '@/redux/store'
import { HiOutlineBars3BottomLeft } from 'react-icons/hi2'
import { MdOutlineArrowRightAlt } from 'react-icons/md'
import { useSelector } from 'react-redux'

const ButtonHideSidebar = () => {
  const { isOpenSidebar } = useSelector((state: RootState) => state.layout)
  const dispatch = useAppDispatch()

  const toggleSidebar = () => {
    dispatch(handleSidebar())
  }
  return (
    <button onClick={toggleSidebar}>
      {isOpenSidebar ? (
        <HiOutlineBars3BottomLeft size={30} className='text-grayNormal' />
      ) : (
        <MdOutlineArrowRightAlt size={30} className='text-grayNormal' />
      )}
    </button>
  )
}

export default ButtonHideSidebar
