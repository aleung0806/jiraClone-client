import styled  from "styled-components"
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { 
  IconButton, 
  TextField,
 } from '@mui/material'

import {  ClickAwayListener } from '@mui/base'
import { useState } from 'react'
import { createIssue } from '../reducers/projectReducer'
import { useDispatch } from 'react-redux'

import uniqid from 'uniqid'


const IssueFormWrap = styled.div`
  padding: 10px;
  border-radius: 6px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  background: blue;
  margin: 0 0 8px 0;
  display: grid;
  grid-gap: 20px;
  flex-direction: column;
 
`

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
        id: uniqid(),
        name: newIssue,
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
    <div>
      <IconButton color="secondary" onClick={addButtonHandler} style={{display: formVisible ? 'none' : ''}}>
          <AddRoundedIcon /> 
      </IconButton>
      <OnClickAwayWrapper formVisible={formVisible} clickAwayHandler={clickAwayHandler}>
        <IssueFormWrap style={{display: formVisible ? '' : 'none'}} >
          <form onSubmit={createIssueHandler}>
            <TextField 
              autoFocus   
              fullWidth
              id="newIssueField"
              value={newIssue}
              onChange={changeHandler}
              variant="standard" 
            />
            </form>
        </IssueFormWrap>
      </OnClickAwayWrapper>

    </div>

  )

}

export default AddIssueButton