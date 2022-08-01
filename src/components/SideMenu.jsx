import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

import {ReactComponent as ChevronRight } from '@atlaskit/icon/svgs/chevron-right.svg'
import {ReactComponent as ChevronLeft} from '@atlaskit/icon/svgs/chevron-left.svg'

import AtlasIcon from './reusable/AtlasIcon'


import { useSelector } from 'react-redux'

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
  border: 'none'

});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(3)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(4)} + 1px)`,
  },
  border: 'none'


});

const DrawerHeader = styled('div')(({ theme }) => ({
  marginTop: 50,
  display: 'flex',
  alignItems: 'top',
  justifyContent: 'flex-end',
  // necessary for content to be below app bar
  ...theme.mixins.toolbar
}));



const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
    
  }),
);

export default function MiniDrawer() {
  const projects = useSelector(state => state.projects)
  const theme = useTheme()
  const [open, setOpen] = React.useState(false)

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleDrawer = () => {
      open
        ? handleDrawerClose() 
        : handleDrawerOpen()
    
  }

//~ Stylings ~//

const proj = {
  fontSize: 22,
  fontWeight: 900,
  textAlign: 'center',

}

const iconStyle = (theme) => {
  console.log(theme.zIndex)
  return {
    position: 'relative',
    height: '24px',
    width: '24px',
    right: '10px',
    border: '1px solid #DFE1E6', 
    transform: 'translateX(10px)',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
  }
}
  

  return (
   
      <Drawer variant="permanent" open={open} sx={{}}>
        <DrawerHeader>
        <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'top', alignItems: 'right', padding: 0, flexWrap: 'nowrap'}}>

          <Box sx={{height: '45px', width: '12px', borderRight: '1px solid #DFE1E6'}}></Box>

          <IconButton onClick={handleDrawer} sx={iconStyle(theme)}>
            <AtlasIcon Svg={ open ? ChevronLeft : ChevronRight} />
          </IconButton>
          <Box sx={{height: '1000px', width: '12px', borderRight: '1px solid #DFE1E6'}}></Box>

          </Box>


        </DrawerHeader>


      </Drawer>
  )
}
