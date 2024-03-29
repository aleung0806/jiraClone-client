import styled from "styled-components"
import { useDispatch, useSelector } from 'react-redux'
import { DragDropContext } from "react-beautiful-dnd";

import { 
  Typography,
  IconButton,
  Box 
} from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'

import DeleteProjectButton from "./project/DeleteProjectButton"
import ProjectTitle from './project/ProjectTitle'
import AddListButton from './project/AddListButton'
import InviteButton from './project/InviteButton'
import SearchBar from './project/SearchBar'
import UserIcons from './project/UserIcons'
import List from "./List"

import SortByDropdown from './project/SortByDropdown'
import GroupByDropdown from './project/GroupByDropdown'


import StarButton from './project/StarButton'
import { useParams } from 'react-router-dom'
import { moveIssue } from '../reducers/project'

const buttonStyle = {
  height: '35px',
  width: '35px',
  borderRadius: 1,
}

const projectStyle = {
  flex: 100,
  marginTop: '20px',
  marginLeft: '15px',
  height: '100vh'
}

const userSectionStyle = {
  marginTop: '10px',
  marginBottom: '20px',
  marginLeft: '10px',
  display: 'flex',
  justifyContent: 'left',
  alignItems: 'center',
  gap: '10px'
}

const listAreaStyle = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'top'
}
const linkStyle = {
  display: 'flex',
  fontSize: '14px',
  color: 'text.secondary'
}

function Project({project}) {
  const { id } = useParams()
  const dispatch = useDispatch()

  const onDragEnd = (result) => {
    dispatch(moveIssue(result, project))
  }

  return (
    <Box sx={projectStyle}>
      { project.id === parseInt(id) && 
        <Box component='main' >

        <Box sx={{display: 'flex', flexDirection: 'row', marginLeft: 0, alignItems: 'center'}}>
          <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 1}}>

            <ProjectTitle project={project}/>

          </Box>
          <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 1}}>
            <StarButton project={project}/>
            <DeleteProjectButton project={project}/>
          </Box>
        </Box>
        <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
          <Box sx={userSectionStyle}>
              <SearchBar project={project}/>
              <UserIcons project={project}/>
              <InviteButton project={project}/>
          </Box>
          <Box sx={{display: 'flex', flexDirection: 'row'}}>
            <GroupByDropdown project={project}/>
            <SortByDropdown project={project}/>
          </Box>
        </Box>
      <Box sx={listAreaStyle}>
          <DragDropContext onDragEnd={onDragEnd} >
              {project.lists !== null && project.lists.map((list) => <List listContent={list} key={list.id}/>)}
          </DragDropContext>
          <AddListButton project={project}/>
        </Box>
      </Box>
    }
    </Box>
  )
}

export default Project;
