import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../state/store";
import { logout } from "../../state/features/authSlice";
import "./NavBar.scss";

import LoginModal from "./LoginModal";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  MenuItem,
  Menu,
  Avatar,
  Box,
} from "@mui/material";

import { logout_request } from "../../hooks/auth_requests";
import RegisterModal from "./Register/RegisterModal";

const NavBar = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
  const username = useAppSelector((state) => state.auth.username);
  const [anchorEl, setAnchorEl] = useState(null);
  
  const [loginOpen, setLoginOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);

  const handleLoginOpen = () => {
    setRegisterOpen(false);
    setLoginOpen(true);
  };

  const handleLoginClose = () => {
    setLoginOpen(false);
  };

  const handleRegisterOpen = () => {
    setLoginOpen(false);
    setRegisterOpen(true);
  };

  const handleRegisterClose = () => {
    setRegisterOpen(false);
  };

  const handleLogout = () => {
    dispatch(logout_request() as any);
  };

  const handleMenuOpen = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };


  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <Avatar src="/page-icon.png" alt="Page Icon" />
        </IconButton>
        {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}> */}
        <Typography variant="h6" component="a">
          Mechatronics Hub
        </Typography>
        <Button color="inherit">Questions</Button>
        <Button color="inherit">Tags</Button>
        <Box sx={{ flexGrow: 1 }} />
        {isLoggedIn ? (
          <IconButton onClick={handleMenuOpen}>
            <Avatar
              src="/user-profile-picture.png"
              alt="User Profile Picture"
            />
          </IconButton>
        ) : (
          <IconButton onClick={handleLoginOpen}>
            <Avatar src="/user-logo.png" alt="User Logo" />
          </IconButton>
        )}
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
          <MenuItem onClick={handleMenuClose}>Account</MenuItem>
          <MenuItem onClick={handleMenuClose}>Dashboard</MenuItem>
          <MenuItem component={NavLink} to="/user-activity" onClick={handleMenuClose}>My Activity</MenuItem>
          <MenuItem onClick={()=>{handleLogout();handleMenuClose()}}>Logout</MenuItem>
        </Menu>
        <LoginModal open={loginOpen} handleClose={handleLoginClose} handleRegisterOpen={handleRegisterOpen}/>
        <RegisterModal open={registerOpen} handleClose={handleRegisterClose} handleLoginOpen={handleLoginOpen} />
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
