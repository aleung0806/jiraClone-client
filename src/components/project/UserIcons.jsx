
import { useSelector } from 'react-redux'
import { red, purple, teal } from '@mui/material/colors'
import {
  Avatar,
  AvatarGroup
} from '@mui/material'


const UserIcons = () => {

  const colors = [red[500], purple[500], teal[500]]

  const avatarStyles = (name, index) => {
    console.log(`${colors[index]}[500]`)
    return {
      sx: {
        bgcolor: colors[index],
        width: 30, 
        height: 30 
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    }
  }

  const users = useSelector(state => state.users)
  return (
    <AvatarGroup max={4}>
      {users !== null && 
        users.map((user, index) => {
          return (
            <Avatar key={user.id} {...avatarStyles(user.name, index)} /> 
          )
        })
      }
    </AvatarGroup>
  )
}

export default UserIcons