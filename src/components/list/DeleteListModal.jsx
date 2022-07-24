import { NoEncryption } from '@mui/icons-material';
import {
  Typography,
  Modal,
  Box,
  Button,
  Grid
} from '@mui/material'
import { flexbox } from '@mui/system';
import { useDispatch } from 'react-redux'
import { useState } from 'react'

import { deleteList } from '../../reducers/projectReducer'

const contentStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height: 200,
  bgcolor: 'background.paper',
  borderRadius: 1,
  boxShadow: 24,
  padding: 5,
 
};

const buttonStyle = {
  border: 'solid',
  borderColor: 'lightgray',
}

const DeleteListModal = ({open, setOpen, list}) => {
  const dispatch = useDispatch()

  const handleClose = () => {
    console.log('handling...')
    setOpen(false)
  }

  const handleClickDelete = () => {
    console.log('list', list)
    dispatch(deleteList(list.id))
  }

  return (
    <Modal
      open={open}
      onClose={handleClose}
    >
      <Box sx={contentStyle} onClick={handleClose}>
        <Box >
          <Typography>{`Are you sure you want to delete list ${list.title.toUpperCase()}?`}</Typography>
          <Typography>Issues in this list will be lost.</Typography>
        </Box>
        <Button sx={buttonStyle} onClick={handleClickDelete}>Delete</Button> 

        <Button sx={buttonStyle} >Don't Delete</Button>

      </Box>
    </Modal>
 
  )
}

export default DeleteListModal