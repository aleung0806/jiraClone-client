import * as React from 'react'
import {
  Button,
  Menu,
  MenuItem,
  Typography
} from '@mui/material'

import { useSelector } from 'react-redux'



export default function ProjectsMenuButton() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
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
        {projects.map(project => {
          return <MenuItem key={project.id} onClick={handleClose}>{project.name}</MenuItem>
        })}

      </Menu>
    </div>
  );
}