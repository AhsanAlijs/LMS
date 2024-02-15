import {
  Box,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { styled } from "@mui/material/styles";
import React, { useState } from "react";
import { DatePicker } from "@mui/x-date-pickers";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const AddmissionForm = () => {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  // const VisuallyHiddenInput = styled("input")({
  //   clip: "rect(0 0 0 0)",
  //   clipPath: "inset(50%)",
  //   height: 1,
  //   overflow: "hidden",
  //   position: "absolute",
  //   bottom: 0,
  //   left: 0,
  //   whiteSpace: "nowrap",
  // //   width: 1,
  // });
  return (
    <>
      <Box
        sx={{
          backgroundImage:
            'url("https://files.123freevectors.com/wp-content/original/108145-light-orange-wave.jpg")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "100vh",
        }}
      >
        <div style={{ textAlign: "center", paddingTop: "40px" }}>
          <Typography variant="h3" component="h3">
            Admission Form Of <span style={{ color: "#251855" }}>(LMS)</span>
          </Typography>
        </div>
        <Box sx={{ marginTop: "50px", display:'flex',justifyContent:'center'  }}>
          <Typography sx={{width: "90%"}}>
            <form>
              <Box className="d-flex justify-content-center align-item-center gap-5 flex-wrap">
                <TextField
                  id="outlined-basic"
                  label="First Name"
                  variant="outlined"
                  type="text"
                  className="input"
                />
                <TextField
                  id="outlined-basic"
                  label="Last Name"
                  variant="outlined"
                  type="text"
                  className="input"
                />
              </Box>
              <Box className="d-flex align-item-center justify-content-center mt-3 ">
                <FormControl className="selectInput">
                  <InputLabel id="demo-simple-select-helper-label">
                    Chos
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Web Development</MenuItem>
                    <MenuItem value={20}>Graphics Designing</MenuItem>
                    <MenuItem value={30}>Ai Chat Boat</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Box className="d-flex flex-wrap justify-content-center align-item-center mt-3">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker className="dateInput" />
                </LocalizationProvider>
              </Box>
              <Box className="d-flex flex-wrap justify-content-center align-item-center mt-2">
                <TextField
                  type="file"
                  placeholder="jhjhjh"
                  className="btn fileInput"
                />
              </Box>
            </form>
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default AddmissionForm;
