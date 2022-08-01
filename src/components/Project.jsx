import { useEffect } from "react";
import styled from "styled-components";
import { DragDropContext } from "react-beautiful-dnd";
import List from "./List";
import { useDispatch, useSelector } from 'react-redux'
import { setLists } from '../reducers/projectReducer'
import { useParams } from 'react-router-dom'
import { IconButton, Grid, Box } from '@mui/material'
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import AddListButton from './project/AddListButton'
import AddUserButton from './project/AddUserButton'
import UserIcons from './project/UserIcons'

import DeleteProjectButton from './project/DeleteProjectButton'
import { Rowing } from "@mui/icons-material"
import SearchBar from './project/SearchBar'
import { Typography } from '@mui/material'

const projectStyle = {
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  height: '100vh',
  width: '100vw',
  paddingTop: 9,
  paddingLeft: 9,
  overflowX: 'scroll',
}

const UserBarStyle = styled.div`
  margin-left: 20px;
  margin-top: 30px;
  margin-bottom: 30px;
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 10px;
`

const HeaderStyle = styled.div`
  textTransform: 'uppercase',
  fontWeight: 'bold',
  color: gray,
  margin-bottom: 10px,
  margin-top: 10px,
  margin-left: 6px,
`

const linkStyle = {
  fontSize: '14px',
  color: 'text.secondary'
}

const removeFromList = (list, index) => {
  let issuesCopy = [...list.issues]
  const removed = issuesCopy[index]
  issuesCopy.splice(index, 1)
  return [removed, {...list, issues: issuesCopy}]
}

const addToList = (list, index, element) => {
  let issuesCopy =[...list.issues]
  issuesCopy.splice(index, 0, element)
  return {...list, issues: issuesCopy}
}

function Project({project}) {

  const lists = project.lists
  const projectId = project.id


  const dispatch = useDispatch()

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    let listsCopy = [...lists]
    const sourceListId = result.source.droppableId
    const destinationListId =  result.destination.droppableId
    const sourceIndex = result.source.index
    const destinationIndex = result.destination.index

    const sourceList = listsCopy.find(list => list.id === sourceListId)
    const [removedIssue, newSourceList] = removeFromList(sourceList, sourceIndex)
    listsCopy = listsCopy.map(list => list.id === sourceListId ? newSourceList : list)

    const destinationList = listsCopy.find(list => list.id === destinationListId)
    const newDestinationList = addToList(destinationList, destinationIndex, removedIssue)
    listsCopy = listsCopy.map(list => list.id === destinationListId ? newDestinationList : list)

    dispatch(setLists({lists: listsCopy, projectId: projectId}))
  }

  return (
    <Box component='main' sx={{ flexGrow: 1, paddingLeft: 3, paddingTop: 10}}>
    <Box sx={{ display: 'flex' }}>
      <Typography sx={linkStyle}>{`Projects\u00A0\u00A0/\u00A0\u00A0${project.title}`}</Typography>
     </Box>
     <Typography sx={{fontSize: '24px', fontWeight: 500, textTransform: 'none'}}>{`SUM Board`}</Typography>

     <Box>
      <UserBarStyle>
        <SearchBar/>
        <UserIcons/>
        <AddUserButton/>
      </UserBarStyle>
     </Box>
     <Box sx={{display: 'flex', flexWrap: 'nowrap'}}>
      <DragDropContext onDragEnd={onDragEnd} >
          {lists !== null && lists.map((list) => <List list={list} key={list.id}/>)}
      </DragDropContext>
      <AddListButton projectId={projectId}/>
      </Box>
    </Box>
  );
}

export default Project;
