import { useState, useEffect } from 'react';
import styled from "styled-components";
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { ClickAwayListener } from '@mui/base'
import { createList, setLists } from '../../reducers/projectReducer'
import uniqid from 'uniqid'

import { 
  IconButton, 
  TextField,
  Box
 } from '@mui/material'
import AddRoundedIcon from '@mui/icons-material/AddRounded';

const AddButtonStyle = styled.span`
  display: inline-block;
  width: 275px;
  padding: 5px;
  border-radius: 6px;
  background: #d4d4d4;
  vertical-align: top;
  margin: 5px; 
  
`;

const ListFormWrap = styled.div`
 vertical-align: bottom;

`;

const buttonStyle = {
  display: 'inline-block',
  width: '275px',
  padding: '5px',
  borderRadius: '6px',
  backgroundColor: 'secondary.light',
  verticalAlign: 'top',
  margin: '5px'

}

const OnClickAwayWrapper = ({formVisible, clickAwayHandler, children}) => {  
  if (formVisible){
    return (
      <ClickAwayListener onClickAway={clickAwayHandler} >
        {children}
      </ClickAwayListener>
    )
  } else {
    return 
      {children}
  }
}



const AddListButton = ({projectId}) => {
  const dispatch = useDispatch()

  const [newList, setNewList] = useState('')
  const [formVisible, setFormVisible] = useState(false)

  const addButtonHandler = () => {
    setFormVisible(true)
  }

  const createListHandler = (e) => {
    if (e){
      e.preventDefault()
    }
    console.log('creating list...')
    if (newList !== ''){
      const list = {
        title: newList
      }
      dispatch(createList({
        list,
        projectId
      }))
    }
    setFormVisible(false)
    setNewList('')

  }

  const changeHandler = (e) => {
    setNewList(e.target.value)
  }

  const clickAwayHandler = () => {
    if (newList !== ''){
      createListHandler()
    }
    setFormVisible(false)
  }


  return (
    <Box component='span'>
      <IconButton sx={buttonStyle} onClick={addButtonHandler} style={{display: formVisible ? 'none' : ''}}>
        <AddRoundedIcon fontSize="large" />
      </IconButton>

      <OnClickAwayWrapper formVisible={formVisible} clickAwayHandler={clickAwayHandler}>
        <ListFormWrap style={{display: formVisible ? '' : 'none'}} >
          <form onSubmit={createListHandler}>
          <TextField
            autoFocus
            required
            id="newListField"
            value={newList}
            onChange={changeHandler}
          />
            </form>
        </ListFormWrap>
      </OnClickAwayWrapper>
    </Box>


  )
}

export default AddListButton