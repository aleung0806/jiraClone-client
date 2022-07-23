import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

import { useSelector } from 'react-redux'
import { useState } from 'react'

export default function SideMenu() {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <div>
          <Button onClick={() => {setShowMenu(true)}}>show drawer menu</Button>
          <Drawer
            open={showMenu}
            onClose={() => {setShowMenu(false)}}
            hideBackdrop={true}

          >
              <Box
                sx={{ width: 250, borderColor: '#3f50b5' }}
                role="presentation"
                onClick={() => {setShowMenu(false)}}
                
              >
              <List>
                {['button1', 'button2'].map((text, index) => (
                  <ListItem key={text} disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                      </ListItemIcon>
                      <ListItemText primary={text} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Drawer>
    </div>
  );
}
