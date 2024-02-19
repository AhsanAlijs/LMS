import { Box, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'


const AddCourse = () => {


  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };


  return (
    <>
      <Box className='d-flex justify-content-center flex-column gap-5 '>
        <Typography textAlign={'center'} variant='h4'>Add Course (LMS)</Typography>
        <form className='d-flex justify-content-center gap-3 flex-column'>
          <div className='d-flex justify-content-center gap-5'>
            <TextField
              id="outlined-basic"
              label="Teacher Name"
              variant="outlined"
              type="text"
              className="inputtn"

            />
            {/* Coures Select Input Start */}

            <Box className="">
              <FormControl className="dateselectInput">
                <InputLabel id="demo-simple-select-helper-label">
                 Day
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
                  <MenuItem value={'Web Development'}>MWF</MenuItem>
                  <MenuItem value={'Graphics Designing'}>TTS</MenuItem>
                  <MenuItem value={'Graphics Designing'}>SUNDAY</MenuItem>
                </Select>
              </FormControl>
            </Box>
            {/* Coures Select Input End */}
          </div>

          <Box className='d-flex justify-content-center '>
            <TextField
              id="outlined-basic"
              label="Course Name"
              variant="outlined"
              type="text"
              className="selectInput"
            /></Box>

            <Box className='d-flex justify-content-center'>
              <button className='w-75 p-1 border bg-orange'>Add Course</button>
            </Box>


        </form>
      </Box>
    </>
  )
}

export default AddCourse