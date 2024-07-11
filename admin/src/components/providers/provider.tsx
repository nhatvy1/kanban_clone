'use client'

import { ReactNode } from 'react'
import { TooltipProvider } from '../ui/tooltip'

const Providers = ({ children }: { children: ReactNode }) => {
  return <TooltipProvider>{children}</TooltipProvider>
}

export default Providers