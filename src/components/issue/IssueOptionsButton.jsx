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

import IssueModal from './IssueModal'
const MenuButtonStyles = styled.span`
  
`;

const IssueOptionsButton = ({issue}) => {
  const [openModal, setOpenModal] = useState(false)

  const navigate = useNavigate()
  const projects = useSelector(state => state.projects)
  const [anchor, setAnchor] = useState(null);

  const handleClick = (e) => {setAnchor(e.currentTarget)}

  const handleClose = () => {setAnchor(null)}

  const handleClickOptions  = () => {
    setOpenModal(true)
    setAnchor(null)
    console.log(openModal)
  }

  const handleClickDelete = () => {

  }


  return (
    <MenuButtonStyles>
        <IconButton color="secondary" onClick={handleClick}>
          <MoreHorizRoundedIcon/>
        </IconButton>
      <Menu id="basic-menu" anchorEl={anchor} open={Boolean(anchor)} onClose={handleClose}>
      <MenuItem  onClick={handleClickOptions}>options</MenuItem>

        <MenuItem  onClick={handleClickDelete}>delete</MenuItem>

      </Menu>
        <IssueModal open={openModal} setOpen={setOpenModal} issue={issue}/>
    </MenuButtonStyles>
  );
}

export default IssueOptionsButton