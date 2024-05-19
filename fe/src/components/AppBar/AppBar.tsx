import Box from '@mui/material/Box'
import ModeSelect from '../ModeSelect/ModeSelect'
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
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import Tooltip from '@mui/material/Tooltip'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import LibraryAddIcon from '@mui/icons-material/LibraryAdd'
import InputAdornment from '@mui/material/InputAdornment'
import SearchIcon from '@mui/icons-material/Search'
import CloseIcon from '@mui/icons-material/Close'
import { useState } from 'react'

const AppBar = () => {
  const [search, setSearch] = useState('')

  return (
    <Box
      sx={{
        width: '100%',
        height: (theme) => theme.trello.appBarHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 2,
        overflowX: 'auto',
        px: 2,
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#2c3e50' : '#1565c0')
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <AppsIcon sx={{ color: 'white' }} />
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <TrelloIcon sx={{ color: 'white' }} />
          <Typography
            component='span'
            sx={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'white' }}
          >
            Trello
          </Typography>
        </Box>

        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
          <Workspaces />
          <Recent />
          <Starred />
          <Templates />
          <Button
            variant='outlined'
            startIcon={<LibraryAddIcon />}
            sx={{ color: 'white', border: 'none', '&:hover': { border: 'none' } }}
          >
            Create
          </Button>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <TextField
          id='outlined-search'
          label='Search...'
          size='small'
          type='text'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <SearchIcon sx={{ color: 'white' }} />
              </InputAdornment>
            ),
            endAdornment: (
              <CloseIcon
                fontSize='small'
                sx={{ 
                  color: search ? 'white' : 'transparent', cursor: 'pointer' 
                }}
                onClick={() => setSearch('')}
              />
            )
          }}
          sx={{
            minWidth: 120,
            maxWidth: 200,
            '& label': { color: 'white' },
            '& input': { color: 'white' },
            '& label.Mui-focused': { color: 'white' },
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: 'white' },
              '&:hover fieldset': { borderColor: 'white' },
              '&.Mui-focused fieldset': { borderColor: 'white' }
            }
          }}
        />
        <ModeSelect />

        <Tooltip title='Notifications'>
          <Badge color='warning' variant='dot' sx={{ cursor: 'pointer' }}>
            <NotificationsNoneIcon sx={{ color: 'white' }} />
          </Badge>
        </Tooltip>
        <Tooltip title='Notification'>
          <Badge color='primary' variant='dot' sx={{ cursor: 'pointer' }}>
            <HelpOutlineIcon sx={{ color: 'white' }} />
          </Badge>
        </Tooltip>

        <Profiles />
      </Box>
    </Box>
  )
}

export default AppBar
