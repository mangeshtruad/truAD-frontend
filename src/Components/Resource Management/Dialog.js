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
import { Box } from "@mui/material";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open dialog
      </Button>
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
            width:"35%"
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
        <DialogContent dividers>
          <Typography gutterBottom>
            Available Clips
          </Typography>
         <Box>
            {
                [1,2,3,4,5].map((el, index)=>{
                    return(<>
                        <div>
                            
                        </div>
                    </>)
                })
            }
         </Box>
        </DialogContent>
        <DialogActions
          sx={{
            justifyContent: "space-between",
            gap: 2,
          }}
        >
          <Button
            onClick={handleClose}
            sx={{ textAlign: "center", width: "100%" }}
          >
            Cancel
          </Button>
          <Button
            autoFocus
            onClick={handleClose}
            sx={{ textAlign: "center", width: "100%" }}
          >
            Done
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
}
