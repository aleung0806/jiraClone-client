import { useState } from 'react'
import { useSelector } from 'react-redux'

import { useTheme } from '@mui/material/styles'
import { 
  Box, 
  IconButton
} from '@mui/material'
import {ReactComponent as ChevronRight } from '@atlaskit/icon/svgs/chevron-right.svg'
import {ReactComponent as ChevronLeft} from '@atlaskit/icon/svgs/chevron-left.svg'

import AtlasIcon from './reusable/AtlasIcon'
import ProjectsList from './sideMenu/ProjectsList'

const contentStyles = {
  display: 'flex',
  flexDirection: 'column',
  padding: '10px'
}

const drawerStyles = {
  display: 'flex',
  flexDirection: 'row-reverse',
  justifyContent: 'space-between'
}

const contentStyle = (open) => {
  return open
    ? {...contentStyles}
    : {...contentStyles, display: 'none'}
}

const drawerStyle = (open) => {
  return open 
  ? { ...drawerStyles, flex: 20}
  : { ...drawerStyles, flex: 2 }
}


const pullTabStyle = {
  display: 'flex',
  flexDirection: 'column',
}

const borderStyle = {
  flex: 1,
  height: '45px', 
  width: '12px',
  borderRight: '2px solid #DFE1E6'
}

const iconStyle = {
  position: 'relative',
  borderRadius: '50%',
  height: '24px',
  width: '24px',
  right: '10px',
  border: '1px solid #DFE1E6', 
  transform: 'translateX(10px)',
  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
}

const SideMenu = () => {
  const theme = useTheme()
  const [open, setOpen] = useState(false)

  const handleDrawerOpen = () => setOpen(true)
  const handleDrawerClose = () => setOpen(false)

  const handleDrawer = () => {
      open
        ? handleDrawerClose() 
        : handleDrawerOpen()
  }

  return (
    <Box sx={drawerStyle(open)}>
      <Box sx={pullTabStyle}>
          <Box sx={borderStyle}/>
          <IconButton onClick={handleDrawer} sx={iconStyle}>
            <AtlasIcon Svg={ open ? ChevronLeft : ChevronRight} />
          </IconButton>
          <Box sx={{...borderStyle, flex: 4}}/>
      </Box>
      <Box sx={contentStyle(open)}>
        <ProjectsList/>
      </Box>
    </Box>
  )
}


export default SideMenu