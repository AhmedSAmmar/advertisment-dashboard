import React, { useState } from "react";
import { Navigate } from "react-router-dom";

// Firebase
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";

// Material UI
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Box,
  Typography,
  Container,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
//

// Create Component
function SignIn({ user }) {
  // const [user, setUser] = useState("");
  const [error, setError] = useState(false);
  const [phoneSignIn, setPhoneSignIn] = useState(false);

  // useEffect(() => {
  //   return () => {
  //     setUser("");
  //   };
  // }, []);

  // Firebase Email/Password Authentication

  // onAuthStateChanged(auth, (user) => {
  //   setUser(user);
  // });

  const login = async (loginEmail, loginPassword) => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
    } catch (error) {
      console.log(error.message);
      setError(true);
    }
  };
  // Event
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const loginEmail = data.get("email");
    const loginPassword = data.get("password");

    login(loginEmail, loginPassword);
  };

  // JSX
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        {error && (
          <Typography color="red">
            Invalid Username or Password. Try Again!
          </Typography>
        )}
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            color="primary"
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
            color="primary"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
            onClick={() => {
              setPhoneSignIn(true);
            }}
          >
            Sign In using Mobile Number
          </Button>
        </Box>
      </Box>
      {user && <Navigate to="/" />}
      {phoneSignIn && <Navigate to="/phonesignin" />}
    </Container>
  );
}

export default SignIn;
