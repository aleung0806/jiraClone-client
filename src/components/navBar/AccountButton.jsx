import { useState } from 'react'
import {
  Button,
  Menu,
  MenuItem,
  Divider,
  Box
} from '@mui/material'

import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import styled from 'styled-components'
import InitialsAvatar from '../reusable/InitialsAvatar'
const MenuButtonStyles = styled.span`
  display: flex;
`;

export default function AccountDropdown() {
  const navigate = useNavigate()
  const projects = useSelector(state => state.projects)
  const user = useSelector(state => state.users.loggedInUser)

  const [anchor, setAnchor] = useState(null);

  const handleClick = (e) => {setAnchor(e.currentTarget)}

  const handleClose = () => {setAnchor(null)}

  return (
    <Box>
      {user !== null &&
          <Box>

      <Button id="basic-button" onClick={handleClick} color="secondary">
        <InitialsAvatar name={user.name}/>
      </Button>
      <Menu id="basic-menu" anchorEl={anchor} open={Boolean(anchor)} onClose={handleClose}>
        <MenuItem  >account info...</MenuItem>
        <Divider/>
        <MenuItem  onClick={() => {}}>log out</MenuItem>
      </Menu>
      </Box>

      }
    </Box>
  );
}