import { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { bgcolors as bg, textcolors as tx } from "../../color";
import "./Dialog.css";

export default function Uploadvideo({ handleClose, open, id }) {
  const [video, setVideo] = useState('');
  const [file, setFile] = useState(null)
  const [clips, setClips] = useState([])

  const handleFileChange = (e) => {
    setFile(e.target.files[0])
    const url = URL.createObjectURL(e.target.files[0]);
    console.log(url)
    setVideo(url);
  };

  const generateClips = async () => {
    try {
      const form = new FormData();
      form.append("file", file);
      form.append("filename", file.name);
      form.append("id", "tt0085794");

      const response = await fetch("http://10.10.10.2:5000/stitch", {
        method: "POST",
        body: form,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);

      const data2 = data.video_urls.map((elem) => ({
        ...elem,
        location: elem.location.split("?AWS")[0],
      }));

      setClips((prev) => [...prev, ...data2]);
    } catch (error) {
      console.error("Error: ", error);
    }
  };


  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
      sx={{
        "& .css-1t1j96h-MuiPaper-root-MuiDialog-paper": {
          margin: 0,
          width: "25%",
          overflowY: "unset",
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
          overflowY: "unset",
        }}
      >
        <Typography gutterBottom>Create Clips</Typography>
        {video.length === 0 ? (
          <input type="file" className="file-input" accept="video/*" onChange={(e) => handleFileChange(e)}/>
        ) : (
          <div>
            <video controls muted loop playsInline style={{width: '90%', height: "100px"}}>
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <Button
          variant="contained"
          className="button-contained rounded-3"
          onClick={generateClips}
        >
          Generate Clips
        </Button>
        {clips.length > 0 && (
          <div style={{overflow: "scroll"}}>
            {clips.map((clip) => (
              <video autoPlay muted loop playsInline style={{width: "100px", height: "50px"}}>
              <source src={clip.location} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            ))}
          </div>
        )}
          </div>
        )}
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
  );
}
