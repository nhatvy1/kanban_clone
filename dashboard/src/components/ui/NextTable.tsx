import usePushQueryString from '@/hooks/usePushQueryString'
import useQueryString from '@/hooks/useQueryString'
import { limit_pagination } from '@/pages/team-managment/components/data'
import {
  Pagination,
  Select,
  SelectItem,
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow
} from '@nextui-org/react'
import { Key, useMemo, useState } from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'
import qs from 'query-string'

interface Props<T> {
  columns: { name: string; id: string }[]
  data: T
  totalResults?: number
  totalPages?: number
  renderCell: (item: T, columnKey: Key) => string | JSX.Element
  isLoading?: boolean
}

const NextTable = ({
  columns,
  data,
  totalResults = 0,
  totalPages = 1,
  renderCell,
  isLoading = false
}: Props<any>) => {
  const { page, limit } = useQueryString()
  const pushQueryString = usePushQueryString()
  const location = useLocation()

  const onChangePage = (page: number) => {
    const locationSearch = qs.parse(location.search)
    pushQueryString({ ...locationSearch, page: page, limit })
  }

  const onChangeSizePage = (limit: string) => {
    const locationSearch = qs.parse(location.search)
    pushQueryString({ ...locationSearch, page, limit: limit })
  }

  const pagination = useMemo(() => {
    return (
      <div className='flex items-center gap-4'>
        <Select
          aria-label='Limit pagination'
          placeholder='Select a limit'
          defaultSelectedKeys={[limit?.toString() || '15']}
          className='max-w-[120px]'
          classNames={{
            mainWrapper: 'h-9 border !rounded-md',
            trigger:
              'bg-transparent data-[hover=true]:bg-transparent rounded-none'
          }}
          onChange={(value) => onChangeSizePage(value.target.value)}
        >
          {limit_pagination.map((limit) => (
            <SelectItem key={limit.key}>{limit.label}</SelectItem>
          ))}
        </Select>
        <Pagination
          total={10}
          page={page ? parseInt(page.toString()) : 1}
          classNames={{
            wrapper: 'flex gap-2'
          }}
          radius='sm'
          showControls
          onChange={onChangePage}
        />
      </div>
    )
  }, [page, limit])

  return (
    <Table
      aria-label='Custom table nextui'
      classNames={{
        wrapper: 'p-0 shadow-none overflow-hidden',
        th: 'bg-white',
        tr: 'border-b h-10'
      }}
      radius='none'
      bottomContent={pagination}
    >
      <TableHeader>
        {columns.map((columns) => (
          <TableColumn key={columns.id}>{columns.name}</TableColumn>
        ))}
      </TableHeader>
      {/* {isLoading ? (
        <TableBody>
          {Array.from({ length: 10 }).map((_, index) => (
            <TableRow key={index}>
              {columns.map((column) => (
                <TableCell key={column.id}>
                  <Skeleton className='w-full h-10 bg-default-100' />
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      ) : ( */}
      <TableBody
        emptyContent='Không có dữ liệu'
        items={data}
        loadingContent={<Spinner size='lg' />}
        isLoading={isLoading}
      >
        {(item: any) => (
          <TableRow key={item?.id}>
            {(columnKey) => (
              <TableCell>{renderCell(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
      {/* )} */}
    </Table>
  )
}

export default NextTable
