import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import Dropdown from '../reusable/Dropdown'
import {
  Button,
  Box,
  Typography
} from '@mui/material'
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import AddProjectButton from './AddProjectButton'

const dropdownButtonStyle = {
  'display': 'flex',
  'justifyContent': 'center',
  'alignItems': 'center',
}

const menuChildrenStyle = {
  'color': 'black',
  'fontWeight': 'normal',
  'textTransform': 'none'
}

const ProjectDropdown = () => {
  const projects = useSelector(state => state.projects)
  const navigate = useNavigate()

  const menuChildren = () => {
    const children = projects.map(project => {
      return (
        <Box key={project.id}onClick={() =>{navigate(`../projects/${project.id}`)}} sx={menuChildrenStyle}>
          {project.title}
        </Box>
      )
    })
    children.push(<AddProjectButton/>)
    return children
  }

  return (
      <Dropdown
        buttonContents={
            <Box sx={dropdownButtonStyle}>
              projects
              <ArrowDropDownRoundedIcon/>
            </Box>
        }
        menuChildren={menuChildren()}
      />
  )
}

export default ProjectDropdown