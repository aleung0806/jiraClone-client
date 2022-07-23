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

const MenuButtonStyles = styled.span`

`;

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
              <MenuItem  onClick={() => handleSelect(project.id)}>{project.title}</MenuItem>
              <Divider key={project.id} />
            </div>
          )
        })}
      </Menu>
    </MenuButtonStyles>
  );
}