import { useState } from 'react'
import { useDispatch } from 'react-redux'
import uniqid from 'uniqid'
import styled  from "styled-components"
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { 
  IconButton, 
  TextField,
  Button,
  Typography,
  Box
 } from '@mui/material'
import {  ClickAwayListener } from '@mui/base'

import { createIssue } from '../../reducers/projectReducer'

const IssueFormWrap = styled.div`
  padding: 10px;
  border-radius: 6px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  background: white;
  margin: 0 0 8px 0;
  display: grid;
  grid-gap: 20px;
  flex-direction: column;
`


const buttonStyle = {
  color: 'secondary.light',
  "&:hover": {
    color: 'text.secondary',
    "& .buttonText": {
      color: 'text.secondary',

    }
  },
}

const buttonTextStyle = {
  fontSize: '14px',
  textTransform: 'none',
  color: 'secondary.light'
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

const AddIssueButton = ({listId, projectId}) => {
  const dispatch = useDispatch()

  const [newIssue, setNewIssue] = useState('')
  const [formVisible, setFormVisible] = useState(false)

  const addButtonHandler = () => {
    setFormVisible(true)
  }

  const createIssueHandler = (e) => {
    if (e){
      e.preventDefault()
    }
    console.log('creating issue...')
    if (newIssue !== ''){
      const issue = {
        title: newIssue,
      }
      dispatch(createIssue({
        issue,
        listId,
        projectId
      }))
    }
    setFormVisible(false)
    setNewIssue('')

  }

  const changeHandler = (e) => {
    setNewIssue(e.target.value)
  }

  const clickAwayHandler = () => {
    if (newIssue !== ''){
      createIssueHandler()
    }
    setFormVisible(false)
  }

  return (
    <Box>
      <Button sx= {buttonStyle} onClick={addButtonHandler} style={{display: formVisible ? 'none' : ''}}>
            <AddRoundedIcon />
            <Typography className='buttonText' sx={buttonTextStyle}>Create issue</Typography>
      </Button>
      <OnClickAwayWrapper formVisible={formVisible} clickAwayHandler={clickAwayHandler}>
        <IssueFormWrap style={{display: formVisible ? '' : 'none'}} >
          <form onSubmit={createIssueHandler}>
          <TextField
            autoFocus
            required
            id="newListField"
            value={newIssue}
            onChange={changeHandler}
          />
            </form>
        </IssueFormWrap>
      </OnClickAwayWrapper>

    </Box>

  )

}

export default AddIssueButton