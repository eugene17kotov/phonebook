import { useDispatch, useSelector } from 'react-redux';
import authOperations from 'redux/auth/authOperations';
import authSelectors from 'redux/auth/authSelectors';
import { useState } from 'react';

import {Box, IconButton, Typography, Menu, Avatar, Tooltip, MenuItem} from '@mui/material';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { name, email } = useSelector(authSelectors.selectUser);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handelLogoutUser = () => {
    dispatch(authOperations.logout());
  };

  const settings = [{ name: 'Logout', clickFunction: handelLogoutUser }];

  return (
    <>
      <Typography
        sx={{
          mr: 2,
          display: { xs: 'none', md: 'flex' },
          fontWeight: 700,
          color: 'inherit',
          textDecoration: 'none',
        }}
      >
        Welcome, {email}
      </Typography>
      <Box sx={{ flexGrow: 0 }}>
        <Tooltip title="Open settings">
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <Avatar alt={name} sx={{ m: 1, bgcolor: 'secondary.main' }} />
          </IconButton>
        </Tooltip>
        <Menu
          sx={{ mt: '45px' }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          {settings.map(({ name, clickFunction }) => (
            <MenuItem key={name} onClick={clickFunction}>
              <Typography textAlign="center">{name}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </>
  );
};

export default UserMenu;
