import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Droppable } from "react-beautiful-dnd"

import styled from "styled-components"
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import { 
  IconButton, 
} from '@mui/material';


import Issue, { DragItem } from './Issue'
import AddIssueButton from './AddIssueButton'

const ListHeader = styled.div`
  font-size: 19px;
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
  font-size: 20px;
  color: #bfcadd;
  width: 300px;
  max-height: 85vh;
  overflow-y: scroll;
  scrollbar-width: thin;
  padding: 10px;
  border-radius: 6px;
  background: #4c6e9f;
  vertical-align: top;
  margin: 5px;
`;

const DropWrapper = styled.span`
  border: 3px solid red;
  width: 10px;
`

const List = ({list}) => {

  const dispatch = useDispatch()
  const { id } = useParams()

  return (
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
  </DropWrapper>
  )
          };

export default List;
