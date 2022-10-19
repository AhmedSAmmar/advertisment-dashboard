import React, { useEffect } from "react";
import axios from "axios";
import AdItem from "../components/AdItem";
import CreateAd from "../components/CreateAd";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { newAds } from "../features/adsSlice";

// Material UI
import { Grid, Stack, Container, Box, LinearProgress } from "@mui/material";

// Create Component
function Ads() {
  // Redux
  const ads = useSelector((state) => state.ads.value);
  const dispatch = useDispatch();

  // API
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://still-sea-20840.herokuapp.com/https://signal.creatbots.com/"
      );
      dispatch(newAds(response.data));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (ads) {
    // JSX
    return (
      <div>
        <NavBar />
        <Box sx={{ width: "100%", bgcolor: "secondary.light" }}>
          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
            <CreateAd />
          </Stack>
          <Container sx={{ py: 8 }} maxWidth="lg">
            <Grid container spacing={4}>
              {ads.map((ad, index) => (
                <Grid item key={index} xs={12} sm={6} md={4}>
                  <AdItem ad={ad} key={index} id={index} />
                </Grid>
              ))}
            </Grid>

            <Footer sx={{ mt: 8, mb: 4 }} />
          </Container>
        </Box>
      </div>
    );
  }
  return (
    <Box sx={{ width: "100%" }}>
      <LinearProgress />
    </Box>
  );
}

export default Ads;
