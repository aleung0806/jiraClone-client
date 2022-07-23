import { useState } from 'react'
import {
  Button,
  Menu,
  MenuItem,
  Divider,
  IconButton
} from '@mui/material'

import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import styled from 'styled-components'

const MenuButtonStyles = styled.span`
  
`;

export default function ListOptionsButton() {
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
        <IconButton color="secondary" onClick={handleClick}>
          <MoreHorizRoundedIcon/>
        </IconButton>
      <Menu id="basic-menu" anchorEl={anchor} open={Boolean(anchor)} onClose={handleClose}>
        <MenuItem  onClick={() => {}}>delete</MenuItem>
        <MenuItem  onClick={() => {}}>options</MenuItem>

      </Menu>
    </MenuButtonStyles>
  );
}