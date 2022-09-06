import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { clearAuthToken } from '../services/storageService';

export default function SimpleAppBar() {
  
  const dispatch = useDispatch();
  const authState = useSelector(state => state.auth);

  const logout = () => {
    clearAuthToken();
    dispatch({
      type: 'auth/logout'
    });
  }

  useEffect(() => {
    console.log(authState);
  }, [authState]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/">
              OmniNotify
            </Link>
          </Typography>
            {(
              !authState.auth 
                ? <Link to="/login">
                    <Button color="inherit">Login</Button>
                  </Link>
                : <span onClick={logout}>
                    <Link to="/login">
                      <Button color="inherit">Logout</Button>
                    </Link>
                  </span>
            )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
