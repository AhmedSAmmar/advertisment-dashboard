import React, { useEffect, useState } from "react";
// FireBase
import { auth } from "../firebase-config";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { Navigate } from "react-router-dom";

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
import PhonelinkLockOutlinedIcon from "@mui/icons-material/PhonelinkLockOutlined";
import MuiPhoneNumber from "material-ui-phone-number";
//

// Create Component
function PhoneSignin({ user }) {
  // const [currentUser, setCurrentUser] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showOTP, setShowOTP] = useState(false);
  const [OTP, setOTP] = useState("");
  const [error, setError] = useState("");
  const [errorOTP, setErrorOTP] = useState(false);

  // Create Captcha
  const generateRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "sign-in-button",
      {
        size: "invisible",
        callback: (response) => {},
      },
      auth
    );
  };

  useEffect(() => {
    generateRecaptcha();
  }, []);

  // Firebase OTP Authentication
  const sendOTP = () => {
    const appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        console.log(confirmationResult);
        setShowOTP(true);
      })
      .catch((error) => {
        console.log(error.message);
        const newError = error.message.replace("Firebase: ", "");
        setError(newError);
      });
  };

  // JSX
  return (
    <Container component="main" maxWidth="xs">
      {user && <Navigate to="/" />}
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
          <PhonelinkLockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Enter Mobile Number
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <MuiPhoneNumber
            defaultCountry={"eg"}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Phone Number"
            autoFocus
            color="primary"
            type="tel"
            name=""
            id=""
            value={phoneNumber}
            onChange={(event) => {
              setPhoneNumber(event);
            }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            id="sign-in-button"
            sx={{ mt: 3, mb: 2 }}
            onClick={(event) => {
              event.preventDefault();
              sendOTP();
            }}
          >
            Get OTP
          </Button>
          {error && <Typography color="red">{error}</Typography>}
        </Box>
      </Box>
      {showOTP && (
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
            <Typography component="h1" variant="h5">
              Enter OTP
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                label="OTP"
                autoFocus
                color="primary"
                type="tel"
                name=""
                id=""
                value={OTP}
                onChange={(event) => {
                  setOTP(event.target.value);
                }}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                sx={{ mt: 3, mb: 2 }}
                onClick={(event) => {
                  event.preventDefault();
                  const code = OTP;
                  const confirmationResult = window.confirmationResult;
                  confirmationResult
                    .confirm(code)
                    .then((result) => {
                      // User signed in successfully.
                      const user = result.user;
                    })
                    .catch((error) => {
                      console.log(error.message);
                      const newError = error.message.replace("Firebase: ", "");
                      setErrorOTP(newError);
                    });
                }}
              >
                Submit
              </Button>
            </Box>
            {errorOTP && <Typography color="red">{errorOTP}</Typography>}
            {user && <Navigate to="/" />}
          </Box>
        </Container>
      )}
    </Container>
  );
}

export default PhoneSignin;
