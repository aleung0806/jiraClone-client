import { Droppable } from "react-beautiful-dnd";
import Issue from "./Issue";
import React from "react";
import styled from "styled-components";
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import { IconButton, Input } from '@mui/material'
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import { createIssue } from '../reducers/projectReducer'
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';

import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { DragItem } from './Issue'

const ColumnHeader = styled.div`
  display: flex;
  text-transform: uppercase;
  margin-bottom: 10px;
`;

const TrashButtonStyles = styled.div`
  margin-left: auto;
  margin-right: 0;
`



const AddButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;
`;

const DroppableStyles = styled.div`
  padding: 10px;
  border-radius: 6px;
  background: #d4d4d4;
`;

const List = ({list}) => {
  const dispatch = useDispatch()
  const { id } = useParams()

  const createIssueHandler = (e) => {
    dispatch(createIssue({issue: {id: "10", name: 'another task'}, listId: list.id, projectId: id}))
  }

  const deleteListHandler = () => {

  }



  return (
  <DroppableStyles>
    <ColumnHeader>
      {list.name}
      <TrashButtonStyles>
        <IconButton color="secondary" onClick={deleteListHandler}>
          <MoreHorizRoundedIcon />
        </IconButton>
      </TrashButtonStyles>
    </ColumnHeader>

    <Droppable droppableId={`${list.id}`}>
      {(provided) => {
        return (
        <div {...provided.droppableProps} ref={provided.innerRef}>
          {list.issues.map((item, index) => {
            console.log('item--', item)
            console.log('index',index)
            return <Issue key={item.id} item={item} index={index} />
          })}
          {provided.placeholder}
        </div>)
      }}
    </Droppable>
    <AddButtonWrap>
      <IconButton color="secondary" onClick={createIssueHandler}>
          <AddRoundedIcon fontSize="large"/>
      </IconButton>
    </AddButtonWrap>
  </DroppableStyles>
  )
          };

export default List;
