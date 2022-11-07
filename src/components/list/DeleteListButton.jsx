
import { 
  Typography,
  Button,
  Box,
  Alert
 } from '@mui/material'

import DeleteIcon from '@mui/icons-material/Delete';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import ModalButton from '../reusable/ModalButton'
import { useDispatch } from 'react-redux'
import { deleteList } from '../../reducers/project'

const buttonStyle = {
  width: '8px',
  height: '8px',
  "&:hover": {
    "& .deleteIcon": {
      color: 'text.secondary'
    }
  }
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

const modalDeleteButtonStyle = {
  "&:hover":
    {color: '#ff5436', borderColor: '#ff5436'}, 
  fontWeight: '600'
}

const iconStyle = {
  color: 'secondary.light'
}

const DeleteIssueButton = ({list}) => {
  const dispatch = useDispatch()

  const handleDelete = () => {
    dispatch(deleteList(list.id))
  }

return (
  <ModalButton
    buttonContents={
      <Box sx={buttonStyle}>
        <DeleteIcon className='deleteIcon' sx={iconStyle}/>
      </Box>
    }
    modalContents={
      <Box sx={modalContentStyle}>
        <Alert sx={alertStyle} severity='warning'>
          {`Are you sure you want to delete list `}
          <Typography component='span' >{list.title.toUpperCase()}</Typography>
          ? All issues in the list will be deleted.
        </Alert>
          <Box sx={buttonBoxStyle}>
            <Button variant="outlined">cancel</Button>
            <Button sx={modalDeleteButtonStyle} variant="outlined" onClick={handleDelete}>delete</Button>
          </Box>
      </Box>
    }
  >

  </ModalButton >
)
  }

export default DeleteIssueButton