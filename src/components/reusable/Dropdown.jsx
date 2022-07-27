import {
  Button,
  Menu,
  MenuItem,
  Box
} from '@mui/material'
import { useState } from 'react'




const menuStyle={
  'fontWeight': 'normal'
}

const menuItemStyle={
  'fontWeight': 'normal'

}

const Dropdown = ({buttonContents, menuChildren}) => {
  const [anchor, setAnchor] = useState(null)

  const handleOpen = (e) => { setAnchor(e.currentTarget)}
  const handleClose = () => { setAnchor(null) }

  return (
    <Box component="span">
      <Button id="basic-button" onClick={handleOpen} >
        {buttonContents}
      </Button>
      <Menu id="basic-menu" anchorEl={anchor} open={Boolean(anchor)} onClose={handleClose} sx={menuStyle}>
        {menuChildren.map((child, index) => <MenuItem sx={menuItemStyle} key={index} >{child}</MenuItem>)}
      </Menu>
    </Box>  
  )
}

export default Dropdown

