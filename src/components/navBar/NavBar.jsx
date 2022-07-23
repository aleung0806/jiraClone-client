import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button
} from '@mui/material'


import ProjectsMenuButton from './ProjectsMenuButton'
import SearchBar from './SearchBar'
import styled from 'styled-components'

const NavBarStyles = styled.div`
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
        <ProjectsMenuButton />
        <SearchBar />
    </NavBarStyles>

  )
}

export default NavBar