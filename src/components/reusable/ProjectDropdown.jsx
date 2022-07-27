import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import Dropdown from './Dropdown'
import {
  Button,
  Box,
  Typography
} from '@mui/material'
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import AddProjectButton from './AddProjectButton'

const menuChildrenStyle = {
  'color': 'black'
}

const ProjectDropdown = () => {
  const projects = useSelector(state => state.projects)
  const navigate = useNavigate()

  const menuChildren = () => {
    const children = projects.map(project => {
      return (
        <Button key={project.id}onClick={() =>{navigate(`../projects/${project.id}`)}} sx={menuChildrenStyle}>
          {project.title}
        </Button>
      )
    })
    children.push(<AddProjectButton/>)
    return children
  }

  return (
      <Dropdown
        buttonText='projects'
        buttonIcon={<ArrowDropDownRoundedIcon/>}
        menuChildren={menuChildren()}
      />
  )
}

export default ProjectDropdown