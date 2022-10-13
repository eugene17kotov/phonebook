import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/authSelectors';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import AuthNav from 'components/AuthNav/AuthNav';
import Footer from 'components/Footer/Footer';

import {
  AppBar,
  Toolbar,
  Container,
  CircularProgress,
  Box,
} from '@mui/material';

export default function StyledAppBar() {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);

  return (
    <>
      <AppBar position="static" component="header">
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
          </Toolbar>
        </Container>
      </AppBar>

      <Suspense
        fallback={
          <Box sx={{ width: '100vw', height: '100vh', position: 'relative' }}>
            <CircularProgress
              sx={{
                position: 'absolute',
                top: '40%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            />
          </Box>
        }
      >
        <Outlet />
      </Suspense>

      <Footer />
    </>
  );
}
