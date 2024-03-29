import { Box, Card, CardMedia, Typography } from '@mui/material'
import React from 'react'
import ModeIcon from '@mui/icons-material/Mode';
import Logo from '../../forWeb/front.png'
import Logos from '../../forWeb/card.png'

const StudentsCard = ({ course, dob, email, image, names }) => {
    return (
        <>

            <Box className='d-flex justify-content-center p-2 gap-1'>
                <Box className='d-flex justify-content-center flex-column'>
                    <Box sx={{
                        border: '2px solid orange',
                        width: '300px',
                        height: '383px',
                        padding: '10px',
                        marginTop: '50px',
                        borderRadius: '10px',
                        paddingBottom: '20px',
                        backgroundImage: `url(${Logo})`,
                        background: 'cover',
                        objectFit: 'contain'
                    }}
                    >
                        <Box className='d-flex align-items-center justify-content-center flex-column'>
                            <Box className='mt-3 color-white'>
                                <Typography className='' variant='h5'>Proile Info</Typography>
                            </Box>
                            <Box className="mt-5">
                                <CardMedia
                                    sx={{ width: '110px', border: '3px solid orange', borderRadius: '8px' }}
                                    height='110'
                                    component="img"
                                    image={image}
                                />
                            </Box>
                        </Box>

                        <Box className='mt-5' sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', marginTop: '10px', borderLeft: '4px solid orange', paddingLeft: '5px', borderRadius: '10px', borderTop: '1px solid orange', borderRight: '1px solid orange', borderBottom: '1px solid orange', background: 'white' }}>

                            <Box>
                                <Typography fontSize={25} fontWeight={500} >{names} <ModeIcon sx={{ color: 'orange', padding: '2px', ":hover": { background: 'orange', borderRadius: '20px', color: 'white', cursor: 'pointer' } }} /> </Typography>
                                <Typography fontSize={25} fontWeight={500} >{dob}<ModeIcon sx={{ color: 'orange', padding: '2px', ":hover": { background: 'orange', borderRadius: '20px', color: 'white', cursor: 'pointer' } }} /> </Typography>
                            </Box>
                        </Box>

                        <Box className='d-flex align-items-center justify-content-center mt-4' sx={{ background: 'orange' }} >
                            <Typography fontSize={10} >
                                https://github.com/ahsanalijs
                            </Typography>
                        </Box>



                    </Box>


                    <Box sx={{
                        border: '2px solid orange',
                        width: '300px',
                        height: '383px',
                        padding: '10px',
                        marginTop: '50px',
                        borderRadius: '10px',
                        paddingBottom: '20px',
                        backgroundImage: `url(${Logos})`,
                        background: 'cover',
                        objectFit: 'contain'
                    }}>


                        <Box className='mt-3'>
                            <Typography color={'#fff'} fontSize={30} fontWeight={600} textAlign={'center'} variant='h5'>Course<span style={{ color: 'black' }} >Info & other </span></Typography>
                        </Box>



                        <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', borderLeft: '4px solid orange', paddingLeft: '5px', borderRadius: '10px', borderTop: '1px solid orange', borderRight: '1px solid orange', borderBottom: '1px solid orange', marginTop: '155px', background: 'white' }}>

                            <Box className='d-flex justify-content-center flex-column'>
                                <Typography fontSize={15} fontWeight={500} >{email} <ModeIcon sx={{ color: 'orange', padding: '2px', ":hover": { background: 'orange', borderRadius: '20px', color: 'white', cursor: 'pointer' } }} /></Typography>
                                <Typography fontSize={15} fontWeight={500} >{course}<ModeIcon sx={{ color: 'orange', padding: '2px', ":hover": { background: 'orange', borderRadius: '20px', color: 'white', cursor: 'pointer' } }} /></Typography>
                                <Typography fontSize={15} fontWeight={500} >Batch : 4<ModeIcon sx={{ color: 'orange', padding: '2px', ":hover": { background: 'orange', borderRadius: '20px', color: 'white', cursor: 'pointer' } }} /></Typography>
                                <Typography fontSize={15} fontWeight={500} >Days :MWF<ModeIcon sx={{ color: 'orange', padding: '2px', ":hover": { background: 'orange', borderRadius: '20px', color: 'white', cursor: 'pointer' } }} /></Typography>
                            </Box>
                        </Box>












                    </Box>



                </Box>
            </Box >

        </>
    )
}

export default StudentsCard