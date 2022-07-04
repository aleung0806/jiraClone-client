import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button
} from '@mui/material'

import MenuIcon from '@mui/icons-material/Menu'

import ProjectsMenuButton from './ProjectsMenuButton'

import theme from '../theme'

const NavBar = () => {
  return (
    <AppBar position="static" color="primary" >
      <Toolbar variant="dense">
        <ProjectsMenuButton />
      </Toolbar>
    </AppBar>

  )
}

export default NavBar