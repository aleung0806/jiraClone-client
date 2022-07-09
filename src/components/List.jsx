import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Droppable } from "react-beautiful-dnd"

import styled from "styled-components"
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';

import Issue, { DragItem } from './Issue'
import AddIssueButton from './AddIssueButton'
import { IconButton } from '@mui/material';

const ColumnHeader = styled.div`
  display: flex;
  text-transform: uppercase;
  margin-bottom: 10px;
`;

const OptionsButtonStyles = styled.div`
  margin-left: auto;
  margin-right: 0;
`

const DroppableStyles = styled.div`
  padding: 10px;
  border-radius: 6px;
  background: #d4d4d4;
`;

const List = ({list}) => {

  const dispatch = useDispatch()
  const { id } = useParams()

  return (
  <DroppableStyles>
    <ColumnHeader>
      {list.name}
      <OptionsButtonStyles>
        <IconButton color="secondary" onClick={()=>{}}>
          <MoreHorizRoundedIcon/>
        </IconButton>
       </OptionsButtonStyles>
    </ColumnHeader>

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
