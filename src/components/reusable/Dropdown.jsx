import {
  Button,
  Menu,
  MenuItem,
  Box
} from '@mui/material'
import { useState } from 'react'


const dropDownButtonStyle = {
  'display': 'flex',
  'justifyContent': 'center',
  'alignItems': 'center'
}

const menuStyle={
}

const Dropdown = ({buttonText, buttonIcon, menuChildren}) => {
  const [anchor, setAnchor] = useState(null)

  const handleOpen = (e) => { setAnchor(e.currentTarget)}
  const handleClose = () => { setAnchor(null) }

  return (
    <Box component="span">
      <Button id="basic-button" onClick={handleOpen} sx={dropDownButtonStyle}>
        {buttonText}
        {buttonIcon}
        
      </Button>
      <Menu id="basic-menu" anchorEl={anchor} open={Boolean(anchor)} onClose={handleClose} sx={menuStyle}>
        {menuChildren.map((child, index) => <MenuItem key={index}>{child}</MenuItem>)}
      </Menu>
    </Box>  
  )
}

export default Dropdown

