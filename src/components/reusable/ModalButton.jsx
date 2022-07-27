import {
  Modal,
  Box,
  Button,
} from '@mui/material'
import { useState } from 'react'

const ModalButton  = ({buttonText, buttonIcon, modalContents}) => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box>
      <Button onClick={handleOpen} >
        {buttonText}
        {buttonIcon}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
      >
        {modalContents}
      </Modal>
    </Box>
  )
}

export default ModalButton