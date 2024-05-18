import { MouseEvent, useState } from 'react'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Check from '@mui/icons-material/Check';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';

const Templates = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Box>
      <Button
        id='basic-button-Templates'
        aria-controls={open ? 'basic-menu-Templates' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
				endIcon={<ExpandMoreIcon />}
      >
        Templates
      </Button>
      <Menu
        id='basic-menu-Templates'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button-Templates',
        }}
      >
        <MenuItem>
          <ListItemText inset>Single</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText inset>1.15</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText inset>Double</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Check />
          </ListItemIcon>
          Custom: 1.2
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemText>Add space before paragraph</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText>Add space after paragraph</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemText>Custom spacing...</ListItemText>
        </MenuItem>
      </Menu>
    </Box>
  )
}

export default Templates
