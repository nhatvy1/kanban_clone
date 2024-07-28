import Link from 'next/link'
import NavItem from './nav.item'
import { Settings } from 'lucide-react'
import { VercelLogo } from '../icons/icons'
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip'
import { ListMenu } from './data'

const DesktopNav = () => {

  return (
    <aside className='fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex'>
      <nav className='flex flex-col items-center gap-4 px-2 sm:py-5'>
        <Link
          href='https://vercel.com/templates/next.js/admin-dashboard-tailwind-postgres-react-nextjs'
          className='group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base'
        >
          <VercelLogo className='h-3 w-3 transition-all group-hover:scale-110' />
          <span className='sr-only'>Acme Inc</span>
        </Link>

        {ListMenu.map((item) => (
          <NavItem href={item.href} label={item.label} key={item.id}>
            <item.icon className='h-5 w-5' />
          </NavItem>
        ))}
      </nav>
      <nav className='mt-auto flex flex-col items-center gap-4 px-2 sm:py-5'>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href='#'
              className='flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8'
            >
              <Settings className='h-5 w-5' />
              <span className='sr-only'>Settings</span>
            </Link>
          </TooltipTrigger>
          <TooltipContent
            side='right'
            className='bg-white shadow-xl border text-black text-base'
          >
            Settings
          </TooltipContent>
        </Tooltip>
      </nav>
    </aside>
  )
}

export default DesktopNav
