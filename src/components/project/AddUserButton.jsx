import { useState } from 'react'
import {
  Button,
  Menu,
  MenuItem,
  useTheme,
  IconButton,
} from '@mui/material'

import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import AddUserModal from './AddUserModal'
import AtlasIcon from '../reusable/AtlasIcon'
import {ReactComponent as InviteTeam} from '@atlaskit/icon/svgs/invite-team.svg'

const iconStyle = (theme) => {
  return {
    color: theme.palette.grays.medium
  }
}

const buttonStyle = (theme) => {
  return {
    color: theme.palette.grays.light
  }
}


const AddUserButton = () => {
  const navigate = useNavigate()
  const projects = useSelector(state => state.projects)
  const [anchor, setAnchor] = useState(null);
  const [openModal, setOpenModal] = useState(false)
  const theme = useTheme()

  const handleClick = (e) => {setOpenModal(true)}

  const handleClose = () => {setAnchor(null)}

  const handleSelect = (id) => {
    navigate(`./projects/${id}`)
  }


  return (
    <div>
        <IconButton onClick={handleClick} sx={buttonStyle(theme)}>
          <AtlasIcon sx={iconStyle(theme)} Svg={InviteTeam}/>
        </IconButton>
        <AddUserModal open={openModal} setOpen={setOpenModal} />
    </div>
  )
}

export default AddUserButton