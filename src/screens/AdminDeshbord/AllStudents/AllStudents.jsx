import { Box, Button, Card, CardMedia, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import Modal from '@mui/material/Modal';
import StudentsCard from '../../../components/StudentCard/StudentsCard';
const AllStudents = () => {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    }
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const stop = (e) => {
        e.stopPropagation()
        console.log('hello')
    }

    useEffect(() => {

    }, [])

    const getStudentFromFireStore = () => {

    }



    return (
        <>
            <Box>
                <Typography bgcolor={'#d3d3d333'} padding={2} borderRadius={2} marginTop={0} fontWeight={700} variant='h3'>
                    All Students
                </Typography>


                <Box>
                    <div>
                        <Card onClick={handleOpen} className='mt-5' sx={{ border: '1px solid Orange', borderRadius: '20px' }} >
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 'px', marginTop: '6px', paddingLeft: '10px', paddingRight: '10px', cursor: 'pointer' }}>
                                <CardMedia
                                    sx={{ width: '80px', border: '3px solid orange', borderRadius: '50px', marginBottom: '6px' }}
                                    height='80'
                                    component="img"
                                    image="https://img.freepik.com/free-photo/majestic-mountain-peak-tranquil-winter-landscape-generated-by-ai_188544-15662.jpg"
                                />
                                <Box>
                                    <Typography fontSize={20} fontWeight={700}>
                                        Ahsan Ali
                                    </Typography>
                                </Box>
                                <Box>
                                    <Button onClick={stop} sx={{ background: 'orange', color: 'black', ":hover": { background: 'darkOrange', color: 'White' } }} variant='contained'   ><DeleteRoundedIcon /></Button>
                                </Box>
                            </Box>
                        </Card>

                        <Modal
                            sx={{ cursor: 'pointer' }}
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style}>

                                <Typography sx={{ marginTop: '-50px' }} id="modal-modal-description">
                                    <StudentsCard />
                                </Typography>
                            </Box>
                        </Modal>
                    </div>









                    <div>
                        <Card onClick={handleOpen} className='mt-5' sx={{ border: '1px solid Orange', borderRadius: '20px' }} >
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 'px', marginTop: '6px', paddingLeft: '10px', paddingRight: '10px', cursor: 'pointer' }}>
                                <CardMedia
                                    sx={{ width: '80px', border: '3px solid orange', borderRadius: '50px', marginBottom: '6px' }}
                                    height='80'
                                    component="img"
                                    image="https://img.freepik.com/free-photo/majestic-mountain-peak-tranquil-winter-landscape-generated-by-ai_188544-15662.jpg"
                                />
                                <Box>
                                    <Typography fontSize={20} fontWeight={700}>
                                        Ahsan Ali
                                    </Typography>
                                </Box>
                                <Box>
                                    <Button onClick={stop} sx={{ background: 'orange', color: 'black', ":hover": { background: 'darkOrange', color: 'White' } }} variant='contained'   ><DeleteRoundedIcon /></Button>
                                </Box>
                            </Box>
                        </Card>

                        <Modal
                            sx={{ cursor: 'pointer' }}
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style}>

                                <Typography sx={{ marginTop: '-50px' }} id="modal-modal-description">
                                    <StudentsCard />
                                </Typography>
                            </Box>
                        </Modal>
                    </div>
                </Box>
            </Box >
        </>
    )
}

export default AllStudents