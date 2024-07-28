'use client'

import Link from 'next/link'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator
} from '../ui/breadcrumb'
import { usePathname } from 'next/navigation'
import { ListMenu } from './data'

const DashboardBreadcrumb = () => {
  const pathname = usePathname()

  const breadcrumbByPathname = ListMenu.find((item) => item.href === pathname)

  return (
    <Breadcrumb className='hidden md:flex'>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href='/'>Trang chủ</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        {breadcrumbByPathname && breadcrumbByPathname.href !== '/' && (
          <>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href='#'>{breadcrumbByPathname.label}</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  )
}

export default DashboardBreadcrumb
