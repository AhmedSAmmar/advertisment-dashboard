import React from "react";
import { useDispatch } from "react-redux";
import { removeAd } from "../features/adsSlice";
import Edit from "./Edit";

// Material UI

import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Box,
  Typography,
} from "@mui/material/";
import DeleteIcon from "@mui/icons-material/Delete";

//

// Create Component
function AdItem(props) {
  const dispatch = useDispatch();

  // JSX
  return (
    <Card
      variant="outlined"
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {props.ad.image && (
        <CardMedia
          component="img"
          sx={{
            width: "90%",
            pt: "20px",
            mx: "auto",
            my: "auto",
          }}
          image={props.ad.image}
          alt="ad-image"
        />
      )}
      {props.ad.video && (
        <CardMedia
          component="video"
          sx={{
            width: "90%",
            pt: "20px",
            mx: "auto",
            my: "auto",
          }}
          image={props.ad.video}
          alt="ad-video"
          controls
        />
      )}
      <CardContent sx={{ justifyContent: "center", alignContent: "flex-end" }}>
        <Box
          sx={{
            display: "inline-flex",
          }}
        >
          <Typography color="#533E85" fontSize="1rem" align="center">
            Start Time
          </Typography>
          <Typography
            color="#533E85"
            fontSize="1rem"
            align="center"
            sx={{ ml: "20px" }}
          >
            {props.ad.from_time}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "inline-flex",
            justifyContent: "center",
          }}
        >
          <Typography color="#533E85" fontSize="1rem" align="center">
            End Time
          </Typography>
          <Typography
            color="#533E85"
            fontSize="1rem"
            align="center"
            sx={{ ml: "26px" }}
          >
            {props.ad.to_time}
          </Typography>
        </Box>
      </CardContent>

      <Stack
        sx={{ mb: "10px" }}
        direction="row"
        spacing={2}
        justifyContent="center"
      >
        <Edit ad={props.ad} id={props.id} />
        <Button
          color="primary"
          variant="outlined"
          size="small"
          onClick={() => {
            dispatch(removeAd(props.id));
          }}
          startIcon={<DeleteIcon />}
        >
          Delete
        </Button>
      </Stack>
    </Card>
  );
}

export default AdItem;
