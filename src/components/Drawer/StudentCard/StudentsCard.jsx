import { Box, Card, CardMedia, Typography } from '@mui/material'
import React from 'react'
import ModeIcon from '@mui/icons-material/Mode';

const StudentsCard = () => {
    return (
        <>

            <div className='p-5'>
                <div className='d-flex justify-content-center'>
                    <Box sx={{ border: '2px solid orange', padding: '10px', marginTop: '50px', borderRadius: '10px', paddingBottom: '20px' }}>
                        <div className='d-flex align-items-center justify-content-center flex-column'>
                            <Box>
                                <Typography className='' variant='h5'>Proile Info</Typography>
                            </Box>
                            <Box className="mt-3">
                                <CardMedia
                                    sx={{ width: '110px', border: '3px solid orange', borderRadius: '8px' }}
                                    height='110'
                                    component="img"
                                    image="https://img.freepik.com/free-photo/majestic-mountain-peak-tranquil-winter-landscape-generated-by-ai_188544-15662.jpg"
                                />
                            </Box>
                        </div>

                        <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', marginTop: '10px', borderLeft: '4px solid orange', paddingLeft: '5px', borderRadius: '10px',borderTop:'1px solid orange',borderRight:'1px solid orange',borderBottom:'1px solid orange' }}>
                            <Typography variant='p'>Name : Ahsan Ali <ModeIcon sx={{ color: 'orange', padding: '2px', ":hover": { background: 'orange', borderRadius: '20px', color: 'white', cursor: 'pointer' } }} /> </Typography>
                            <Typography variant='p'>Dob : 01-10-2003 <ModeIcon sx={{ color: 'orange', padding: '2px', ":hover": { background: 'orange', borderRadius: '20px', color: 'white', cursor: 'pointer' } }} /> </Typography>
                            <Typography variant='p'>Email:ahsanali45444@gmail.com <ModeIcon sx={{ color: 'orange', padding: '2px', ":hover": { background: 'orange', borderRadius: '20px', color: 'white', cursor: 'pointer' } }} /></Typography>
                            <Typography variant='p'>Course : Web and Mobile...<ModeIcon sx={{ color: 'orange', padding: '2px', ":hover": { background: 'orange', borderRadius: '20px', color: 'white', cursor: 'pointer' } }} /></Typography>

                        </Box>





                    </Box>
                </div>
            </div>

        </>
    )
}

export default StudentsCard