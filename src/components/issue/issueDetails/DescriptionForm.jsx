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
  return (
    <Box sx={formStyle}>
      <Typography variant='darkestBold14'>Description</Typography>
      <FormControl>
      <Input
        variant='regular'
        sx={inputStyle}
        value={description}
        fullWidth
        disableUnderline
        onChange={handleChange}
        placeholder='Add a description...'
      />
    </FormControl>
    </Box>
  )
}

export default DescriptionForm