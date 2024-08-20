import { HiOutlineBars3BottomLeft } from 'react-icons/hi2'
import { useAppDispatch } from '@/hooks/useAppDispatch'
import { handleSidebar } from '@/redux/slices/sidebar.slice'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import { MdOutlineArrowRightAlt } from 'react-icons/md'

const ButtonHideSidebar = () => {
  const { isOpenSidebar } = useSelector((state: RootState) => state.layout)
  const dispatch = useAppDispatch()

  const toggleSidebar = () => {
    dispatch(handleSidebar())
  }

  return (
    <button onClick={toggleSidebar}>
      {isOpenSidebar ? (
        <HiOutlineBars3BottomLeft size={30} />
      ) : (
        <MdOutlineArrowRightAlt size={30} />
      )}
    </button>
  )
}

export default ButtonHideSidebar
