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
import DeleteIcon from '@mui/icons-material/Delete';

import DeleteListModal from './DeleteListModal'
const MenuButtonStyles = styled.span`
  
`;

export default function ListOptionsButton({list}) {
  const navigate = useNavigate()
  const projects = useSelector(state => state.projects)
  const [openModal, setOpenModal] = useState(false)

  const handleClick = (e) => {
    setOpenModal(true)
  }

  const handleClose = () => {}

  return (
    <div>
        <IconButton color="secondary" onClick={handleClick}>
          <DeleteIcon sx={{"&:hover":{color: '#ff5436'}}}/>
        </IconButton>
        <DeleteListModal open={openModal} setOpen={setOpenModal} list={list}/>
    </div>
  );
}