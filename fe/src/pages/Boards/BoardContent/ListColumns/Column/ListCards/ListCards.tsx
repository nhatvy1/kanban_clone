import Box from '@mui/material/Box'
import Card from './Card/Card'

const ListCards = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        p: '0 5px',
        m: '0 5px',
        overflowX: 'hidden',
        overflowY: 'auto',
        maxHeight: (theme) =>
          `calc(${theme.trello.boardContentHeight} - ${theme.spacing(5)} - ${
            theme.trello.columnHeaderHeight
          } - ${theme.trello.columnFooterHeight} )`,
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: '#C0C0C0',
          borderRadius: '4px'
        },
        '&::-webkit-scrollbar-thumb:hover': {
          background: '#808080',
          borderRadius: '4px'
        }
      }}
    >
      <Card />
      <Card temporaryHideMedia />
      {/* {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item, index) => (
        <Card
          key={index}
          sx={{
            cursor: 'pointer',
            boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
            overflow: 'unset'
          }}
        >
          <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
            <Typography>Lizard</Typography>
          </CardContent>
        </Card>
      ))} */}
    </Box>
  )
}

export default ListCards
