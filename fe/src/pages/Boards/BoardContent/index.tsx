import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { MouseEvent, useState } from 'react'
import Menu from '@mui/material/Menu'
import Divider from '@mui/material/Divider'
import MenuItem from '@mui/material/MenuItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import ContentCut from '@mui/icons-material/ContentCut'
import Cloud from '@mui/icons-material/Cloud'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Tooltip from '@mui/material/Tooltip'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import ContentCopy from '@mui/icons-material/ContentCopy'
import ContentPaste from '@mui/icons-material/ContentPaste'
import AddCardIcon from '@mui/icons-material/AddCard'
import DragHandleIcon from '@mui/icons-material/DragHandle'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import GroupIcon from '@mui/icons-material/Group'
import ModeCommentIcon from '@mui/icons-material/ModeComment'
import AttachmentIcon from '@mui/icons-material/Attachment'

const columns_header_height = '50px'
const columns_footer_height = '56px'

const BoardContent = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: MouseEvent<HTMLSpanElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <Box
      sx={{
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
        width: '100%',
        height: (theme) => theme.trello.boardContentHeight,
        p: '10px 0'
      }}
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
        {/* Columns 1 */}
        <Box
          sx={{
            minWidth: '300px',
            maxWidth: '300px',
            bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#333643' : '#ebecf0'),
            ml: 2,
            borderRadius: '6px',
            height: 'fit-content',
            maxHeight: (theme) => `calc(${theme.trello.boardContentHeight} - ${theme.spacing(5)})`
          }}
        >
          {/* Box column header */}
          <Box
            sx={{
              height: columns_header_height,
              p: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <Typography sx={{ fontWeight: 'bold', cursor: 'pointer' }}>Column Title</Typography>
            <Box>
              <Tooltip title='More options'>
                <Typography
                  component='span'
                  id='basic-menu-dropdown'
                  aria-controls={open ? 'basic-menu-column-dropdown' : undefined}
                  aria-haspopup='true'
                  aria-expanded={open ? 'true' : undefined}
                  onClick={(e) => handleClick(e)}
                  sx={{ color: 'text.primary', cursor: 'pointer' }}
                >
                  <ExpandMoreIcon />
                </Typography>
              </Tooltip>
              <Menu
                id='basic-menu-workspaces'
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button-workspaces'
                }}
              >
                <MenuItem>
                  <ListItemIcon>
                    <AddCardIcon fontSize='small' />
                  </ListItemIcon>
                  <ListItemText>Add new card</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <ContentCut fontSize='small' />
                  </ListItemIcon>
                  <ListItemText>Cut</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <ContentCopy fontSize='small' />
                  </ListItemIcon>
                  <ListItemText>Copy</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <ContentPaste fontSize='small' />
                  </ListItemIcon>
                  <ListItemText>Paste</ListItemText>
                </MenuItem>
                <Divider />
                <MenuItem>
                  <ListItemIcon>
                    <DeleteForeverIcon fontSize='small' />
                  </ListItemIcon>
                  <ListItemText>Remove this column</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <Cloud fontSize='small' />
                  </ListItemIcon>
                  <ListItemText>Archive this column</ListItemText>
                </MenuItem>
              </Menu>
            </Box>
          </Box>

          {/* Box column list card */}
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
                `calc(${theme.trello.boardContentHeight} - ${theme.spacing(
                  5
                )} - ${columns_header_height} - ${columns_footer_height} )`,
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
            <Card
              sx={{
                cursor: 'pointer',
                boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
                overflow: 'unset'
              }}
            >
              <CardMedia
                sx={{ height: 140 }}
                image='https://res.cloudinary.com/metavere/image/upload/v1709203095/banner-about-us_miwelr.png'
                title='green iguana'
              />
              <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
                <Typography>Lizard</Typography>
              </CardContent>
              <CardActions sx={{ p: '0 4px 8px 4px' }}>
                <Button size='small' startIcon={<GroupIcon />}>
                  20
                </Button>
                <Button size='small' startIcon={<ModeCommentIcon />}>
                  20
                </Button>
                <Button size='small' startIcon={<AttachmentIcon />}>
                  20
                </Button>
              </CardActions>
            </Card>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item, index) => (
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
            ))}
          </Box>

          {/* Box column footer */}
          <Box
            sx={{
              height: columns_footer_height,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              p: 2
            }}
          >
            <Button startIcon={<AddCardIcon />}>Addd new card</Button>
            <Tooltip title='Drag to move'>
              <DragHandleIcon sx={{ cursor: 'pointer' }} />
            </Tooltip>
          </Box>
        </Box>

        {/* Columns 2 */}
        <Box
          sx={{
            minWidth: '300px',
            maxWidth: '300px',
            bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#333643' : '#ebecf0'),
            ml: 2,
            borderRadius: '6px',
            height: 'fit-content',
            maxHeight: (theme) => `calc(${theme.trello.boardContentHeight} - ${theme.spacing(5)})`
          }}
        >
          {/* Box column header */}
          <Box
            sx={{
              height: columns_header_height,
              p: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <Typography sx={{ fontWeight: 'bold', cursor: 'pointer' }}>Column Title</Typography>
            <Box>
              <Tooltip title='More options'>
                <Typography
                  component='span'
                  id='basic-menu-dropdown'
                  aria-controls={open ? 'basic-menu-column-dropdown' : undefined}
                  aria-haspopup='true'
                  aria-expanded={open ? 'true' : undefined}
                  onClick={(e) => handleClick(e)}
                  sx={{ color: 'text.primary', cursor: 'pointer' }}
                >
                  <ExpandMoreIcon />
                </Typography>
              </Tooltip>
              <Menu
                id='basic-menu-workspaces'
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button-workspaces'
                }}
              >
                <MenuItem>
                  <ListItemIcon>
                    <AddCardIcon fontSize='small' />
                  </ListItemIcon>
                  <ListItemText>Add new card</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <ContentCut fontSize='small' />
                  </ListItemIcon>
                  <ListItemText>Cut</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <ContentCopy fontSize='small' />
                  </ListItemIcon>
                  <ListItemText>Copy</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <ContentPaste fontSize='small' />
                  </ListItemIcon>
                  <ListItemText>Paste</ListItemText>
                </MenuItem>
                <Divider />
                <MenuItem>
                  <ListItemIcon>
                    <DeleteForeverIcon fontSize='small' />
                  </ListItemIcon>
                  <ListItemText>Remove this column</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <Cloud fontSize='small' />
                  </ListItemIcon>
                  <ListItemText>Archive this column</ListItemText>
                </MenuItem>
              </Menu>
            </Box>
          </Box>

          {/* Box column list card */}
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
                `calc(${theme.trello.boardContentHeight} - ${theme.spacing(
                  5
                )} - ${columns_header_height} - ${columns_footer_height} )`,
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
            <Card
              sx={{
                cursor: 'pointer',
                boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
                overflow: 'unset'
              }}
            >
              <CardMedia
                sx={{ height: 140 }}
                image='https://res.cloudinary.com/metavere/image/upload/v1709203095/banner-about-us_miwelr.png'
                title='green iguana'
              />
              <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
                <Typography>Lizard</Typography>
              </CardContent>
              <CardActions sx={{ p: '0 4px 8px 4px' }}>
                <Button size='small' startIcon={<GroupIcon />}>
                  20
                </Button>
                <Button size='small' startIcon={<ModeCommentIcon />}>
                  20
                </Button>
                <Button size='small' startIcon={<AttachmentIcon />}>
                  20
                </Button>
              </CardActions>
            </Card>
            <Card
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
          </Box>

          {/* Box column footer */}
          <Box
            sx={{
              height: columns_footer_height,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              p: 2
            }}
          >
            <Button startIcon={<AddCardIcon />}>Addd new card</Button>
            <Tooltip title='Drag to move'>
              <DragHandleIcon sx={{ cursor: 'pointer' }} />
            </Tooltip>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default BoardContent
