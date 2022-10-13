import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom/dist';
import authOperations from 'redux/auth/authOperations';
import authSelectors from 'redux/auth/authSelectors';

import { Snack } from 'components/Snack/Snack';

import {
  Container,
  Typography,
  Box,
  Grid,
  Link,
  Checkbox,
  FormControlLabel,
  CssBaseline,
  TextField,
  Button,
  Avatar,
  CircularProgress,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useState } from 'react';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [brokenTextField, setBrokenTextField] = useState(false);

  const isError = useSelector(authSelectors.selectError);

  const isLoading = useSelector(authSelectors.selectIsLoading);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = {
      name: form.elements.name.value,
      email: form.elements.email.value,
      password: form.elements.password.value,
    };

    if (!formData.name || !formData.email || !formData.password) {
      setBrokenTextField(true);
      return;
    }

    dispatch(authOperations.register(formData));

    form.reset();
  };

  const handleNavigateToLogin = () => {
    navigate('/login');
  };

  return (
    <>
      {brokenTextField && (
        <Snack type="error" text="Fill in all fields, please" />
      )}

      {isError && <Snack type="error" text="Something went wrong :(" />}

      {isLoading ? (
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
      ) : (
        <Container component="main" maxWidth="xs" sx={{ pb: 4 }}>
          <CssBaseline />
          <Box
            sx={{
              marginTop: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="name"
                    label="User name"
                    name="name"
                    autoFocus
                    autoComplete="off"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email address"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox value="allowExtraEmails" color="primary" />
                    }
                    label="I want to receive inspiration, marketing promotions and updates via email."
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link
                    variant="body2"
                    onClick={handleNavigateToLogin}
                    href="#"
                  >
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      )}
    </>
  );
};
