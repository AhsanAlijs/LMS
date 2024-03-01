import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import React, { useRef, useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import { sendData } from '../../../config/firebase/firebasemethods/firebaseMethods';


const AddCourse = () => {


  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };


  const teacherName = useRef()
  const days = useRef()
  const courses = useRef()


  const getForm = (e) => {
    e.preventDefault();
    sendData({
      teacher: teacherName.current.value,
      day: days.current.value,
      course: courses.current.value
    }, 'course').then((res) => {
      console.log(res);
      teacherName.current.value = ''
      days.current.value = ''
      courses.current.value = ''
    }).catch((error) => {
      console.log(error);
    })
  }


  return (
    <>
      <Box className='d-flex justify-content-center flex-column gap-5 '>
        <Typography textAlign={'center'} variant='h4'>Add Course (LMS)</Typography>
        <form onSubmit={getForm} className='d-flex justify-content-center gap-3 flex-column'>
          <div className='d-flex justify-content-center gap-5'>
            <TextField
              id="outlined-basic"
              label="Teacher Name"
              variant="outlined"
              type="text"
              className="inputtn"
              inputRef={teacherName}
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
                  inputRef={days}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={'MWF'}>MWF</MenuItem>
                  <MenuItem value={'TTS'}>TTS</MenuItem>
                  <MenuItem value={'Sunday'}>SUNDAY</MenuItem>
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
              inputRef={courses}
            /></Box>

          <Box className='d-flex justify-content-center'>
            {/* <button className='w-75 p-1 border bg-orange'  ></button> */}
            <Button type='submit' sx={{ background: 'darkOrange', ":hover": { background: 'Orange' }, fontSize: '20px' }} className='w-100 p-1 border bg-orange' variant="contained"  >Add Course <AddIcon />  </Button>
          </Box>


        </form>
      </Box>
    </>
  )
}

export default AddCourse