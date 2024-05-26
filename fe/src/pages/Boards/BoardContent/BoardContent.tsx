import { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import ListColumns from './ListColumns/ListColumns'
import { mapOrder } from '~/utils/sorts'

import {
  DndContext,
  DragEndEvent,
  PointerSensor,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors
} from '@dnd-kit/core'
import { arrayMove } from '@dnd-kit/sortable'

const BoardContent = ({ board }: any) => {
  const pointerSensor = useSensor(PointerSensor, {
    activationConstraint: { distance: 10 }
  })

  // Yếu cầu di chuyển chuột 10px thù mới kích hoạt event, fix trường hợp click bị gọi event
  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: { distance: 10 }
  })

  // nhấn giữ 250ms và dung sai của cảm ứng (chênh lệch 5px) thì mới kích hoạt
  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: { delay: 250, tolerance: 500 }
  })

  const mySensors = useSensors(mouseSensor, touchSensor)

  const [orderedColumns, setOrderColumns] = useState<any>([])

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event

    // Kiểm tra nếu ko tồn tại over thì return
    if (!over) return

    if (active.id !== over?.id) {
      // Lấy vị trí cũ từ thằng active
      const oldIndex = orderedColumns.findIndex(
        (column: any) => column._id === active.id
      )
      // Lấy vị trí cũ mới từ thằng over
      const newIndex = orderedColumns.findIndex(
        (column: any) => column._id === over?.id
      )

      // Dùng arrayMove để sắp xếp lại sắp xếp lại mảng columns ban đầu
      const dndOrderedColumns = arrayMove(orderedColumns, oldIndex, newIndex)
      // const dndOrderedColumnsIds = dndOrderedColumns.map((column: any) => column._id)
      // console.log(dndOrderedColumnsIds)
      setOrderColumns(dndOrderedColumns)
    }
  }

  useEffect(() => {
    setOrderColumns(mapOrder(board?.columns, board?.columnOrderIds, '_id'))
  }, [board])

  return (
    <DndContext onDragEnd={handleDragEnd} sensors={mySensors}>
      <Box
        sx={{
          bgcolor: (theme) =>
            theme.palette.mode === 'dark' ? '#34495e' : '#1976d2',
          width: '100%',
          height: (theme) => theme.trello.boardContentHeight,
          p: '10px 0'
        }}
      >
        <ListColumns columns={orderedColumns} />
      </Box>
    </DndContext>
  )
}

export default BoardContent
