
import { 
  Typography,
  TextField,
  Button,
  Box
 } from '@mui/material'
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import ModalButton from './ModalButton'

const modalContentsStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  alignItems: 'center',
  position: 'absolute',
  padding: 5,
  gap: 5,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
}

const buttonBoxStyle = {
  gap: 5,
}

const AddProjectButton = () => {


return (
  <ModalButton
    buttonIcon={<AddRoundedIcon/>}
    buttonText={'add project'}
    modalContents={
      <Box sx={modalContentsStyle}>
        <Typography>Add Project</Typography>
        <TextField
            required
            id="outlined-required"
          />
          <Box sx={buttonBoxStyle}>
            <Button variant="outlined">send</Button>
            <Button variant="outlined">cancel</Button>
          </Box>
      </Box>
    }
  >

  </ModalButton >
)
}

export default AddProjectButton