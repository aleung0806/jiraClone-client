import { useState } from 'react'
import {
  Button,
  Menu,
  MenuItem,
  Typography
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
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {projects !== null && projects.map(project => {
          return <MenuItem key={project.id} onClick={() => handleSelect(project.id)}>{project.name}</MenuItem>
        })}
      </Menu>
    </MenuButtonStyles>
  );
}