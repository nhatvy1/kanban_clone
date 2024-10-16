import { Badge, Button } from '@nextui-org/react'
import Logo from './Logo'
import Workspaces from './Workspaces'
import Starred from './Starred'
import Recent from './Recent'
import Templates from './Template'
import NextInput from '@/components/ui/NextInput'
import { CiBellOn, CiSearch } from 'react-icons/ci'
import { TfiHelpAlt } from 'react-icons/tfi'
import Profiles from './Profiles'

const AppBar = () => {
  return (
    <div className='w-full h-app-bar-height px-2 flex-between-center border-b'>
      <div className='flex items-center gap-2'>
        <Logo />
        <Workspaces />
        <Recent />
        <Starred />
        <Templates />
        <Button
          className='!scale-100 bg-light text-white font-semibold rounded-[5px]'
          size='sm'
        >
          Create
        </Button>
      </div>

      <div className='flex items-center gap-2'>
        <NextInput
          className='!mt-0'
          startContent={<CiSearch />}
          size='sm'
          placeholder='Search'
        />

        <Badge color='danger' isInvisible={false}>
          <CiBellOn className='text-grayCustom text-xl' />
        </Badge>

        <Badge color='danger' content='' isInvisible={false}>
          <TfiHelpAlt className='text-grayCustom' />
        </Badge>

        <Profiles />
      </div>
    </div>
  )
}

export default AppBar
