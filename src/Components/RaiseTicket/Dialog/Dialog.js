import React, { useState } from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
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
const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export default function CustomizedDialogs({ handleClose, open, user_email }) {
  const [image, setimage] = React.useState("");
  const [text, setText] = useState("");
  const [selectedOption, setSelectOption] = useState("option");
  const [file, setFile] = React.useState("");
  const handleFile = (event) => {
    const file = event.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setimage(url);
      setFile(file)
    }
  };
  const handleText = (e) => {
    setText(e.target.value);
  };
  const handleSelectChange = (e) => {
    setSelectOption(e.target.value);
  };
  const addTicke = async () => {
    try {
      const formData = new FormData();
      formData.append("subject", text); // Assuming 'text' is defined elsewhere in your code
      formData.append("supportTeam", selectedOption); // Assuming 'selectedOption' is defined elsewhere in your code
      formData.append("viewImage", file); // Assuming 'file' is defined elsewhere in your code
      console.log(formData);
      const response = await fetch(
        `https://truad-dashboard-backend.onrender.com/api/user/${user_email}`,
        {
          method: "POST", // It's good practice to use uppercase HTTP methods
          // headers: {
          //   "Content-Type": "multipart/form-data"
          // },
          body: formData,
          // Don't set Content-Type for FormData; the browser will handle it
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Ticket Created Successfully:", data);
    } catch (error) {
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
          height: "100%",
          maxHeight: "calc(100% - 40px)",
          width: "35%",
          bgcolor: bg.bgDialog,
          color: tx.textDialog,
        },
      }}
    >
      <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
        Raise a new Ticket
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
        <textarea
          className="rounded textarea-feedback"
          placeholder="Enter Your Feedback here..."
          rows="4"
          onChange={handleText}
        ></textarea>
        <FormControl sx={{ width: "90%" }}>
          <InputLabel
            id="demo-simple-select-label"
            sx={{
              color: "white", // Ensures the label is visible against a dark background
              "&.Mui-focused": {
                color: "#0779ff",
              },
            }}
          >
            Select Support Team
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selectedOption}
            onChange={handleSelectChange}
            label="Select Support Team"
            sx={{
              width: "100%", // Make the select width consistent with FormControl
              color: "white", // Text color for the items
              ".MuiOutlinedInput-notchedOutline": {
                borderColor: "#B8BABC", // Ensures the border is visible
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "white", // Border color on hover
              },
              "& .MuiSvgIcon-root": {
                // This targets the dropdown icon specifically
                color: "white", // Ensures the dropdown arrow icon is white
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "#0779ff", // Border color on focus
              },
            }}
          >
            <MenuItem value={"IT Department"}>IT Department</MenuItem>
            <MenuItem value={"Sales And Marketing Department"}>
              Sales And Marketing Department
            </MenuItem>
            <MenuItem value={"Account Department"}>Account Department</MenuItem>
            <MenuItem value={"HR Department"}>HR Department</MenuItem>
          </Select>
        </FormControl>
        <div className="upload-section">
          <p>Upload Screenshot if issue</p>

          <label className="upload-label">Select or Drop a file here</label>
          <div style={{ textAlign: "center" }}>
            <Button
              component="label"
              role={undefined}
              variant="outlined"
              tabIndex={-1}
              className="upload-button"
            >
              Upload file
              <VisuallyHiddenInput
                type="file"
                onChange={handleFile}
                fullwidth
              />
            </Button>
          </div>
        </div>
        {image && (
          <div className="image-preview">
            <img src={image} alt="" />
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
          onClick={() => {
            addTicke();
            handleClose();
          }}
          className="button-contained rounded-3"
        >
          Done
        </Button>
      </DialogActions>
    </BootstrapDialog>
  );
}
