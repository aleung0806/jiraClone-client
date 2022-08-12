import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import Dropdown from '../reusable/Dropdown'
import {
  Button,
  Box,
  Typography,
  IconButton, 
  Menu,
  MenuItem
} from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import DeleteIssueButton from './DeleteIssueButton'

const dropdownButtonStyle = {
  'display': 'flex',
  'justifyContent': 'center',
  'alignItems': 'center',
  'margin': 0,
  'padding': 0
}

const menuChildrenStyle = {
  'color': 'black',
  'fontWeight': 'normal',
  'textTransform': 'none'
}
const menuStyle={
  'fontWeight': 'normal'
}

const menuItemStyle={
  'fontWeight': 'normal'

}

const iconStyle = {
  // "&:hover":{color: '#ff5436'}
}

const ProjectDropdown = ({issue}) => {
  const projects = useSelector(state => state.projects)
  const [anchor, setAnchor] = useState(null)

  const handleOpen = (e) => { 
    e.stopPropagation()
    setAnchor(e.currentTarget)
  }
  const handleClose = (e) => { 
    console.log(e.target)
    setAnchor(null) 
  }

  const handleClick = (e) => {
    e.stopPropagation()

  }
  return (
    <Box>
      <IconButton id="basic-button" onClick={handleOpen} >
        <MoreHorizIcon sx={iconStyle}/>
      </IconButton>
      <Menu id="basic-menu" anchorEl={anchor} open={Boolean(anchor)} onClick={handleClick} onClose={handleClose} sx={menuStyle}>
        <MenuItem>
          <Typography>Options</Typography>
        </MenuItem>
        <MenuItem>
          <Typography>Copy Issue Link</Typography>
        </MenuItem>
        <MenuItem>
          <Typography>Delete</Typography>
        </MenuItem>
      </Menu>

    </Box>

  )
}

export default ProjectDropdown