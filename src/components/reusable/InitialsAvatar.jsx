import { useSelector } from 'react-redux'
import {
  Avatar,
  useTheme,
} from '@mui/material'



const InitialsAvatar = ({sx, name}) => {
  const theme = useTheme()


  function stringToColor(string) {

    const hash = string.charCodeAt(5)

    console.log(string)
    console.log('hash', hash % 5)
    console.log(Object.values(theme.palette.colors))
    console.log(Object.values(theme.palette.colors)[hash % 5])

    
    return Object.values(theme.palette.colors)[hash % 5]
  }

  const avatarStyles = (name) => {
    
    return {
      sx: {
        ...sx,
        backgroundColor: stringToColor(name),
        fontWeight: '600'
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    }
  }

  return (
    <Avatar {...avatarStyles(name)} />
  )
}

export default InitialsAvatar
