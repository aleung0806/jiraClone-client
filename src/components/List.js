import { useSelector, useDispatch } from 'react-redux'
import Issue from './Issue'
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { setIssues } from '../reducers/issueReducer'
import { 
  Typography, 
  Paper, 
  Stack, 
  Box
} from '@mui/material'

import { styled } from '@mui/system';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const List = ({ list }) => {
  const { name, issues } = list 
  const dispatch = useDispatch()


  return (
     <Paper sx={{
        padding: 1,
        width: 300
      }} >
      <Typography>{name}</Typography>
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
     </Paper>
  )
}

export default List
 