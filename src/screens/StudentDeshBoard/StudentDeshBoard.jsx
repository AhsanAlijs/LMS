import React, { useEffect, useState } from 'react'
import StudentsCard from '../../components/StudentCard/StudentsCard'
import ResponsiveAppBar from '../../components/studentNavbar/StudentsNabar'
import { collection, getDocs, query, where } from "firebase/firestore";
import { auth, db } from '../../config/firebase/firebaseConfig';
import { Box } from '@mui/material';
import Loader from '../../components/loader/Loader';
import { onAuthStateChanged } from "firebase/auth";






const StudentDeshBoard = () => {
    const [students, setStudents] = useState([]);
    useEffect(() => {
        const getData = async () => {
            onAuthStateChanged(auth, async (user) => {
                if (!user) {
                    return
                }
                try {
                    const q = query(collection(db, "students"), where("uid", "==", user.uid));
                    const querySnapshot = await getDocs(q);
                    const updatedStudents = [];
                    querySnapshot.forEach((doc) => {
                        updatedStudents.push(doc.data());
                    });
                    setStudents(updatedStudents);
                } catch (error) {
                    console.error('Error fetching data:', error);
                    // Handle error here
                }

            });









        };
        getData();
    }, []);

    return (
        <>

            {students.length > 0 ? students.map((item, index) => (

                < div key={index} className='' >
                    <ResponsiveAppBar image={item.image} />
                    <StudentsCard course={item.course} names={item.names} image={item.image} email={item.email} dob={item.dob} />
                </div >
            )) : <Box>
                <Loader />
            </Box>}
        </>
    )
}

export default StudentDeshBoard;