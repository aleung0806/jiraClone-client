import { NoEncryption } from '@mui/icons-material';
import {
  Typography,
  Modal,
  Box
} from '@mui/material'


import { useState } from 'react'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height: 400,
  bgcolor: 'background.paper',
  borderRadius: 1,
  boxShadow: 24,
  p: 4,
};

const IssueModal = ({openModal, setOpenModal, issue}) => {
  const handleOpen = () => {
    setOpenModal(false)
  }
  const handleClose = () => {
    console.log('handling...')
    setOpenModal(false);
  }

  return (
    <Modal
      open={openModal}
      onClose={handleClose}
    >
      <Box sx={style}>
        <p>{issue.title}</p>
      </Box>
    </Modal>
  )
}

export default IssueModal