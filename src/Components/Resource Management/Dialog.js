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
import "./Dialog.css";
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function CustomizedDialogs({ handleClose, open}) {
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
          bgcolor: "#000000",
          color: "#FFFFFF",
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
          {[1, 2, 3, 4, 5].map((el, index) => {
            return (
              <Stack direction={"row"} alignItems={"end"} spacing={1}>
                <div className="clip-container rounded-2 rounded-bottom-4">
                  <video autoplay muted loop playsinline>
                    <source
                      src="https://videotruad.s3.ap-south-1.amazonaws.com/popat.mp4"
                      type="video/mp4"
                    />
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
                    sx={{
                      bgcolor: "#2FBDA3",
                      color: "white",
                      textTransform: "none",
                      fontSize: "small",
                      borderRadius: "8px",
                      "&:hover": {
                        bgcolor: "rgb(60, 212, 184)",
                      },
                    }}
                  >
                    Send for AI detection
                  </Button>
                </Box>
              </Stack>
            );
          })}
        </Stack>
      </DialogContent>
      <DialogActions
        sx={{
          justifyContent: "space-between",
          gap: 2,
          borderTopColor: "red",
        }}
      >
        <Button
          variant="outlined"
          onClick={handleClose}
          className="rounded-3"
          sx={{
            textAlign: "center",
            width: "100%",
            borderColor: "#2FBDA3",
            color: "#2FBDA3",
            "&:hover": {
              borderColor: "rgb(60, 212, 184)",
              color: "rgb(60, 212, 184)",
              boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.15)",
            },
          }}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          onClick={handleClose}
          className="rounded-3"
          sx={{
            textAlign: "center",
            width: "100%",
            background: "#2FBDA3",
            color: "white",
            "&:hover": {
              bgcolor: "rgb(60, 212, 184)",
            },
          }}
        >
          Done
        </Button>
      </DialogActions>
    </BootstrapDialog>
  );
}
