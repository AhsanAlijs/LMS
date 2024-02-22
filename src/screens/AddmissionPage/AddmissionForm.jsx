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
import React, { useRef, useState } from "react";
import { DatePicker } from "@mui/x-date-pickers";
import Button from "@mui/material/Button";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../config/firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../../config/firebase/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

const AddmissionForm = () => {
  const [age, setAge] = useState("");

  const navigate = useNavigate();

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const firstName = useRef();
  const lastName = useRef();
  const selectName = useRef();
  const date = useRef();
  const email = useRef();
  const file = useRef(null);
  const password = useRef();
  const confirmPassword = useRef();


  // file get function 




  const getValueForm = async (event) => {
    event.preventDefault()

    const fullName = `${firstName.current.value} ${lastName.current.value}`

    if (confirmPassword.current.value !== password.current.value) {
      alert('Password are not Same')
      return
    }
    const files = file.current.files[0];
    const userEmail = email.current.value;
    const fileName = `file-${Date.now()}`;
    const storageRef = ref(storage, `${fileName}/${userEmail}`);
    console.log(files);
    try {
      await uploadBytes(storageRef, files);
      const url = await getDownloadURL(storageRef);
      console.log(url);

      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then(async (userCredential) => {
          // Signed up 
          const user = userCredential.user;
          console.log(user);
          navigate('/students')


          try {
            const docRef = await addDoc(collection(db, "students"), {
              names: fullName,
              course: selectName.current.value,
              dob: date.current.value,
              email: userEmail,
              uid: user.uid,
              image: url,
            });

            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);
        });

    } catch (error) {
      console.error('Error uploading file:', error);
      // Handle error here
    }






    // console.log(`First name ${firstName.current.value}`);
    // console.log(`last name ${lastName.current.value}`);
    // console.log(`Chose ${selectName.current.value}`);
    // console.log(`Date ${date.current.value}`);
    // console.log(`Email ${email.current.value}`);
    // console.log(file.current.files[0]);
    // console.log(`password ${password.current.value}`);
    // console.log(`Confirm password  ${confirmPassword.current.value}`);
  }

  const handleFileChange = () => {
    // console.log(file.current.files[0]);
  };

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
        <Box style={{ textAlign: "center", paddingTop: "40px" }}>
          <Typography variant="h3" component="h3">
            Admission Form Of <span style={{ color: "#251855" }}>(LMS)</span>
          </Typography>
        </Box>
        <Box sx={{ marginTop: "70px", display: 'flex', justifyContent: 'center' }}>
          <Typography sx={{ width: "70%", background: 'white', borderRadius: '50px', padding: '20px', borderRight: '6px solid orange', borderTop: '3px solid orange', borderBottom: '3px solid orange', borderLeft: '6px solid orange' }}>
            <form onSubmit={getValueForm}>

              {/* Names Input Start */}
              <Box className="d-flex justify-content-center align-item-center gap-5 flex-wrap">
                <TextField
                  id="outlined-basic"
                  label="First Name"
                  variant="outlined"
                  type="text"
                  className="input"
                  inputRef={firstName}
                />
                <TextField
                  id="outlined-basic"
                  label="Last Name"
                  variant="outlined"
                  type="text"
                  className="input"
                  inputRef={lastName}
                />
              </Box>
              {/* Names Input End */}



              {/* Coures Select Input Start */}

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
                    inputRef={selectName}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={'Web Development'}>Web Development</MenuItem>
                    <MenuItem value={'Graphics Designing'}>Graphics Designing</MenuItem>
                    <MenuItem value={'Graphics Designing'}>Ai Chat Boat</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              {/* Coures Select Input End */}



              {/* Date Input Start */}
              <Box className="d-flex flex-wrap justify-content-center align-item-center mt-3">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker className="dateInput" inputRef={date} />
                </LocalizationProvider>
              </Box>
              {/* Date Input End */}



              {/* Email Input Start */}
              <Box className='mt-3 d-flex justify-content-center'>
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  type="email"
                  className="selectInput"
                  inputRef={email}
                />
              </Box>
              {/* Email Input End */}


              {/* File Input Start */}
              <Box className="d-flex flex-wrap justify-content-center align-item-center mt-2">
                <TextField
                  type="file"
                  className="btn fileInput"
                  inputRef={file}
                  onChange={handleFileChange}
                />
              </Box>
              {/* File Input End */}




              {/* Password Input Start */}
              <Box className='mt-3 d-flex justify-content-center'>
                <TextField
                  id="outlined-basic"
                  label="Password"
                  variant="outlined"
                  type="password"
                  className="selectInput"
                  inputRef={password}
                />
              </Box>
              {/* Password Input End */}


              {/* Confirm Password Input Start */}
              <Box className='mt-3 d-flex justify-content-center'>
                <TextField
                  id="outlined-basic"
                  label="Confirm Password"
                  variant="outlined"
                  type="password"
                  className="selectInput"
                  inputRef={confirmPassword}
                />
              </Box>
              {/* Confirm Password Input End */}



              {/* Register Button Start  */}
              <Box className='mt-3 d-flex justify-content-center' >
                <Button type="submit" sx={{ background: '#fc3d09', ":hover": { background: '#fc3d09' } }} variant="contained" className="selectInput">Register Student</Button>
              </Box>
              {/* Register Button End  */}

            </form>
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default AddmissionForm;
