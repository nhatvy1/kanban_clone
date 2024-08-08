'use client'

import NextTable from '@/components/commons/NextTable'
import { IUser } from '@/types/user.type'
import { ColumnDef } from '@tanstack/react-table'
import momemt from 'moment'
import { BadgeX, Pencil } from 'lucide-react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip'
import { useState } from 'react'
import UpdateUser from './UpdateUser'

const UserTable = ({ data }: { data: IUser[] }) => {
  const [isOpenEdit, setIsOpenEdit] = useState(false)
  const [currentUser, setCurrentUser] = useState<IUser | undefined>(undefined)

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
                  <Pencil
                    size={16}
                    className='cursor-pointer'
                    onClick={() => handleEditUser(row.original)}
                  />
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

  const handleEditUser = (data: IUser) => {
    setIsOpenEdit(true)
    setCurrentUser(data)
  }

  const handleCloseEditUser = () => {
    setIsOpenEdit(false)
    setCurrentUser(undefined)
  }

  return (
    <div>
      <NextTable data={data} columns={columns} />

      <UpdateUser
        data={currentUser}
        open={isOpenEdit}
        onClose={handleCloseEditUser}
      />
    </div>
  )
}

export default UserTable
