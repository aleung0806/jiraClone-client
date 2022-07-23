import { useState } from 'react'
import {
  Button,
  Menu,
  MenuItem,
  Divider,
  Avatar
} from '@mui/material'

import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import styled from 'styled-components'

const MenuButtonStyles = styled.span`
  display: flex;
`;

export default function AccountDropdown() {
  const navigate = useNavigate()
  const projects = useSelector(state => state.projects)
  const [anchor, setAnchor] = useState(null);

  const handleClick = (e) => {setAnchor(e.currentTarget)}

  const handleClose = () => {setAnchor(null)}

  const handleSelect = (id) => {
    navigate(`./projects/${id}`)
  }
  
  return (
    <MenuButtonStyles>
      <Button id="basic-button" onClick={handleClick} color="secondary">
      <Avatar></Avatar>
      </Button>
      <Menu id="basic-menu" anchorEl={anchor} open={Boolean(anchor)} onClose={handleClose}>
        <MenuItem  >account info...</MenuItem>
        <Divider/>
        <MenuItem  onClick={() => {}}>log out</MenuItem>
      </Menu>
    </MenuButtonStyles>
  );
}