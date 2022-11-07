import { useEffect } from "react";
import styled from "styled-components";
import { DragDropContext } from "react-beautiful-dnd";
import List from "./List";
import { useDispatch, useSelector } from 'react-redux'
import { moveIssue } from '../reducers/project'

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


function Project({projectId}) {
  const dispatch = useDispatch()

  const project = useSelector(state => state.projects.find(project => project.id == projectId))
  const lists = project.lists


  const onDragEnd = (result) => {
    dispatch(moveIssue(result, project))
  }

  useEffect(()=> {
    console.log(project)
  }, [project])

  return (
    <Box component='main' sx={{ flexGrow: 1, paddingLeft: 3, paddingTop: 10}}>
    <Box sx={{ display: 'flex' }}>
      <Typography sx={linkStyle}>{`Projects\u00A0\u00A0/\u00A0\u00A0${project.title}`}</Typography>
     </Box>
     <Typography sx={{fontSize: '24px', fontWeight: 500, textTransform: 'none'}}>{`SUM Board`}</Typography>
     {/* <DeleteProjectButton project={project}/> */}
     <Box>
      <UserBarStyle>
        <SearchBar/>
        {/* <UserIcons/> */}
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
