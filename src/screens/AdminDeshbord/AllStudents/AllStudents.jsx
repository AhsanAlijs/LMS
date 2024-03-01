import { Box, Button, Card, CardMedia, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import { deleteDocument, getAllData } from '../../../config/firebase/firebasemethods/firebaseMethods';


const AllStudents = () => {
    const [allStudent, setAllStudens] = useState([]);

    useEffect(() => {
        getdata()
    }, [])

    const getdata = () => {
        getAllData('students').then((res) => {
            // console.log(res);
            setAllStudens(res)
        }).catch((error) => {
            console.log(error);
        })
    }







    const del = async (uid) => {
        try {
            console.log('Hello World', uid);
            const res = await deleteDocument('students', uid);
            console.log(res);
        } catch (error) {
            console.error(error);
        }
    };
    








    return (
        <>
            <Typography bgcolor={'#d3d3d333'} padding={2} borderRadius={2} marginTop={0} fontWeight={700} variant='h3'>
                All Students
            </Typography>
            {allStudent.map((item) => (
                <Box key={item.uid} >
                    <Card key={item.id} className='mt-3' sx={{ border: '1px solid Orange', borderRadius: '20px' }} >
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 'px', marginTop: '6px', paddingLeft: '10px', paddingRight: '10px', cursor: 'pointer' }}>
                            <CardMedia
                                sx={{ width: '80px', border: '3px solid orange', borderRadius: '50px', marginBottom: '6px' }}
                                height='80'
                                component="img"
                                image={item.image}
                            />
                            <Box>
                                <Typography fontSize={20} fontWeight={700}>
                                    {item.names}
                                </Typography>
                            </Box>
                            <Box>
                                <Button onClick={() => del(item.uid)} sx={{ background: 'orange', color: 'black', ":hover": { background: 'darkOrange', color: 'White' } }} variant='contained'   ><DeleteRoundedIcon /></Button>
                            </Box>
                        </Box>
                    </Card>











                </Box >
            ))}

        </>
    )
}

export default AllStudents