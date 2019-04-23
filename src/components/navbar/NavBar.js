import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';



const NavBar = () => <AppBar position="sticky" style={{marginBottom: 50, backgroundColor: 'white', color: 'black' }} >
    <Toolbar >
    <IconButton  color="inherit" aria-label="Menu">
        <MenuIcon />
    </IconButton>
     <Typography variant="h6" color="inherit" >
        Easy Image Finder
    </Typography>
  
    </Toolbar>
    </AppBar>
export default NavBar;