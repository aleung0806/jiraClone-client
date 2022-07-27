import { Draggable } from "react-beautiful-dnd";
import styled  from "styled-components"
import IssueOptionsDropdown from './issue/IssueOptionsDropdown'
import { useState } from 'react'
import BuildCircleIcon from '@mui/icons-material/BuildCircle'

import { blue } from '@mui/material/colors'

import {
  Box
} from '@mui/material'

const Avatar = styled.img`
  height: 30px;
  width: 30px;
  border: 3px solid white;
  border-radius: 50%;
`
const Author = styled.div`
  display: flex;
  align-items: center;
`
const issueHeaderStyle = {
  'width': '100%',
  'display': 'flex',
  'flexDirection': 'row',
  'justifyContent': 'space-between',
  'alignItems': 'center'
}

const issueFooterStyle = {
  'width': '100%',
  'display': 'flex',
  'flexDirection': 'row',
  'justifyContent': 'space-between',
  'alignItems': 'center'
}

export const DragIssue = styled.div`
  padding: 10px;
  border-radius: 6px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  background: white;
  margin: 0 0 8px 0;
  display: grid;
  grid-gap: 20px;
  flex-direction: column;
  text-transform: none;
  font-weight: normal;
`

const Issue = ({ issue, index }) => {

  const [openModal, setOpenModal] = useState(false)

  const handleClick = () => {
    // setOpenModal(true)
    // console.log('clicked')
  }

  const handler = (val) => {
    console.log('handling again', val)
    setOpenModal(val)
    console.log('state is', openModal)
  }

  return (
    <Box onClick={handleClick}>
    <Draggable draggableId={`${issue.id}`} index={index} >
      {(provided, snapshot) => {
        return (
          <DragIssue
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
              <BuildCircleIcon style={{ color: blue[500] }}/>
              <span>{issue.content}</span>
              <Author>
              </Author>
            </Box>
          </DragIssue>
        );
      }}
    </Draggable>
    </Box>
  );
};

export default Issue;
