import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import {
  Box,
  Typography,
  Menu,
  MenuItem,
} from '@mui/material'
 
 import PriorityIcon from '../../reusable/PriorityIcon'
const dropdownButtonStyle = {

}

const menuChildrenStyle = {
  'color': 'black',
  'fontWeight': 'normal',
  'textTransform': 'none'
}
const menuStyle={

  'margin': 0,
  'padding': 0
}

const menuItemStyle={
  'fontWeight': 'normal'

}

const iconStyle = {
  // "&:hover":{color: '#ff5436'}
}

const priorities = ['lowest', 'low', 'medium', 'high' , 'highest'].reverse()

const PriorityDropdown = ({issue}) => {
  const projects = useSelector(state => state.projects)
  const [anchor, setAnchor] = useState(null)

  const handleOpen = (e) => { setAnchor(e.currentTarget)}
  const handleClose = () => { setAnchor(null) }

  const handleSelect = () => {

  }
  return (
    <Box>
      <Box sx={{display: 'flex', flexDirection: 'column', gap: 1, alignItems: 'left'}} >
        <Typography variant='darkestBold14'>Priority</Typography>
        <Box sx={{display: 'flex', gap: 1}} onClick={handleOpen}>
                <PriorityIcon priority={issue.priority} />
                <Typography sx={{fontSize: '12px'}}>{issue.priority}</Typography>
        </Box >
      </Box>
      <Menu id="basic-menu" anchorEl={anchor} open={Boolean(anchor)} onClose={handleClose} sx={menuStyle}>
        {priorities
          .map(priority => {
          return (
            <MenuItem key={priority}>
              <Box sx={{display: 'flex', gap: 1}} onClick={handleSelect}>
                <PriorityIcon priority={priority} />
                <Typography sx={{fontSize: '12px'}}>{priority}</Typography>
              </Box >
            </MenuItem>
          )
          })}
      </Menu>

    </Box>

  )
}

export default PriorityDropdown