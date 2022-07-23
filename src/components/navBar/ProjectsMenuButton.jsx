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

const MenuButtonStyles = styled.div`

`;

export default function ProjectsMenuButton() {
  const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleSelect = (id) => {
    navigate(`./projects/${id}`)

  }

  const projects = useSelector(state => state.projects)

  return (
    <MenuButtonStyles>
      <Button
        id="basic-button"
        onClick={handleClick}
        color="primary"
        sx={{p: 0, pl: 2}}
      >
        <Typography color="#d4d4d4" sx={{ textTransform: 'none' }}>
          Projects
        </Typography>
        <ArrowDropDownRoundedIcon color="secondary"/>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}

      >
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