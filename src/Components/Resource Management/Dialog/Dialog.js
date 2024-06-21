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
import { Stack } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { bgcolors as bg, textcolors as tx } from "../../color";
import { responsive, Carousel } from "../../videosider";

import "./Dialog.css";
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function CustomizedDialogs({ handleClose, open, clips, name }) {
  const aiDetection = async (id) => {
    try {
      const response = await fetch(
        "https://truad-backend.onrender.com//blend-clip",
        {
          method: "POST",
          body: JSON.stringify({
            id,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 500) {
        console.log("Internal Server Error");
        handleClose();
        return;
      }

      if (response.status === 200) {
        console.log("Success");
        handleClose();
        return;
      }
      handleClose();
    } catch (error) {
      handleClose();
      console.log(error);
    }
  };

  return (
    <BootstrapDialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
      sx={{
        // "& .MuiDialog-container": {
        //   justifyContent: "flex-end", // Flex end aligns the dialog content to the end of the flex container
        // },
        "& .css-1t1j96h-MuiPaper-root-MuiDialog-paper": {
          margin: 0,
          // height: "100%",
          maxHeight: "calc(100% - 40px)",
          width: "35%",
          bgcolor: bg.bgDialog,
          color: tx.textDialog,
        },
      }}
    >
      <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
        {name}
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
        {/* <div>
          <ul style={{
            display:"flex",
            listStyle:"none",
            alignItems:"end",
            padding:"0",
            width:"100%",
            textAlign:"center"
          }}>
            <li style={{borderBottom:"1px solid #B8BABC", width:"100%"}}>AI Detection</li>
            <li style={{borderBottom:"1px solid #B8BABC", width:"100%"}}>Track Video</li>
            <li style={{borderBottom:"1px solid #B8BABC", width:"100%"}}></li>
            <li style={{borderBottom:"1px solid #B8BABC", width:"100%"}}></li>
          </ul>
        </div>
        <Stack direction={"column"} spacing={2} pt={3}>
          {clips.map((clip, index) => {
            return (
              <Stack
                key={index}
                direction={"row"}
                alignItems={"end"}
                spacing={1}
              >
                <div className="clip-container rounded-2 rounded-bottom-4">z
                  <video autoplay muted loop playsinline>
                    <source src={clip.location} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div class="content">
                    <p>{clip.name}</p>
                  </div>
                </div>
                <div>
                  <Button
                    endIcon={<KeyboardArrowRightIcon />}
                    variant="contained"
                    className="ai-detection-btn"
                    onClick={(e) => aiDetection(clip._id)}
                   
                  >
                   Send for AI detection
                  </Button>
                </div>
              </Stack>
            );
          })}
        </Stack> */}
        {/* <Stack direction={"row"} spacing={2}> */}
        <Carousel showDots={false} responsive={responsive}>
          {clips.map((clip, index) => {
            return (
              <Stack
                key={index}
                spacing={1}
                sx={{
                  marginBottom: 3,
                }}
              >
                <div
                  className="clip-container rounded-2"
                  style={{ width: "100%" }}
                >
                  <video autoplay muted loop playsinline>
                    <source src={clip.location} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="content p-2">
                    <p>{clip.name}</p>
                  </div>
                </div>
                <div style={{ textAlign: "center" }}>
                  <Button
                    endIcon={<KeyboardArrowRightIcon />}
                    variant="contained"
                    className="ai-detection-btn"
                    onClick={(e) => aiDetection(clip._id)}
                    sx={{
                      fontSize: "small",
                    }}
                  >
                    Send for AI detection
                  </Button>
                </div>
              </Stack>
            );
          })}
        </Carousel>
        <div className="p-2" />
        <Typography gutterBottom>Process Clips</Typography>
        <Carousel showDots={false} responsive={responsive}>
          {clips
            .filter((elem) => elem.blendFile)
            .map((clip, index) => {
              return (
                <Stack
                  key={index}
                  spacing={1}
                  sx={{
                    marginBottom: 3,
                  }}
                >
                  <div
                    className="clip-container rounded-2"
                    style={{ width: "100%" }}
                  >
                    <video autoplay muted loop playsinline>
                      <source src={clip.location} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    <div className="content p-2">
                      <p>{clip.name}</p>
                    </div>
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <Button
                      endIcon={<KeyboardArrowRightIcon />}
                      variant="contained"
                      className="ai-detection-btn"
                      onClick={(e) => aiDetection(clip._id)}
                      sx={{
                        paddingInline: "2rem",
                        fontSize: "small",
                      }}
                    >
                      Track VideoClip
                    </Button>
                  </div>
                </Stack>
              );
            })}
        </Carousel>
        {/* </Stack> */}
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
