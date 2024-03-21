import { Box, Card, CardMedia, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { getAllData } from '../../../config/firebase/firebasemethods/firebaseMethods'

const AllCousrse = () => {

    const [teacher, setTeacher] = useState([])

    useEffect(() => {
        getAllData('course')
            .then((res) => {
                const teach = res
                setTeacher(teach)
            })
            .catch((error) => {
                console.error(error);
            });
    }, [])
    // console.log(teacher);






    return (
        <>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '14px' }}>
                {
                    teacher.map((item) => {
                        console.log(item);
                        return <Card className='w-75 p-2' sx={{ borderRadius: '30px' }} >
                            <Box className="d-flex justify-content-center">
                                <Typography sx={{ padding: '20px', background: '#f6f6f6', borderBottom: '1px solid gray', width: '95%', borderTopLeftRadius: '50px', borderTopRightRadius: '30px' }} >
                                    <p style={{ fontSize: '15px', fontWeight: '700' }} >{item.day}</p>
                                    <Typography fontSize={20} fontWeight={800} variant='h5' >Chat Bot</Typography>
                                </Typography>
                            </Box>
                            <Box className='d-flex align-items-center' >
                                <CardMedia
                                    sx={{ width: '90px', padding: '5px' }}
                                    height='90'
                                    component="img"
                                    image="https://logo.com/image-cdn/images/kts928pd/production/7b2f373fc1d56b123f04f428f8ae96a1522f820f-398x401.png?w=1080&q=72"
                                />
                                <Typography fontSize={20} fontWeight={700}>
                                    {item.teacher
                                    }
                                </Typography>
                            </Box>

                            <Box display={'flex'} alignItems={'center'} justifyContent={'center'} gap={5}  >
                                <Typography border={'2px solid orange'} padding={'3px'} borderRadius={10} fontWeight={700} >Monday</Typography>
                                <Typography border={'2px solid orange'} padding={'3px'} borderRadius={10} fontWeight={700} >Wednesday</Typography>
                                <Typography border={'2px solid orange'} padding={'3px'} borderRadius={10} fontWeight={700} >Friday</Typography>
                            </Box>
                        </Card>
                    })
                }




                {/* <Card className='w-75 p-2' sx={{ borderRadius: '30px' }} >
                    <Box className="d-flex justify-content-center">
                        <Typography sx={{ padding: '20px', background: '#f6f6f6', borderBottom: '1px solid gray', width: '95%', borderTopLeftRadius: '50px', borderTopRightRadius: '30px' }} >
                            <p style={{ fontSize: '15px', fontWeight: '700' }} >Feb 10,2003</p>
                            <Typography fontSize={20} fontWeight={800} variant='h5' >Chat Bot</Typography>
                        </Typography>
                    </Box>
                    <Box className='d-flex align-items-center' >
                        <CardMedia
                            sx={{ width: '90px', padding: '5px' }}
                            height='90'
                            component="img"
                            image="https://logo.com/image-cdn/images/kts928pd/production/7b2f373fc1d56b123f04f428f8ae96a1522f820f-398x401.png?w=1080&q=72"
                        />
                        <Typography fontSize={20} fontWeight={700}>
                            Teacher <br />
                            Inzamam Malik
                        </Typography>
                    </Box>

                    <Box display={'flex'} alignItems={'center'} justifyContent={'center'} gap={5}  >
                        <Typography border={'2px solid orange'} padding={'3px'} borderRadius={10} fontWeight={700} >Monday</Typography>
                        <Typography border={'2px solid orange'} padding={'3px'} borderRadius={10} fontWeight={700} >Wednesday</Typography>
                        <Typography border={'2px solid orange'} padding={'3px'} borderRadius={10} fontWeight={700} >Friday</Typography>
                    </Box>
                </Card> */}
            </Box>
        </>
    )
}

export default AllCousrse