import { Draggable } from "react-beautiful-dnd"
import styled  from "styled-components"
import IssueOptionsDropdown from './issue/IssueOptionsDropdown'
import { useState } from 'react'
import BuildCircleIcon from '@mui/icons-material/BuildCircle'
import TypeIcon from './reusable/TypeIcon'
import { Typography } from '@mui/material'
import InitialsAvatar from './reusable/InitialsAvatar'
import PriorityIcon from './reusable/PriorityIcon'

import IssueDetails from './issue/IssueDetails'

import {
  Box
} from '@mui/material'

const issueHeaderStyle = {
  'width': '100%',
  'display': 'flex',
  'flexDirection': 'row',
  'justifyContent': 'space-between',
  'alignItems': 'center',
  fontSize: '14px',
  color: 'text.primary'
}

const issueFooterStyle = {
  'width': '100%',
  'display': 'flex',
  'flexDirection': 'row',
  'alignItems': 'center',
  'justifyContent': 'space-between'
}

const issueStyle = {
  padding: '10px',
  borderRadius: '4px',
  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
  background: 'white',
  margin: '0 0 8px 0',
  display: 'grid',
  gridGap: '20px',
  flexDirection: 'column',
  textTransform: 'none',
  fontWeight: 'normal',

}

const Issue = ({ issue, index }) => {

  const [openDetail, setOpenDetail] = useState(false)
  const handleClick = (e) => {

      setOpenDetail(true)

  }

  const handler = (val) => {
    //console.log('handling again', val)
    setOpenModal(val)
  }

  const handleClose = () => {
    
    setOpenDetail(false)
  }

  return (
    <Box >
    <Box onClick={handleClick}>
    <Draggable  draggableId={`${issue.id}`} index={index} >
      {(provided, snapshot) => {
        return (
          <Box sx={issueStyle}
            ref={provided.innerRef}
            snapshot={snapshot}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <Box sx={issueHeaderStyle}>
              {issue.title}
              <IssueOptionsDropdown issue={issue}/>
            </Box>
            <Box sx={issueFooterStyle}>
                <TypeIcon type={issue.type}/>
                <Box sx={{display: 'flex', gap: 1}}>
                  <InitialsAvatar name='John Doe' sx={{height: '20px', width: '20px', fontSize: '8px'}}/>
                </Box>
            </Box>
          </Box>
        )
      }}
    </Draggable>
    </Box>
    <Box className='detailsButton' sx={{display:'flex', backgroundColor: 'red'}}>
      <IssueDetails  issue={issue} open={openDetail} handleClose={handleClose}/>
    </Box>
    </Box>
  );
};

export default Issue;
