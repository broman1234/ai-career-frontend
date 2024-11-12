import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component={Link} to="/" sx={{ 
          flexGrow: 1, 
          textDecoration: 'none', 
          color: 'white' 
        }}>
          Web3 Career Guide
        </Typography>
        <Box>
          <Button color="inherit" component={Link} to="/overview">
            Overview
          </Button>
          <Button color="inherit" component={Link} to="/skills">
            Skills
          </Button>
          <Button color="inherit" component={Link} to="/salary">
            Salary
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar; 