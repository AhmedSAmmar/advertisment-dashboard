import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Ads from "./pages/Ads";
import SignIn from "./pages/SignIn";
import PhoneSignIn from "./pages/PhoneSignIn";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import { auth } from "./firebase-config";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const [currentUser, setCurrentUser] = useState("");
  onAuthStateChanged(auth, (user) => {
    setCurrentUser(user);

    console.log(user);
  });
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Routes>
          <Route path="/" element={currentUser ? <Ads /> : <SignIn />} />
          <Route
            path="phonesignin"
            element={<PhoneSignIn user={currentUser} />}
          />
          <Route path="signin" element={<SignIn user={currentUser} />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
