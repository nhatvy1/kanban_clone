import Box from '@mui/material/Box'
import Card from './Card'

const ListCards = ({ cards }: any) => {
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
      {cards?.map((card: any)=> (
        <Card key={card?._id} card={card}/>
      ))}
    </Box>
  )
}

export default ListCards
