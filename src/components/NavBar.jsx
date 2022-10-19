import * as React from "react";

// Material UI
import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material/";

// Firebase
import { signOut } from "firebase/auth";
import { auth } from "../firebase-config";
//

// Create Component
function NavBar() {
  const logout = async () => {
    await signOut(auth);
  };
  // JSX
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, mx: "10px" }}
          >
            Adverts Dashboard
          </Typography>
          <Typography sx={{ mr: "20px" }}>Admin</Typography>
          <Button color="inherit" onClick={logout}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;
