import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom/dist';

import { Tabs, Tab, Box } from '@mui/material';

export default function AuthNav() {
  const [tabValue, settabValue] = useState('login');

  const handleTabChange = (_, newValue) => {
    settabValue(newValue);
  };

  const navigate = useNavigate();

  const handleNavigateRegister = () => {
    navigate('/register');
  };

  const handleNavigateLogin = () => {
    navigate('/login', { replace: true });
  };

  return (
    <>
      <Box sx={{ flexGrow: 0 }}>
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          textColor="inherit"
          indicatorColor="inherit"
          aria-label="Auth tabs"
          sx={{ display: { xs: 'none', md: 'flex' } }}
        >
          <Tab
            value="register"
            label="Sign up"
            onClick={handleNavigateRegister}
            sx={{ my: 2, color: 'white', display: 'block' }}
          />

          <Tab
            value="login"
            label="Log in"
            onClick={handleNavigateLogin}
            sx={{ my: 2, color: 'white', display: 'block' }}
          />
        </Tabs>
      </Box>
    </>
  );
}
