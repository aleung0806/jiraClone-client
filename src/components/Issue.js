import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const Issue = ({issue, index}) => {
  const name = issue.name
  const id = issue.id
  return (

    <Draggable key={id} draggableId={name} index={index}>
    {(provided) => (
      <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
        <p>
          { name }
        </p>
      </li>
    )}
  </Draggable>

  )
}

export default Issue