import { useEffect, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';

import AppBar from 'components/AppBar/AppBar';
import authSelectors from 'redux/auth/authSelectors';
import authOperations from 'redux/auth/authOperations';
import RestrictedRoute from 'routes/RestrictedRoute';
import PrivatRoute from 'routes/PrivateRoute';

import { CircularProgress, Box } from '@mui/material';

const HomePage = lazy(() => import('pages/HomePage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(authSelectors.selectIsRefreshing);

  useEffect(() => {
    dispatch(authOperations.refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Box sx={{ width: '100vw', height: '100vh', position: 'relative' }}>
      <CircularProgress
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />
    </Box>
  ) : (
    <Routes>
      <Route path="/" element={<AppBar />}>
        <Route index element={<HomePage />} />

        <Route
          path="/register"
          element={
            <RestrictedRoute component={RegisterPage} redirectTo="/contacts" />
          }
        />

        <Route
          path="/login"
          element={
            <RestrictedRoute component={LoginPage} redirectTo="/contacts" />
          }
        />

        <Route
          path="/contacts"
          element={<PrivatRoute component={ContactsPage} redirectTo="/login" />}
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};
