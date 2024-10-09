import NextTable from '@/components/ui/NextTable'
import { ITeam } from '@/types/team.type'
import { Key, useCallback, useEffect, useState } from 'react'
import { columns } from './components/data'
import moment from 'moment'
import { Button, Tooltip } from '@nextui-org/react'
import { EditIcon } from '@/components/icons/EditIcon'
import { DeleteIcon } from '@/components/icons/DeleteIcon'
import NextInput from '@/components/ui/NextInput'
import { CiSearch } from 'react-icons/ci'
import useQueryString from '@/hooks/useQueryString'
import usePushQueryString from '@/hooks/usePushQueryString'
import { debounce } from 'lodash'
import AddEditTeam from './components/AddEditTeam'
import { useGetTeamsQuery } from '@/redux/query/team.query'
import { useSearchParams } from 'react-router-dom'

const TeamManagementPage = () => {
  const [searchParams] = useSearchParams()
  const { data, isFetching } = useGetTeamsQuery({
    filter: searchParams.toString()
  })

  const [isOpenAddEdit, setIsOpenAddEdit] = useState(false)
  const [team, setTeam] = useState<ITeam | null>(null)

  const { page, limit } = useQueryString()
  const pushQueryString = usePushQueryString()

  const renderCell = useCallback((team: ITeam, columnKey: Key) => {
    const cellValue = team[columnKey as keyof ITeam]

    switch (columnKey) {
      case 'createdAt':
        return <span>{moment(cellValue).format('hh:mm DD/MM/YYYY')}</span>
      case 'actions':
        return (
          <div className='relative flex items-center gap-4'>
            <Tooltip content='Cập nhật team'>
              <span
                className='text-lg text-default-400 cursor-pointer active:opacity-50'
                onClick={() => setIsOpenAddEdit(true)}
              >
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

  const onChangeInput = debounce((valueInput: string) => {
    pushQueryString({
      page,
      limit,
      search: valueInput
    })
  }, 500)

  const handleOpenAddEdit = (team: ITeam | null) => {
    setIsOpenAddEdit(true)
    setTeam(null)
  }

  return (
    <div>
      <div className='mb-4 flex items-center gap-x-3'>
        <NextInput
          placeholder='Tìm kiếm theo tên team'
          aria-label='Tìm kiếm theo team'
          onChange={(e) => onChangeInput(e.target.value)}
          endContent={<CiSearch className='text-2xl' />}
          className='max-w-[300px] !mt-0'
        />
        <Button
          className='bg-transparent border bg-primary text-white rounded-[5px]'
          onPress={() => handleOpenAddEdit(null)}
        >
          Thêm mới
        </Button>
      </div>
      <NextTable
        columns={columns}
        data={data?.result || []}
        renderCell={renderCell}
        isLoading={isFetching}
        totalPages={1}
      />

      <AddEditTeam
        isOpen={isOpenAddEdit}
        setIsOpen={setIsOpenAddEdit}
        team={team}
        setTeam={setTeam}
      />
    </div>
  )
}

export default TeamManagementPage
