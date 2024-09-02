import { fetchTeams } from '@/apiRequest/team'
import NextTable from '@/components/ui/NextTable'
import { ITeam } from '@/types/team.type'
import { Key, useCallback, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { columns } from './components/data'
import moment from 'moment'
import { Tooltip } from '@nextui-org/react'
import { EditIcon } from '@/components/icons/edit.icon'
import { DeleteIcon } from '@/components/icons/delete.icon'

const TeamManagementPage = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState<ITeam[]>([])
  const [searchParams] = useSearchParams()

  const getTeams = async () => {
    try {
      setIsLoading(true)
      setTimeout(() => {}, 10000)
      const res = await fetchTeams(searchParams.toString())
      setData(res.result)
    } catch (e: any) {
      toast.error(e)
    } finally {
      setIsLoading(false)
    }
  }

  const renderCell = useCallback((team: ITeam, columnKey: Key) => {
    const cellValue = team[columnKey as keyof ITeam]

    switch (columnKey) {
      case 'createdAt':
        return <span>{moment(cellValue).format('hh:mm DD/MM/YYYY')}</span>
      case 'actions':
        return (
          <div className='relative flex items-center gap-4'>
            <Tooltip content='Cập nhật team'>
              <span className='text-lg text-default-400 cursor-pointer active:opacity-50'>
                <EditIcon />
              </span>
            </Tooltip>
            <Tooltip color='danger' content='Xóa team'>
              <span className='text-lg text-danger cursor-pointer active:opacity-50'>
                <DeleteIcon />
              </span>
            </Tooltip>
          </div>
        )
      default:
        return cellValue
    }
  }, [])

  useEffect(() => {
    getTeams()
  }, [searchParams])

  return (
    <div>
      <NextTable
        columns={columns}
        data={data}
        renderCell={renderCell}
        isLoading={isLoading}
        totalPages={1}
      />
    </div>
  )
}

export default TeamManagementPage
