import { useSelector } from 'react-redux'
import { red, purple, teal } from '@mui/material/colors'
import {
  Avatar,
  AvatarGroup
} from '@mui/material'


const InitialsAvatar = ({name}) => {


  function stringToColor(string) {
    let hash = 0;
    let i;
  
    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
  
    let color = '#';
  
    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */
  
    return color;
  }

  const avatarStyles = (name) => {
    
    return {
      sx: {
        backgroundColor: stringToColor(name),
        width: 30, 
        height: 30 
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    }
  }

  return (
    <Avatar {...avatarStyles(name)} />
  )
}

export default InitialsAvatar
