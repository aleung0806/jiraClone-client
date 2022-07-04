import { useSelector, useDispatch } from 'react-redux'
import Issue from './Issue'
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { setIssues } from '../reducers/issueReducer'
import './List.css'
import { Paper } from '@mui/material'


const List = ({ list }) => {
  const { name, issues } = list 
  const dispatch = useDispatch()

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(issues);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    dispatch(setIssues(items))
  }

  return (
    <div className="list">
    <Paper elevation={3} >
      <h1>{name}</h1>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="issues">
          {(provided) => (
            <ul className="issues" {...provided.droppableProps} ref={provided.innerRef}>
              {issues.map((issue, index) => {
                console.log('issue')
                return <Issue key={issue.id} issue={issue} index={index}/> 
              })}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>

      </DragDropContext>
    </Paper>
    </div>
  )
}

export default List
