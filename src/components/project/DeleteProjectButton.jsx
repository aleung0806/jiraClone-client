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

import DeleteProjectModal from './DeleteProjectModal'
const MenuButtonStyles = styled.span`
  
`;

export default function DeleteProjectButton({project}) {
  const navigate = useNavigate()
  const projects = useSelector(state => state.projects)
  const [openModal, setOpenModal] = useState(false)

  const handleClick = (e) => {
    setOpenModal(true)
  }
  console.log('project', project)
  const handleClose = () => {}

  return (
    <div>
        <IconButton sx={{backgroundColor: 'red', marginTop: '50px'}}color="secondary" onClick={handleClick}>
          <DeleteIcon sx={{color: 'yellow'}}/>
        </IconButton>
        <DeleteProjectModal open={openModal} setOpen={setOpenModal} project={project}/>
    </div>
  );
}