import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import Dropdown from '../reusable/Dropdown'
import {
  Button,
  Box,
  Typography
} from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import DeleteIssueButton from './DeleteIssueButton'

const dropdownButtonStyle = {
  'display': 'flex',
  'justifyContent': 'center',
  'alignItems': 'center',
  'margin': 0,
  'padding': 0
}

const menuChildrenStyle = {
  'color': 'black',
  'fontWeight': 'normal',
  'textTransform': 'none'
}

const iconStyle = {
  "&:hover":{color: '#ff5436'}
}

const ProjectDropdown = ({issue}) => {
  const projects = useSelector(state => state.projects)

  return (
      <Dropdown
        buttonContents={
            <Box sx={dropdownButtonStyle}>
              <MoreHorizIcon sx={iconStyle}/>
            </Box>
        }
        menuChildren={[
          <Button>options</Button>,
          <DeleteIssueButton issue={issue}/>
        ]}
      />
  )
}

export default ProjectDropdown