import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createAd } from "../features/adsSlice";

// Material UI
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material/";
import AddIcon from "@mui/icons-material/Add";
//

// Create Component
function CreateAd() {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [ad, setAd] = useState({
    image: "",
    video: "",
    from_time: "",
    to_time: "",
  });

  // Events
  function handleChange(evt) {
    const value = evt.target.value;
    setAd({
      ...ad,
      [evt.target.name]: value,
    });
  }
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  // JSX
  return (
    <div>
      <Button
        size="large"
        variant="contained"
        color="primary"
        onClick={handleClickOpen}
      >
        Create New Ad <AddIcon />
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Create New Ad </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Image"
            name="image"
            fullWidth
            variant="outlined"
            value={ad.image}
            onChange={handleChange}
          />
          <TextField
            autoFocus
            margin="dense"
            label="Video"
            name="video"
            fullWidth
            variant="outlined"
            value={ad.video}
            onChange={handleChange}
          />

          <TextField
            autoFocus
            margin="dense"
            label="Start Time"
            name="from_time"
            fullWidth
            variant="outlined"
            value={ad.from_time}
            onChange={handleChange}
          />
          <TextField
            autoFocus
            margin="dense"
            label="End Time"
            name="to_time"
            fullWidth
            variant="outlined"
            value={ad.to_time}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            color="primary"
            sx={{ ml: "10px" }}
            onClick={() => {
              dispatch(createAd(ad));

              setAd({
                image: "",
                video: "",
                from_time: "",
                to_time: "",
              });
              handleClose();
            }}
          >
            <AddIcon />
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default CreateAd;
