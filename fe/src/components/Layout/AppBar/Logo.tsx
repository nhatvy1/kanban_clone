import { GiFox } from 'react-icons/gi'

const Logo = () => {
  return (
    <div className='flex items-center gap-2 text-grayCustom'>
      <GiFox className='text-2xl' />
      <p className='text-xl font-semibold'>Foxy</p>
    </div>
  )
}

export default Logo
