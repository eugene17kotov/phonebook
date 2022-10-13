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

export const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isError = useSelector(authSelectors.selectError);

  const isLoading = useSelector(authSelectors.selectIsLoading);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = {
      email: form.elements.email.value,
      password: form.elements.password.value,
    };

    if (!formData.email || !formData.password) return;

    dispatch(authOperations.login(formData));

    form.reset();
  };

  const handleNavigateToRegister = () => {
    navigate('/register');
  };

  return (
    <>
      {isError && <Snack type="error" text="Incorrect login or password" />}
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
              Sign in
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              autoComplete="off"
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email address"
                name="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link
                    variant="body2"
                    onClick={handleNavigateToRegister}
                    href="#"
                  >
                    {"Don't have an account? Sign Up"}
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
