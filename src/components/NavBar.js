import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button
} from '@mui/material'

import MenuIcon from '@mui/icons-material/Menu'

import ProjectsMenuButton from './ProjectsMenuButton'

const NavBar = () => {
  return (
  <AppBar position="static" color="inherit" >
    <Toolbar variant="dense">
      <ProjectsMenuButton color="secondary" />
    </Toolbar>
  </AppBar>
  )
}

export default NavBar