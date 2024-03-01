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
import { addImageToStorage, getAllData, sendData, signUpUser } from "../../config/firebase/firebasemethods/firebaseMethods";









const AddmissionForm = () => {
  const [age, setAge] = useState("");
  const navigate = useNavigate();
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const [teacher, setTeacher] = useState([])

  useState(() => {
    getAllData('course').then((res) => {
      // console.log(res);
      setTeacher(res)
    }).catch((error) => {
      console.log(error);
    })
  }, [])
  // console.log(teacher);


  // const getDataFromFirestore = () => {

  // }
  // getDataFromFirestore()






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
    // const fileName = `file-${Date.now()}`;
    console.log(files);

    const userEmail = email.current.value;
    const fileName = `file-${Date.now()}`;
    const storageRef = ref(storage, `${fileName}/${userEmail}`);
    try {
      await uploadBytes(storageRef, files);
      const url = await getDownloadURL(storageRef);
      console.log(url);
      signUpUser({
        email: email.current.value,
        password: password.current.value,
        type: "student"
      }).then((res) => {
        console.log(res);
        navigate('/login')
        sendData({
          names: fullName,
          course: selectName.current.value,
          dob: date.current.value,
          email: userEmail,
          uid: res,
          image: url,

        }, "students")

        console.log(res);
      }).catch((error) => {
        console.log(error);

      })
    } catch (error) {
      console.error('Error uploading file:', error);
      // Handle error here
    }
    // try {
    //   const docRef = await addDoc(collection(db, "students"), {
    //     names: fullName,
    //     course: selectName.current.value,
    //     dob: date.current.value,
    //     email: userEmail,
    //     uid: user.uid,
    //     image: url,
    //     type: "students",
    //   });

    //   console.log("Document written with ID: ", docRef.id);
    // } catch (e) {
    //   console.error("Error adding document: ", e);
    // }
  }

  const handleFileChange = () => {
    // console.log(file.current.files[0]);
  };


  const havAcc = () => {
    navigate('/login')
  }



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

                    {teacher.map((item) => (


                      <MenuItem key={item.course} value={item.course}>
                        {item.course}
                      </MenuItem>

                    ))}
                    {/* <MenuItem value={'Web Development'}>Web Development</MenuItem>
  <MenuItem value={'Graphics Designing'}>Graphics Designing</MenuItem>
  <MenuItem value={'Graphics Designing'}>Ai Chat Boat</MenuItem> */}
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
            <Box color={'blue'} textAlign={'center'} marginTop={1} sx={{ cursor: 'pointer' }}   ><p onClick={havAcc}>Already Have Account.</p></Box>
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default AddmissionForm;
