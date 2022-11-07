import { useState } from 'react'
import {
  IconButton,
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

import { useDispatch } from 'react-redux'
import { logout } from '../../reducers/auth'

const avatarStyles = {
  height: '24px',
  width: '24px',
  fontSize: '10px',

}

export default function AccountDropdown() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const projects = useSelector(state => state.projects)
  const user = useSelector(state => state.auth.user)

  const logoutHandler = () => {
    console.log('logout pressed')
    dispatch(logout())
    navigate('/')
  }

  const [anchor, setAnchor] = useState(null);

  const handleClick = (e) => {setAnchor(e.currentTarget)}

  const handleClose = () => {setAnchor(null)}

  return (
    <Box>
      {user !== null &&
          <Box>

      <IconButton onClick={handleClick} >
        <InitialsAvatar sx={avatarStyles} name={user.firstName}/>
      </IconButton>
      <Menu id="basic-menu" anchorEl={anchor} open={Boolean(anchor)} onClose={handleClose}>
        <MenuItem  >account info...</MenuItem>
        <Divider/>
        <MenuItem  onClick={logoutHandler}>log out</MenuItem>
      </Menu>
      </Box>

      }
    </Box>
  );
}