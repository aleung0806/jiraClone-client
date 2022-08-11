import { 
  Typography,
  FormControl,
  Input,
  Button,
  Box,
  ButtonIcon,
  TextField
 } from '@mui/material'

 import { useState } from 'react'

import { updateIssue } from '../../../reducers/projectReducer'

const inputStyle = {
  font: '12px',
  left: '-12px',

}

const formStyle = {
  display: 'flex',
  flexDirection: 'column',

}
const DescriptionForm = ({issue}) => {
  const [description, setDescription] = useState(issue.description)
  const handleChange = (e) => {
    setDescription(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const updatedIssue = {
      ...issue,
      description: description
    }
    console.log('handling', updatedIssue)

    updateIssue(updatedIssue)

  }
  return (
    <Box sx={formStyle} >
      <Typography variant='darkestBold14'>Description</Typography>
      <Box component='form' onSubmit={handleSubmit}>
      <Input
        variant='regular'
        sx={inputStyle}
        value={issue.description === null ? '' : issue.description}
        fullWidth
        disableUnderline
        onChange={handleChange}
      />
      </Box>
    </Box>
  )
}

export default DescriptionForm