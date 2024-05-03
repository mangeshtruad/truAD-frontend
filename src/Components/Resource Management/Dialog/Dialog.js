import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { Stack, Box } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { bgcolors as bg, textcolors as tx } from "../../color";

import "./Dialog.css";
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function CustomizedDialogs({ handleClose, open, clips }) {
  return (
    <BootstrapDialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
      sx={{
        "& .MuiDialog-container": {
          justifyContent: "flex-end", // Flex end aligns the dialog content to the end of the flex container
        },
        "& .css-1t1j96h-MuiPaper-root-MuiDialog-paper": {
          margin: 0,
          height: "100%",
          maxHeight: "calc(100% - 40px)",
          width: "35%",
          bgcolor: bg.bgDialog,
          color: tx.textDialog,
        },
      }}
    >
      <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
        The King of Comedy
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent
        dividers
        sx={{
          borderColor: "#B8BABC",
        }}
      >
        <Typography gutterBottom>Available Clips</Typography>
        <Stack direction={"column"} spacing={2} pt={3}>
          {clips.map((clip, index) => {
            return (
              <Stack direction={"row"} alignItems={"end"} spacing={1}>
                <div className="clip-container rounded-2 rounded-bottom-4">
                  <video autoplay muted loop playsinline>
                    <source src={clip.location} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div class="content">
                    <p>Colorful Heaven</p>
                  </div>
                </div>
                <Box sx={{ width: "50%" }}>
                  <Button
                    endIcon={<KeyboardArrowRightIcon />}
                    variant="contained"
                    className="ai-detection-btn"
                  >
                    Send for AI detection
                  </Button>
                </Box>
              </Stack>
            );
          })}
        </Stack>
      </DialogContent>

      <DialogActions className="dialog-actions">
        <Button
          variant="outlined"
          onClick={handleClose}
          className="button-outlined rounded-3"
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          onClick={handleClose}
          className="button-contained rounded-3"
        >
          Done
        </Button>
      </DialogActions>
    </BootstrapDialog>
  );
}
