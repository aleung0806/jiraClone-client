import { 
  TextField,
 } from '@mui/material'

 import SearchIcon from '@mui/icons-material/Search';

 import styled from 'styled-components'

const SearchBarStyles = styled.span`
 background-color: #E6E6E6;
 display: flex;
 flex-direction: row;
 align-items: center;
 width: 200px;
 margin-right: 20px;
 height: 30px;
 border-radius: 3px;
`
const SearchIconStyles = styled.div`
 margin-top: 5px;
 margin-left: 5px;
`

const SearchBar = () => {

  const searchHandler = () => {

  }

  const changeHandler = () => {

  }

  return (
    <SearchBarStyles>
      <SearchIconStyles>
        <SearchIcon color="primary" fontSize="small"/>
      </SearchIconStyles>
      <form onSubmit={searchHandler}>

        <TextField 
          fullWidth
          InputProps={{ disableUnderline: true }}
          id="newSearchField"
          value=""
          onChange={changeHandler}
          variant="standard"
        />
      </form>
      </SearchBarStyles>
  )
}

export default SearchBar