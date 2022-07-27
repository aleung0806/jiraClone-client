
import { useSelector } from 'react-redux'
import { red, purple, teal } from '@mui/material/colors'
import {
  Avatar,
  AvatarGroup
} from '@mui/material'
import InitialsAvatar from '../reusable/InitialsAvatar'

const UserIcons = () => {

  const users = useSelector(state => state.users.all)
  return (
    <AvatarGroup max={4}>
      {users !== null && 
        users.map((user) => {
          return (
            <InitialsAvatar key={user.id} name={user.name} /> 
          )
        })
      }
    </AvatarGroup>
  )
}

export default UserIcons