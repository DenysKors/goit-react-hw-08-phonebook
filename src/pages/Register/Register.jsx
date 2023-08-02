import * as React from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from 'redux/authorization/authorizationThunk';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Container } from './Register.styled';

const theme = createTheme();

export default function Register() {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    dispatch(
      registerUser({
        name: data.get('username'),
        email: data.get('email'),
        password: data.get('password'),
      })
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
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
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Register
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
