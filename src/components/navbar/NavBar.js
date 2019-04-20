import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';



const NavBar = () => <AppBar position="static" style={{marginBottom: 15 }} >
    <Toolbar >
    <IconButton  color="inherit" aria-label="Menu">
        <MenuIcon />
    </IconButton>
     <Typography variant="h6" color="inherit" >
        PixaBay Image Finder
    </Typography>
  
    </Toolbar>
    </AppBar>
export default NavBar;