import Box from '@mui/material/Box'
import DashboardIcon from '@mui/icons-material/Dashboard'
import Chip from '@mui/material/Chip'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterList from '@mui/icons-material/FilterList'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Tooltip from '@mui/material/Tooltip'
import Button from '@mui/material/Button'
import PersonAddIcon from '@mui/icons-material/PersonAdd'

const menuStyles = {
  color: 'white',
  bgcolor: 'transparent',
  border: 'none',
  paddingX: '5px',
  borderRadius: '4px',
  '.MuiSvgIcon-root': { color: 'white' },
  '&:hover': {
    bgcolor: 'primary.50'
  }
}

const BoardBar = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: (theme) => theme.trello.boardBarHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 2,
        overflowX: 'auto',
        borderBottom: '1px solid white',
        px: 2,
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2')
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Chip sx={menuStyles} icon={<DashboardIcon />} label='Trello' clickable />
        <Chip sx={menuStyles} icon={<VpnLockIcon />} label='Public/Private workspaces' clickable />
        <Chip sx={menuStyles} icon={<AddToDriveIcon />} label='Add to google drive' clickable />
        <Chip sx={menuStyles} icon={<BoltIcon />} label='Automation' clickable />
        <Chip sx={menuStyles} icon={<FilterList />} label='Filters' clickable />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Button
          variant='outlined'
          startIcon={<PersonAddIcon />}
          sx={{ color: 'white', borderColor: 'white', '&:hover': { borderColor: 'white' } }}
        >
          Invite
        </Button>

        <AvatarGroup
          max={4}
          sx={{
            gap: '10px',
            '& .MuiAvatar-root': {
              width: 30,
              height: 30,
              fontSize: 16,
              border: 'none',
              cursor: 'pointer',
              ':first-of-type': {
                bgcolor: '#a4b0de'
              }
            }
          }}
        >
          <Tooltip title='Remy Sharp'>
            <Avatar alt='Remy Sharp' src='https://res.cloudinary.com/metavere/image/upload/v1704894280/hasxs073xqxfwjrqy6av.png' />
          </Tooltip>
          <Tooltip title='Remy Sharp'>
            <Avatar alt='Remy Sharp' src='https://res.cloudinary.com/metavere/image/upload/v1704893397/pcwvthjobwvq4iqlbh8r.png' />
          </Tooltip>
          <Tooltip title='Remy Sharp'>
            <Avatar alt='Remy Sharp' src='https://res.cloudinary.com/metavere/image/upload/v1704893372/qxrnz99z7vs9oi2wccis.jpg' />
          </Tooltip>
          <Tooltip title='Remy Sharp'>
            <Avatar alt='Remy Sharp' src='https://res.cloudinary.com/metavere/image/upload/v1704896868/lj0yag3ovnxvvigxriqe.jpg' />
          </Tooltip>
          <Tooltip title='Remy Sharp'>
            <Avatar alt='Remy Sharp' src='/static/images/avatar/1.jpg' />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  )
}

export default BoardBar
