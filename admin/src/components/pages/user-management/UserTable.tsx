'use client'

import NextTable from '@/components/commons/NextTable'
import { IUser } from '@/types/user.type'
import { ColumnDef } from '@tanstack/react-table'
import Image from 'next/image'
import momemt from 'moment'
import { BadgeX, Pencil } from 'lucide-react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip'

const UserTable = ({ data }: { data: IUser[] }) => {
  const columns: ColumnDef<IUser>[] = [
    {
      accessorKey: 'id',
      header: 'ID'
    },
    {
      accessorKey: 'email',
      header: 'Email'
    },
    {
      accessorKey: 'fullName',
      header: 'Fullname'
    },
    {
      accessorKey: 'avatar',
      header: 'Avatar',
      cell: ({ row }) => {
        return (
          <Image
            src='https://github.com/shadcn.png'
            alt='Loi anh'
            width={40}
            height={40}
            className='rounded-full'
          />
        )
      }
    },
    {
      accessorKey: 'status',
      header: 'Status'
    },
    {
      accessorKey: 'createdAt',
      header: 'Created At',
      cell: ({ row }) => {
        const createdAt = momemt(row.original.createdAt).format(
          'hh:mm DD/MM/YYYY'
        )
        return <span>{createdAt}</span>
      }
    },
    {
      accessorKey: '',
      header: 'Action',
      cell: ({ row }) => {
        return (
          <div className='flex items-center gap-x-4'>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Pencil size={16} className='cursor-pointer' />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Edit user</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <BadgeX size={16} className='cursor-pointer' />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Delete user</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        )
      }
    }
  ]

  return (
    <div>
      <NextTable data={data} columns={columns} />
    </div>
  )
}

export default UserTable
