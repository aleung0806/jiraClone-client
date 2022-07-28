import {
  AppBar,
  Toolbar,
  Grid,
  IconButton,
  Typography,
  Button,
  Avatar,
  Box
} from '@mui/material'
import { useTheme } from '@mui/material/styles';


import AccountButton from './navBar/AccountButton'
import ProjectDropdown from './navBar/ProjectDropdown'
import SearchBar from './navBar/SearchBar'
import AddIssueButton from './navBar/AddIssueButton'
import SettingsButton from './navBar/SettingsButton'



const leftAlignStyle = {
  display: 'flex',
  alignItems: 'center'

}

const rightAlignStyle = {
  display: 'flex',
  alignItems: 'center'
}

const toolBarStyle = {
  justifyContent: 'space-between'
}
 
const appBarStyle = (theme) => {
  return {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: 'primary.contrast',
    height: '56px',
    justifyContent: 'center',
    shadow: ''

  }
 }

const NavBar = () => {
  const theme = useTheme()
  return (
    <AppBar  position="fixed" elevation={1} sx={appBarStyle(theme)}>
      <Toolbar variant="dense" sx={toolBarStyle}>
          <Box sx={leftAlignStyle}>
            <ProjectDropdown/>
            <AddIssueButton/>
          </Box>
          <Box sx={rightAlignStyle}>
            <SearchBar />
            <SettingsButton/>
            <AccountButton/>
          </Box>

  
        </Toolbar>

    </AppBar>

  )
}

export default NavBar