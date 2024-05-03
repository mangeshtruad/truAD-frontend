import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { bgcolors as bg, textcolors as tx } from "../../color";
import "./Dialog.css"

export default function Uploadvideo({ handleClose, open}) {
  return (
    <Dialog
    onClose={handleClose}
    aria-labelledby="customized-dialog-title"
    open={open}

    sx={{
      "& .css-1t1j96h-MuiPaper-root-MuiDialog-paper": {
        margin: 0,
        width: "25%",
        overflowY:"unset",
        bgcolor: bg.bgDialog,
        color: tx.textDialog,
      },
    }}
  >
    <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
      Video Upload
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
        overflowY:"unset"
      }}
    >
      <Typography gutterBottom>Create Clips</Typography>
      <input type='file' className="file-input"/>
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
  </Dialog>
  )
}
