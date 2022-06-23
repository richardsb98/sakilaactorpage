import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';

export default function  ActorAppbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          <a href="http://127.0.0.1:49366/sakila.html">
          <HomeIcon />
            </a>
          </IconButton>
          <a href="http://localhost:3001/">
          <h3> Film Search </h3>
          </a>
          <br/>
  
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }} marginRight="160px">
            Actor Database
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
