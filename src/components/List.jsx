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

const ListHeader = styled.div`
  display: flex;
  text-transform: uppercase;
  margin-bottom: 10px;
`;

const OptionsButtonStyles = styled.div`
  margin-left: auto;
  margin-right: 0;
`

const listStyle = {
  display: 'inline-block',
  width: '275px',
  padding: '10px',
  borderRadius: '3px',
  verticalAlign: 'top',
  margin: '5px',
  borderWidth: 'thin',
  backgroundColor: '#F4F5F7'
}



const List = ({list}) => {

  const dispatch = useDispatch()
  const { id } = useParams()

  return (
  <Box sx={listStyle}>
    <ListHeader>
      {list.title}
      <OptionsButtonStyles>
        <DeleteListButton list={list}/>
      </OptionsButtonStyles>
    </ListHeader>

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
