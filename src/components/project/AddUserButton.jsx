import { useState } from 'react'
import {
  Button,
  Menu,
  MenuItem,
  Divider,
  IconButton,
} from '@mui/material'

import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import styled from 'styled-components'
import AddUserModal from './AddUserModal'

import PersonAddIcon from '@mui/icons-material/PersonAdd';

const MenuButtonStyles = styled.span`
  
`;

export default function AddUserButton() {
  const navigate = useNavigate()
  const projects = useSelector(state => state.projects)
  const [anchor, setAnchor] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const handleClick = (e) => {setOpenModal(true)}

  const handleClose = () => {setAnchor(null)}

  const handleSelect = (id) => {
    navigate(`./projects/${id}`)
  }


  return (
    <div>
        <IconButton color="secondary" onClick={handleClick}>
          <PersonAddIcon/>
        </IconButton>
        <AddUserModal open={openModal} setOpen={setOpenModal} />
    </div>
  );
}