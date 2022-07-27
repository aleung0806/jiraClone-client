import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Droppable } from "react-beautiful-dnd"
import DeleteListButton from './list/DeleteListButton'
import AddIssueButton from './list/AddIssueButton'

import styled from "styled-components"
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
import { useTheme } from '@mui/material/styles';

import Issue, { DragItem } from './Issue'
import { color } from '@mui/system'
import theme from '../theme'

const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '20px',
  

}

const titleStyle = (theme) => {
  return {
  textTransform: 'uppercase',
  fontWeight: 500,
  fontSize: '12px',
  color: 'text.secondary'
  }
}


const listStyle = {
  display: 'inline-block',
  width: '275px',
  height: '80vh',
  padding: '10px',
  borderRadius: '3px',
  verticalAlign: 'top',
  margin: '5px',
  borderWidth: 'thin',
  backgroundColor: 'secondary.light'
}



const List = ({list}) => {

  const dispatch = useDispatch()
  const { id } = useParams()
  const theme = useTheme()

  return (
  <Box sx={listStyle}>
    <Box sx={headerStyle}>
      <Typography sx={titleStyle(theme)}>{list.title}</Typography>
        <DeleteListButton list={list}/>
    </Box>

    <Droppable droppableId={`${list.id}`}>
      {(provided) => {
        return (
        <div {...provided.droppableProps} ref={provided.innerRef}>
          {list.issues.map((issue, index) => {
            return <Issue key={issue.id} issue={issue} index={index} />
          })}
          {provided.placeholder}
        </div>)
      }}
    </Droppable>
    <AddIssueButton listId={list.id} projectId={id}/>
  </Box>
  )
          };

export default List;
