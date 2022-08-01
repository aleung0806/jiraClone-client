
import { 
  Typography,
  FormControl,
  Input,
  Button,
  Box,
  ButtonIcon,
  TextField,
  Modal,
 } from '@mui/material'
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import ModalButton from '../reusable/ModalButton'
import TypeIcon from '../reusable/TypeIcon'

import { useDispatch } from 'react-redux'
import { deleteIssue } from '../../reducers/projectReducer'
import AtlasIcon from '../reusable/AtlasIcon'
import {ReactComponent as Cross} from '@atlaskit/icon/svgs/cross.svg'
import { useState } from 'react'

import PriorityDropdown from './issueDetails/PriorityDropdown';
import TitleForm from './issueDetails/TitleForm';
import UsersDropdown from './issueDetails/UsersDropdown';
import DescriptionForm from './issueDetails/DescriptionForm';
import ListDropdown from './issueDetails/ListDropdown';
import d from 'date-and-time'
import meridiem from 'date-and-time/plugin/meridiem'

d.plugin(meridiem)

const dateFormat = (dateString) => {
  const date = new Date(dateString)
  return   d.format(date, 'MMMM D, YYYY [at] h:mm A')

}

const buttonStyle = {

}

const modalContentStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  position: 'absolute',
  padding: 4,
  gap: 5,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  height: 600,
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: 1,

}
const typeLabelStyle = {
  color: 'text.secondary',
  fontSize: '12px',
  textTransform: 'uppercase',
  fontWeight: 'bold'
}

const headerStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between'
}
const footerStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between'
}
const detailStyle = {

}

const exitButtonStyle = {

}
const descriptionFormStyle = {

}
const labelStyle = {

}

const leftAlignStyle = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center'
}

const bodyStyle={
  margin: 0,
  padding: 0
}

const titleInputStyle = {
  textTransform: 'uppercase'
}


const IssueDetails = ({issue, open, setOpen}) => {
  const dispatch = useDispatch()
  const [title, setTitle] = useState(issue.title)

  console.log(open)
  const handleDelete = () => {
    dispatch(deleteIssue(issue.id))
  }

return (
  <Modal
    open={open}
  >
      <Box sx={modalContentStyle}>

        <Box sx={{display: 'flex', flexDirection: 'column'}}>

          <Box sx={headerStyle}>
            <Box sx={leftAlignStyle}>
              <TypeIcon type={issue.type}/>
            </Box>
            <AtlasIcon Svg={Cross}></AtlasIcon>
          </Box>

          <Box sx={{display: 'flex', flexDirection: 'column', gap: 2}}>
              <Box sx={{display: 'flex', flexDirection: 'row', gap: 2, alignItems: 'center'}}>
                <TitleForm issue={issue} />
                <PriorityDropdown issue={issue}/>
              </Box>
              <DescriptionForm issue={issue}/>
              <ListDropdown issue={issue}/>
              <UsersDropdown issue={issue}/>
            </Box>

        </Box>

        <Box sx={footerStyle}>

          <Typography variant='faint'>Created {dateFormat(issue.dateCreated)}</Typography>
          <Typography variant='faint'>Updated {dateFormat(issue.dateUpdated)}</Typography>
        </Box>
      </Box>
  </Modal>
)
  }

export default IssueDetails