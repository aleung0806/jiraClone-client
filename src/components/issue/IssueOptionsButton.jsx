import { useState } from 'react'
import {
  Button,
  Menu,
  MenuItem,
  Divider,
  IconButton
} from '@mui/material'

import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import styled from 'styled-components'
import { deleteIssue } from '../../reducers/projectReducer'
import { useDispatch } from 'react-redux'
import IssueModal from './IssueModal'
const MenuButtonStyles = styled.span`
  
`;

const IssueOptionsButton = ({issue}) => {
  const dispatch = useDispatch()
  const [openModal, setOpenModal] = useState(false)

  const navigate = useNavigate()
  const projects = useSelector(state => state.projects)
  const [anchor, setAnchor] = useState(null);

  const handleClick = (e) => {setAnchor(e.currentTarget)}

  const handleClose = () => {setAnchor(null)}

  const handleClickOptions  = () => {
    setOpenModal(true)
    setAnchor(null)
    console.log(openModal)
  }

  const handleClickDelete = () => {
    
    dispatch(deleteIssue(issue.id))
  }


  return (
    <MenuButtonStyles>
        <IconButton color="secondary" onClick={handleClick}>
          <MoreHorizRoundedIcon sx={{"&:hover":{color: '#3f3f3f'}}}/>
        </IconButton>
      <Menu id="basic-menu" anchorEl={anchor} open={Boolean(anchor)} onClose={handleClose}>
        <MenuItem  onClick={handleClickOptions}>options</MenuItem>
        <MenuItem  onClick={handleClickDelete}>delete</MenuItem>
      </Menu>
        <IssueModal open={openModal} setOpen={setOpenModal} issue={issue}/>
    </MenuButtonStyles>
  );
}

export default IssueOptionsButton