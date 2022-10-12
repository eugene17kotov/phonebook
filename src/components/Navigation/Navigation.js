import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/authSelectors';
import { useState } from 'react';

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);
  const navigate = useNavigate();

  const [anchorElNav, setAnchorElNav] = useState(null);

  const [tabValue, setTabValue] = useState('home');

  const handleTabChange = (_, newValue) => {
    setTabValue(newValue);
  };

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseContactsNavButton = () => {
    setAnchorElNav(null);

    if (!isLoggedIn) {
      navigate('/login');
      return;
    }

    navigate('/contacts', { replace: true });
  };

  const handleCloseHomeNavButton = () => {
    setAnchorElNav(null);
    navigate('/');
  };

  return (
    <>
      <MenuBookRoundedIcon
        sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
      />

      <Typography
        variant="h6"
        noWrap
        component="a"
        href="/goit-react-hw-08-phonebook/"
        sx={{
          mr: 2,
          display: { xs: 'none', md: 'flex' },
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.3rem',
          color: 'inherit',
          textDecoration: 'none',
        }}
      >
        PHONEBOOK
      </Typography>

      <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>

        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: 'block', md: 'none' },
          }}
        >
          {/* {pages.map(page => ( */}
          <MenuItem onClick={handleCloseHomeNavButton}>
            <Typography textAlign="center">Home</Typography>
          </MenuItem>

          <MenuItem onClick={handleCloseContactsNavButton}>
            <Typography textAlign="center">Contacts</Typography>
          </MenuItem>

          {/* ))} */}
        </Menu>
      </Box>

      <MenuBookRoundedIcon
        sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}
      />

      <Typography
        variant="h5"
        noWrap
        component="a"
        href=""
        sx={{
          mr: 2,
          display: { xs: 'flex', md: 'none' },
          flexGrow: 1,
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.3rem',
          color: 'inherit',
          textDecoration: 'none',
        }}
      >
        PHONEBOOK
      </Typography>

      <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          textColor="inherit"
          indicatorColor="secondary"
          aria-label="Navigation tabs"
          sx={{ display: { xs: 'none', md: 'flex' } }}
        >
          <Tab
            value="home"
            label="Home"
            onClick={handleCloseHomeNavButton}
            sx={{ my: 2, color: 'white', display: 'block' }}
          />

          <Tab
            value="contacts"
            label="Contacts"
            onClick={handleCloseContactsNavButton}
            sx={{ my: 2, color: 'white', display: 'block' }}
          />
        </Tabs>
      </Box>
    </>
  );
};

export default Navigation;
