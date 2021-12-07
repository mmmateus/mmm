import * as React from 'react';

import { useLocation } from 'react-router-dom'

import List from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';

import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import WorkIcon from '@mui/icons-material/Work';
import MailIcon from '@mui/icons-material/Mail';


const MainMenu = () => {
  const location = useLocation();

  const menuList = [
    {
      text: 'Home',
      path: '/',
      icon: <HomeIcon />
    },
    {
      text: 'About',
      path: '/about',
      icon: <PersonIcon />
    },
    {
      text: 'Work',
      path: '/work',
      icon: <WorkIcon />
    },
    {
      text: 'Contact',
      path: '/contact',
      icon: <MailIcon />
    },
  ];

  const checkSelected = (text: String) => {
    return text === location.pathname;
  };

  return (
    <List>
      {menuList.map(item => (
        <ListItemButton key={item.text} selected={checkSelected(item.path)} component="a" href={item.path}>
          <ListItemIcon>
            { item.icon }
          </ListItemIcon>
          <ListItemText primary={item.text}/>
        </ListItemButton>
      ))}
    </List>
  );
}

export default MainMenu;