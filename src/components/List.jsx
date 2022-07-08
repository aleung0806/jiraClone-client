import { Droppable } from "react-beautiful-dnd";
import Issue from "./Issue";
import React from "react";
import styled from "styled-components";

const ColumnHeader = styled.div`
  text-transform: uppercase;
  margin-bottom: 20px;
`;

const DroppableStyles = styled.div`
  padding: 10px;
  border-radius: 6px;
  background: #d4d4d4;
`;

const List = ({list}) => {
  console.log('issues', list.issues)
  return (
  <DroppableStyles>
    <ColumnHeader>{list.name}</ColumnHeader>
    <Droppable droppableId={`${list.id}`}>
      {(provided) => {
        return (
        <div {...provided.droppableProps} ref={provided.innerRef}>
          {list.issues.map((item, index) => {
            console.log('item', item)
            console.log('index',index)
            return <Issue key={item.id} item={item} index={index} />
          })}
          {provided.placeholder}
        </div>)
      }}
    </Droppable>
  </DroppableStyles>
  )
          };

export default List;
