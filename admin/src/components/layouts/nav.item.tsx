'use client'

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from '@/components/ui/tooltip'
import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

export function NavItem({
  href,
  label,
  children
}: {
  href: string
  label: string
  children: ReactNode
}) {
  const pathname = usePathname()

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link
          href={href}
          className={clsx(
            'flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8',
            {
              'bg-accent text-black': pathname === href
            }
          )}
        >
          {children}
          <span className='sr-only'>{label}</span>
        </Link>
      </TooltipTrigger>
      <TooltipContent
        side='right'
        className='bg-white shadow-xl border text-black text-base'
      >
        {label}
      </TooltipContent>
    </Tooltip>
  )
}

export default NavItem
