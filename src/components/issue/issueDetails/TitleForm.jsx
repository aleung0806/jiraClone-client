import { 
  Typography,
  FormControl,
  Input,
  Button,
  Box,
  ButtonIcon,
  TextField,
  useTheme,
  OutlinedInput
} from '@mui/material'

import { useState } from 'react'


const inputStyle = (theme) => {
  return {
    left: '-12px',
    fontSize: '24px',
    fontWeight: '500',
    border: 'secondary.main',
    padding: 0,
    paddingLeft: '10px',
  }
}

const TitleForm = ({issue}) => {
  const [title, setTitle] = useState(issue.title)
  const theme = useTheme()
  const handleChange = (e) => {
    setTitle(e.target.value)
  }

  return (
    <FormControl>
      <Input
        variant='regular'
        sx={inputStyle(theme)}
        value={title}
        disableUnderline
        fullWidth
        onChange={handleChange}
      />
    </FormControl>
  )
}

export default TitleForm