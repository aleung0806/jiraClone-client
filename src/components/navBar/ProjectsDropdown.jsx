import { useState } from 'react'
import {
  Button,
  Menu,
  MenuItem,
  Typography,
  Divider
} from '@mui/material'

import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import styled from 'styled-components'
import AddProjectButton from './AddProjectButton'

const MenuButtonStyles = styled.span`

`;

const menuButton = {
  "&:hover": {backgroundColor: '#d4d4d4'}
}

export default function ProjectsDrowpdown() {
  const navigate = useNavigate()
  const projects = useSelector(state => state.projects)
  const [anchor, setAnchor] = useState(null);

  const handleClick = (e) => {
    setAnchor(e.currentTarget)
  }

  const handleClose = () => {
    setAnchor(null)
  }

  const handleSelect = (id) => {
    navigate(`./projects/${id}`)
  }


  return (
    <MenuButtonStyles>
      <Button id="basic-button" onClick={handleClick} color="secondary">
        Projects
        <ArrowDropDownRoundedIcon color="secondary"/>
      </Button>
      <Menu id="basic-menu" anchorEl={anchor} open={Boolean(anchor)} onClose={handleClose}>
        {projects !== null && projects.map(project => {
          return (
            <div key={project.id}>
              <MenuItem sx={menuButton} onClick={() => handleSelect(project.id)}>{project.title.toUpperCase()}</MenuItem>
              <Divider key={project.id} />
            </div>
          )
        })}
        <AddProjectButton/>
      </Menu>
    </MenuButtonStyles>
  );
}