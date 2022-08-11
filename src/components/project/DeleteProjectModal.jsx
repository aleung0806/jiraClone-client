import { NoEncryption } from '@mui/icons-material';
import {
  Typography,
  Modal,
  Box,
  Button,
  ButtonGroup,
  Grid,
  Alert
} from '@mui/material'
import { flexbox } from '@mui/system';
import { useDispatch } from 'react-redux'
import { useState } from 'react'

import { deleteProject } from '../../reducers/projectReducer'

const contentStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 340,
  height: 180,
  bgcolor: 'background.paper',
  borderRadius: 1,
  boxShadow: 24,
  padding: 2,
};

const alertStyle = {
  color: 'black',
  backgroundColor: '#ff5436',
  paddingTop: 0,
};

const warningStyle = {
  textAlign: 'center', 
  fontWeight: '600', 
  paddingTop: '3px', 
  backgroundColor: '#fcfac1'
};

const buttonStyle = {
  border: 'solid',
  borderColor: 'lightgray',
}

const buttonG = {
  display: 'flex',
  justifyContent: 'center',
  marginTop: 4,
};

const DeleteProjectModal = ({open, setOpen, project}) => {
  const dispatch = useDispatch()

  const handleClose = () => {
    console.log('handling...')
    setOpen(false)
  }

  const handleClickDelete = () => {
    dispatch(deleteProject(project.id))
  }

  return (
    <Modal
      open={open}
      onClose={handleClose}
    >
      <Box sx={contentStyle} onClick={handleClose}>
        <Box>
        <Alert sx={alertStyle} severity="warning">{`WARNING!!! All items will be deleted. Are you sure you want to delete project ${project.title.toUpperCase()}?`}</Alert>
        </Box>
        <ButtonGroup sx={buttonG}>
          <Button variant="text">Cancel</Button>
          <Button sx={{"&:hover":{backgroundColor: '#ff5436'}, fontWeight: '600'}}variant="outlined" onClick={handleClickDelete}>Delete</Button>
        </ButtonGroup> 

      </Box>
    </Modal>
 
  )
}

export default DeleteProjectModal