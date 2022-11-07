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
import logo from '../icons/jira.png'
import {ReactComponent as AppSwitcher} from '@atlaskit/icon/svgs/app-switcher.svg'
import AtlasIcon from './reusable/AtlasIcon'
import { useSelector } from 'react-redux';

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
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',


  }
 }

const NavBar = () => {
  const projects = useSelector(state => state.projects)
  const theme = useTheme()
  return (
    <AppBar  position="fixed" elevation={1} sx={appBarStyle(theme)}>
      <Toolbar variant="dense" sx={toolBarStyle}>
          <Box sx={leftAlignStyle}>
          <AtlasIcon Svg={AppSwitcher}/>
          <Box
                component="img"
                sx={{
                  height: '20px',
                  width: 'auto',
                  marginRight: '20px'
                }}
              src={logo}
            />
            {/* {projects !== null && <ProjectDropdown/> } */}
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