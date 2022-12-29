import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { Avatar, Collapse, Divider, Drawer, Icon, List, ListItemButton, ListItemIcon, ListItemText, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

interface ISideBarProps {
    children: React.ReactNode;
  }



export const SideBar: React.FC<ISideBarProps> = ({children}) => {
  const theme = useTheme();

  const [open, setOpen] = React.useState(false);
 
  const handleClick = () => {
    setOpen(!open);
  };

    return (
    <>
    <Drawer variant='permanent'>
        <Box width={theme.spacing(28)} height="100%" display="flex" flexDirection="column">
            <Box width="100%" height={theme.spacing(14)} 
                display="flex" alignItems="Center" justifyContent="center" >
                <Avatar
                sx={{height: theme.spacing(8), width: theme.spacing(8)}} 
                src='https://foto.jpg' />
            </Box>
            <Divider />
            <Box flex={1}>
              <List component="nav">
                <ListItemButton>
                  <ListItemIcon>
                   <Icon>dashboard</Icon>                    
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItemButton>
              <ListItemButton onClick={handleClick}>
              <ListItemIcon>
               <Icon> inboxIcon </Icon> 
              </ListItemIcon>
              <ListItemText primary="Cadastro" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <Icon>starBorder</Icon>
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <Icon>starBorder</Icon>
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItemButton>
        </List>
      </Collapse>
              </List>
            </Box>   
        </Box>
    </Drawer>
    <Box height="100vh" marginLeft={theme.spacing(28)} >
    {children}
    </Box>
    </>
    
  );
};