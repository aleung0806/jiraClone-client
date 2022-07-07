import { Typography } from '@mui/material';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

import './Issue.css'

const Issue = ({issue, index}) => {
  const name = issue.name
  const id = issue.id
  return (

  <Draggable key={id} draggableId={name} index={index}>
    {(provided) => (
      <li className='issue' ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
        <Typography>
          { name }
        </Typography>
      </li>
    )}
  </Draggable>

  )
}

export default Issue