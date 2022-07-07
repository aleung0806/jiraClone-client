import { useSelector, useDispatch } from 'react-redux'
import List from './List'

import { 
  Box,
  Grid, 
  Typography,
  Stack,
  Item
 } from '@mui/material'

import { DragDropContext } from 'react-beautiful-dnd'

const Project = ({project}) => {
  const dispatch = useDispatch()
  const {id, lists, name } = project

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(issues);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    dispatch(setIssues(items))
  }

  return (
    <Box  sx={{
      padding: 2,
    }} >
    <Typography variant='h5'> {name} </Typography>
      <DragDropContext onDragEnd={handleOnDragEnd}>
          <Stack direction='row' spacing={5} >
            {lists.map(list => {
              return (      
                <List key={list.id} list={list}/>
              ) 
            })}
          </Stack>
      </DragDropContext>
    </Box>
  )
}

export default Project