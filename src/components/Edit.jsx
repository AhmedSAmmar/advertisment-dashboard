import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editAd } from "../features/adsSlice";

// Material UI
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material/";
import EditIcon from "@mui/icons-material/Edit";

//

// Create Component
function Edit(props) {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [ad, setAd] = useState({
    image: props.ad.image,
    video: props.ad.video,
    from_time: props.ad.from_time,
    to_time: props.ad.to_time,
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
        variant="outlined"
        onClick={handleClickOpen}
        startIcon={<EditIcon />}
      >
        Edit
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Ad Here</DialogTitle>
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
            color="primary"
            variant="contained"
            onClick={() => {
              dispatch(
                editAd({
                  id: props.id,
                  value: ad,
                })
              );
              handleClose();
            }}
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Edit;
