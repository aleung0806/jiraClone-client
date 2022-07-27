import { useSelector } from 'react-redux'
import {
  Avatar,
  AvatarGroup
} from '@mui/material'

//green, orange, purple, yellow
const colors = [ '#6300AA', '#FF9415','#00C380', '#00EAA5']
const blue = '#2900CC'

const InitialsAvatar = ({name}) => {


  function stringToColor(string) {

    let hash = 0;
    for (let i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + hash - 7;

    }
    console.log(string)
    console.log(hash % 4 - 1)
    return colors[hash % 4 - 1]
  }

  const avatarStyles = (name) => {
    
    return {
      sx: {
        backgroundColor: stringToColor(name),
        height: '30px',
        width: '30px',
        fontSize: '15px',
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    }
  }

  return (
    <Avatar {...avatarStyles(name)} />
  )
}

export default InitialsAvatar
