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

import AccountButton from './navBar/AccountButton'
import ProjectsDropdown from './navBar/ProjectsDropdown'
import PeopleDropdown from './navBar/PeopleDropdown'
import SearchBar from './navBar/SearchBar'

import styled from 'styled-components'

const NavBarStyles = styled.div`

  width: 100%;
  background-color: #3f3f3f;
  display: flex;
  flex-direction: row;
  padding: 0px;
  justify-content: space-between;
  align-items: center;
`;

const NavBar = () => {
  return (
    <AppBar  position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar variant="dense">
        <Grid>
          <ProjectsDropdown />
        </Grid>
        <Grid>
          <PeopleDropdown />
        </Grid>
        <Grid >
          <SearchBar />
        </Grid>
        <Grid>
          <AccountButton/>
        </Grid>
        </Toolbar>
    </AppBar>

  )
}

export default NavBar