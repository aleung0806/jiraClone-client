import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Droppable } from "react-beautiful-dnd"
import ListOptionsButton from './list/ListOptionsButton'
import AddIssueButton from './list/AddIssueButton'

import styled from "styled-components"
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import { 
  IconButton, 
} from '@mui/material';


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

const DroppableStyles = styled.span`
  display: inline-block;
  width: 300px;
  padding: 10px;
  border-radius: 6px;
  background: #d4d4d4;
  vertical-align: top;
  margin: 5px;
`;

const List = ({list}) => {

  const dispatch = useDispatch()
  const { id } = useParams()

  return (
  <DroppableStyles>
    <ListHeader>
      {list.title}
      <OptionsButtonStyles>
        <ListOptionsButton/>
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
  </DroppableStyles>
  )
          };

export default List;
