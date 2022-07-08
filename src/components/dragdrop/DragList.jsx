import React, { useEffect } from "react";
import styled from "styled-components";
import { DragDropContext } from "react-beautiful-dnd";
import DraggableElement from "./DraggableElement";
import { useDispatch, useSelector } from 'react-redux'
import { setLists } from '../../reducers/projectReducer'

const DragDropContextContainer = styled.div`
  padding: 20px;
  border-radius: 6px;
`;

const ListGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 8px;
`;

const removeFromList = (list, index) => {
  let issuesCopy = [...list.issues]
  const removed = issuesCopy[index]
  issuesCopy.splice(index, 1)
  return [removed, {...list, issues: issuesCopy}]
};

const addToList = (list, index, element) => {
  let issuesCopy =[...list.issues]
  issuesCopy.splice(index, 0, element)
  return {...list, issues: issuesCopy}
};

const lists = ["todo", "inProgress", "done"];



function DragList() {
  const projects = useSelector(state => state.projects)
  const dispatch = useDispatch()
  
  const lists = 
    projects !== null
    ? projects[0].lists
    : null

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

    console.log('listsCopy1', listsCopy)

    const destinationList = listsCopy.find(list => list.id === destinationListId)
    const newDestinationList = addToList(destinationList, destinationIndex, removedIssue)
    listsCopy = listsCopy.map(list => list.id === destinationListId ? newDestinationList : list)

    console.log('listsCopy2', listsCopy)

    dispatch(setLists(listsCopy))
  };

  return (

    <DragDropContextContainer>
      <DragDropContext onDragEnd={onDragEnd}>
        <ListGrid>
          {lists !== null && lists.map((list) => {
            return (
            <DraggableElement
              list={list}
              key={list.id}
            />
          )})}
        </ListGrid>
      </DragDropContext>
    </DragDropContextContainer>
  );
}

export default DragList;
