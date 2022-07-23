import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Avatar
} from '@mui/material'

import AccountButton from './AccountButton'

import ProjectsDropdown from './ProjectsDropdown'
import PeopleDropdown from './PeopleDropdown'

import SearchBar from './SearchBar'
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
    <NavBarStyles>
      <div>
        <ProjectsDropdown />
        <PeopleDropdown />
      </div>
        <SearchBar />
        <AccountButton/>

    </NavBarStyles>

  )
}

export default NavBar