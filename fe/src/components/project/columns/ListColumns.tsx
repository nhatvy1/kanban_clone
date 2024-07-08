import Box from '@mui/material/Box'
import Column from './Column'
import Button from '@mui/material/Button'
import NoteAddIcon from '@mui/icons-material/NoteAdd'

import { SortableContext, horizontalListSortingStrategy } from '@dnd-kit/sortable'

/**
 * Thằng SortableContext yêu cầu items là một mảng dạng [1, 2, 3]
 * chứ ko phải dạng array of object [{id: 1}, {id: 2}, {id: 3}]
 * Nếu ko đúng thì vẫn có thể  kéo thả được nhưng ko có
 * animation
 */

const ListColumns = ({ columns }: any) => {
  return (
    <SortableContext
      items={columns?.map((column: any) => column._id)}
      strategy={horizontalListSortingStrategy}
    >
      <Box
        sx={{
          bgcolor: 'inherit',
          width: '100%',
          height: '100%',
          display: 'flex',
          overflowX: 'auto',
          overflowY: 'hidden',
          '&::-webkit-scrollbar-track': {
            m: 2
          }
        }}
      >
        {columns?.map((column: any) => (
          <Column key={column._id} column={column} />
        ))}

        {/* Add new column */}
        <Box
          sx={{
            minWidth: '200px',
            maxWidth: '200px',
            mx: 2,
            borderRadius: '6px',
            height: 'fit-content',
            bgcolor: '#ffffff3d'
          }}
        >
          <Button
            startIcon={<NoteAddIcon />}
            sx={{
              color: 'white',
              width: '100%',
              justifyContent: 'flex-start',
              pl: 2.5,
              py: 1
            }}
          >
            Add new column
          </Button>
        </Box>
      </Box>
    </SortableContext>
  )
}

export default ListColumns
