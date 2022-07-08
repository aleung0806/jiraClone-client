import { useState } from 'react'
import {
  Button,
  Menu,
  MenuItem,
  Typography
} from '@mui/material'

import { useSelector } from 'react-redux'

import { useNavigate } from 'react-router-dom'



export default function ProjectsMenuButton() {
  const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget)
  };
  const handleClose = (id) => {
    console.log('id', id)
    setAnchorEl(null)
    navigate(`./projects/${id}`)
  };

  const projects = useSelector(state => state.projects)

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        color="secondary"
      >
      Projects
      
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
          return <MenuItem key={project.id} onClick={() => handleClose(project.id)}>{project.name}</MenuItem>
        })}

      </Menu>
    </div>
  );
}