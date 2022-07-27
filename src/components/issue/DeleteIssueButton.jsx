
import { 
  Typography,
  TextField,
  Button,
  Box,
  Alert
 } from '@mui/material'
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import ModalButton from '../reusable/ModalButton'
import { useDispatch } from 'react-redux'
import { deleteIssue } from '../../reducers/projectReducer'

const buttonStyle = {

}

const modalContentStyle = {
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
  borderRadius: 1,
  padding: 2

}

const buttonBoxStyle = {
  display: 'flex',
  gap: 2
}

const alertStyle = {
  backgroundColor: '#fcfac1',
  paddingTop: 0,
}

const deleteButtonStyle = {
  "&:hover":
    {
      color: '#ff5436', 
      borderColor: '#ff5436',

    }, 
  fontWeight: '600'
};

const DeleteIssueButton = ({issue}) => {
  const dispatch = useDispatch()

  const handleDelete = () => {
    dispatch(deleteIssue(issue.id))
  }

return (
  <ModalButton
    buttonContents={
      <Box sx={buttonStyle}>
        delete
      </Box>
    }
    modalContents={
      <Box sx={modalContentStyle}>
        <Alert sx={alertStyle} severity='warning'>
          {`Are you sure you want to delete issue `}
          <Typography component='span' >{issue.title.toUpperCase()}</Typography>
          ? All issues in the list will be deleted.
        </Alert>
          <Box sx={buttonBoxStyle}>
            <Button variant="outlined">cancel</Button>
            <Button sx={deleteButtonStyle} variant="outlined" onClick={handleDelete}>delete</Button>
          </Box>
      </Box>
    }
  >

  </ModalButton >
)
  }

export default DeleteIssueButton