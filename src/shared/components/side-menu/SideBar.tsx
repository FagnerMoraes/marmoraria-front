import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { Avatar, Collapse, Divider, Drawer, Icon, List, ListItemButton, ListItemIcon, ListItemText, useMediaQuery, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import PersonAddAlt1 from '@mui/icons-material/PersonAddAlt1';
import DomainAdd from '@mui/icons-material/DomainAdd';
import LibraryAdd from '@mui/icons-material/LibraryAdd';
import React from 'react';
import { useDrawerContext } from '../../contexts';

interface ISideBarProps {
    children: React.ReactNode;
  }

  interface IListItemLinkProps{

  }

  const ListItemLink: React.FC<IListItemLinkProps> = ({ }) => {
    return(
      <ListItemButton>
        <ListItemIcon>
            <Icon>dashboard</Icon>                    
        </ListItemIcon>
        <ListItemText primary="Inicio" />
      </ListItemButton>
    );
  };


export const SideBar: React.FC<ISideBarProps> = ({children}) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const [open, setOpen] = React.useState(false);
 
  const { isDrawerOpen, toggleDrawerOpen } = useDrawerContext();

  const handleClick = () => {
    setOpen(!open);
  };

    return (
    <>
    <Drawer open={isDrawerOpen} variant={smDown ?'temporary': 'permanent'} onClose={toggleDrawerOpen}>
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
                <ListItemText primary="Inicio" />
              </ListItemButton>
              <ListItemButton onClick={handleClick}>
              <ListItemIcon>
               <LibraryAdd />
              </ListItemIcon>
              <ListItemText primary="Cadastro" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <PersonAddAlt1 />
            </ListItemIcon>
            <ListItemText primary="Cliente" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <DomainAdd />
            </ListItemIcon>
            <ListItemText primary="Fornecedor" />
          </ListItemButton>
        </List>
      </Collapse>
              </List>
            </Box>   
        </Box>
    </Drawer>
    <Box height="100vh" marginLeft={smDown ? 0 : theme.spacing(28)} >
    {children}
    </Box>
    </>
    
  );
};