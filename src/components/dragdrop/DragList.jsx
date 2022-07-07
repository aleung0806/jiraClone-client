import React, { useEffect } from "react";
import styled from "styled-components";
import { DragDropContext } from "react-beautiful-dnd";
import DraggableElement from "./DraggableElement";
import { useDispatch, useSelector } from 'react-redux'
import { setProjects } from '../../reducers/projectReducer'

const DragDropContextContainer = styled.div`
  padding: 20px;
  border: 4px solid indianred;
  border-radius: 6px;
`;

const ListGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 8px;
`;


const removeFromList = (list, index) => {
  const result = Array.from(list);
  const [removed] = result.splice(index, 1);
  return [removed, result];
};

const addToList = (list, index, element) => {
  const result = Array.from(list);
  result.splice(index, 0, element);
  return result;
};

const lists = ["todo", "inProgress", "done"];

const generateLists = () =>
  lists.reduce(
    (acc, listKey) => ({ ...acc, [listKey]: getItems(10, listKey) }),
    {}
  );

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
    const listCopy = { ...lists };

    const sourceList = listCopy[result.source.droppableId];
    const [removedElement, newSourceList] = removeFromList(
      sourceList,
      result.source.index
    );
    listCopy[result.source.droppableId] = newSourceList;
    const destinationList = listCopy[result.destination.droppableId];
    listCopy[result.destination.droppableId] = addToList(
      destinationList,
      result.destination.index,
      removedElement
    );

    const projectsCopy = projects

    projectsCopy[0].lists = listCopy
      
    dispatch(setProjects(projectsCopy))
  };

  return (

    <DragDropContextContainer>
      <DragDropContext onDragEnd={onDragEnd}>
        <ListGrid>
          {lists !== null && lists.map((list) => {
            console.log('list', list)
            return (
            <DraggableElement
              elements={list.issues}
              key={list.id}
              prefix={list.id}
            />
          )})}
        </ListGrid>
      </DragDropContext>
    </DragDropContextContainer>
  );
}

export default DragList;
