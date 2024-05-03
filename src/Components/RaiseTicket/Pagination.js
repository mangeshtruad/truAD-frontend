// PaginationComponent.jsx
import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import "./Pagination.css";

function PaginationComponent() {
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const totalCount = 100; // Assuming there are 100 items total

  const handleNextPage = () => {
    setPage((prevPage) =>
      Math.min(prevPage + 1, Math.ceil(totalCount / rowsPerPage))
    );
  };

  const handlePreviousPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value);
    setPage(1); // Reset to first page with new rows per page
  };

  return (
    <div className="pagination-container">
      <IconButton
        color="inherit"
        aria-label="Go to previous page"
        title="Go to previous page"
        onClick={handlePreviousPage}
      >
        <KeyboardArrowLeftIcon />
      </IconButton>
      <p className="zero-margin">{page}</p>
      <IconButton
        color="inherit"
        aria-label="Go to next page"
        title="Go to next page"
        onClick={handleNextPage}
      >
        <KeyboardArrowRightIcon />
      </IconButton>
      <div className="row">
        <div className="col">
          <p className="zero-margin">Per Page</p>
        </div>
        <div className="col">
        <FormControl className="formControl"
        >
            <Select
              value={rowsPerPage}
              onChange={handleChangeRowsPerPage}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              className="selectInput"
            >
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={20}>20</MenuItem>
                <MenuItem value={30}>30</MenuItem>
            </Select>
        </FormControl>
        </div>
        <div className="col">
          <p className="zero-margin">
            {(page - 1) * rowsPerPage + 1}-
            {Math.min(page * rowsPerPage, totalCount)} of {totalCount}
          </p>
        </div>
      </div>
    </div>
  );
}

export default PaginationComponent;
