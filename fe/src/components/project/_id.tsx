import Container from '@mui/material/Container'
import BoardBar from './Boards/BoardBar'
import AppBar from '~/components/AppBar/AppBar'
import { mockData } from '~/apis/mock-data'
import BoardContent from './Boards/BoardContent'

const Board = () => {
  return (
    <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
      <AppBar />
      <BoardBar board={mockData?.board} />
      <BoardContent board={mockData?.board}/>
    </Container>
  )
}

export default Board
