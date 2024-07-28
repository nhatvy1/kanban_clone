import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'
import { Button } from '../ui/button'
import { Menu } from 'lucide-react'
import Link from 'next/link'
import { ListMenu } from './data'

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size='icon' variant='outline' className='sm:hidden'>
          <Menu className='h-5 w-5' />
          <span className='sr-only'>Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side='left'
        className='sm:max-w-xs'
        aria-describedby={undefined}
      >
        <SheetTitle className='hidden'>Sheet Content</SheetTitle>
        <SheetDescription className='hidden' />
        <nav className='grid gap-6 text-lg font-medium'>
          {ListMenu.map((item) => (
            <SheetTrigger asChild key={item.id}>
              <Link
                href={item.href}
                className='flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground'
              >
                <item.icon className='h-5 w-5' />
                {item.label}
              </Link>
            </SheetTrigger>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav
