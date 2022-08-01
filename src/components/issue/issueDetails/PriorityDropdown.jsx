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

 import PriorityIcon from '../../reusable/PriorityIcon'


const PriorityDropdown = ({issue}) => {


  return (
    <Box sx={{display: 'flex', flexDirection: 'column', gap: 1, alignItems: 'left'}}>
    <Typography variant='darkestBold14'>Priority</Typography>
      <Box sx={{display: 'flex', gap: 1}}>
        <PriorityIcon priority={issue.priority} />
        <Typography sx={{fontSize: '12px'}}>{issue.priority}</Typography>
      </Box>
    </Box>
  )
}

export default PriorityDropdown