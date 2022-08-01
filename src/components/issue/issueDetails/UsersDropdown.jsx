import { 
  Typography,
  FormControl,
  Input,
  Button,
  Box,
  ButtonIcon,
  TextField
 } from '@mui/material'

import Dropdown from '../../reusable/Dropdown'
import { useState } from 'react'
import InitialsAvatar from '../../reusable/InitialsAvatar'
import { useSelector } from 'react-redux'
import { useResolvedPath } from 'react-router-dom'

const boxStyle = {
  display: 'flex',
  flexDirection: 'row',
  gap: 5
}

const avatarStyle = {
  height: '20px', width: '20px', fontSize: '8px'
}

const UsersDropdown = () => {
  const users = useSelector(state => state.users)

  return (
    <Box variant='flexRow' sx={boxStyle}>
      <Box sx={{display: 'flex', flexDirection: 'column', gap: 1, alignItems: 'left'}}>
        <Typography variant='darkestBold14'>Reporter</Typography>
        <Box sx={{display: 'flex', gap: 1, alignItems: 'center'}}>
          <InitialsAvatar sx={avatarStyle} name={'First Last'}/> 
          <Typography sx={{fontSize: '12px', textTransform: 'none'}}>{'First Last'}</Typography>
        </Box>
      </Box>
      <Box sx={{display: 'flex', flexDirection: 'column', gap: 1, alignItems: 'left'}}>
        <Typography variant='darkestBold14'>Assignee</Typography>
        <Box sx={{display: 'flex', gap: 1, alignItems: 'center'}}>
            <InitialsAvatar  sx={avatarStyle} name={'Last Last'}/> 
            <Typography sx={{fontSize: '12px', textTransform: 'none'}}>{'Last Last'}</Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default UsersDropdown