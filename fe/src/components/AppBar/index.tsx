import Box from '@mui/material/Box'
import ModeSelect from '../ModeSelect'
import AppsIcon from '@mui/icons-material/Apps'
import TrelloIcon from '../Icons/TrelloIcon'
import Typography from '@mui/material/Typography'
import Workspaces from './Menus/Workspaces'
import Recent from './Menus/Recent'
import Starred from './Menus/Starred'
import Templates from './Menus/Templates'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Profiles from './Menus/Profiles'
import Badge from '@mui/material/Badge'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Tooltip from '@mui/material/Tooltip'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

const AppBar = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: (theme) => theme.trello.appBarHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 10px'
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <AppsIcon sx={{ color: 'primary.main' }} />
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <TrelloIcon sx={{ color: 'primary.main' }} />
          <Typography
            component='span'
            sx={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'primary.main' }}
          >
            Trello
          </Typography>
        </Box>

        <Workspaces />
        <Recent />
        <Starred />
        <Templates />

        <Button variant='outlined'>Create</Button>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <TextField id='outlined-search' label='Search...' size='small' type='search' />
        <ModeSelect />

        <Tooltip title="Notification">
          <Badge color='primary' variant='dot' sx={{ cursor: 'pointer' }}>
            <NotificationsNoneIcon />
          </Badge>
        </Tooltip>
        <Tooltip title="Notification">
          <Badge color='primary' variant='dot' sx={{ cursor: 'pointer' }}>
            <HelpOutlineIcon />
          </Badge>
        </Tooltip>

        <Profiles />
      </Box>
    </Box>
  )
}

export default AppBar
