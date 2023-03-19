import {
  Box
} from '@mui/material'
import {  } from '@mui/material/styles'

import { useTheme } from '@mui/material/styles'
import AccountButton from './navBar/AccountButton'
import SearchBar from './navBar/SearchBar'
import AddIssueButton from './navBar/AddIssueButton'
import SettingsButton from './navBar/SettingsButton'
import logo from '../icons/jira.png'
import {ReactComponent as AppSwitcher} from '@atlaskit/icon/svgs/app-switcher.svg'
import AtlasIcon from './reusable/AtlasIcon'

const leftAlignStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  gap: '15px'
}

const rightAlignStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  gap: '15px'
}

const logoStyle = {
    height: '20px',
    width: 'auto',
    marginRight: '20px'
}
 
const appBarStyle = (theme) => {
  return {
    // zIndex: theme.zIndex.drawer + 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100vw',
    paddingLeft: '20px',
    paddingRight: '20px',
    gap: '10px',
    backgroundColor: 'primary.contrast',
    height: '55px',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
  }
 }

const NavBar = () => {
  const theme = useTheme()
  return (
    <Box sx={appBarStyle(theme)}>
          <Box sx={leftAlignStyle}>
            <AtlasIcon Svg={AppSwitcher}/>
          </Box>
          <Box sx={rightAlignStyle}>
            <AddIssueButton/>
            <SearchBar />
            <SettingsButton/>
            <AccountButton/>
          </Box>
    </Box>

  )
}

export default NavBar