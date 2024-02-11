import { Box, TextField, Typography } from "@mui/material";
import React from "react";

const AddmissionForm = () => {
  return (
    <>
      <Box
        sx={{
          backgroundImage:
            'url("https://as2.ftcdn.net/v2/jpg/01/90/51/59/1000_F_190515991_puEUJm1SbgEmarc5nciJV48s20Yx3dxj.jpg")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "100vmin",
        }}
      >
        <div style={{ textAlign: "center", paddingTop: "40px" }}>
          <Typography variant="h3" component="h3">
            Admission Form Of <span style={{ color: "#251855" }}>(LMS)</span>
          </Typography>
        </div>
        <Box sx={{ marginTop: "50px" }}>
          <Typography>
            <form>
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
                type="text"
              />
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
                type="text"
              />
              <select>
                <option value="//////">---------</option>
              </select>
            </form>
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default AddmissionForm;
