import { useEffect } from "react";
import styled from "styled-components";
import { DragDropContext } from "react-beautiful-dnd";
import List from "./List";
import { useDispatch, useSelector } from 'react-redux'
import { setLists } from '../reducers/projectReducer'
import { useParams } from 'react-router-dom'
import { IconButton } from '@mui/material'
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import AddListButton from './AddListButton'

const ProjectStyle = styled.div`
  padding: 20px;
  text-transform: uppercase;
  font-weight: bold;
  background-color: orange;
`;

const HeaderStyle = styled.div`
  font-color: pink;
  margin-bottom: 10px;
  margin-top: 0px;
`

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
    <ProjectStyle>
     <HeaderStyle>{project.title}</HeaderStyle>
      <DragDropContext onDragEnd={onDragEnd}>
          {lists !== null && lists.map((list) => <List list={list} key={list.id}/>)}
      </DragDropContext>
      <AddListButton projectId={projectId}/>
    </ProjectStyle>
  );
}

export default Project;
