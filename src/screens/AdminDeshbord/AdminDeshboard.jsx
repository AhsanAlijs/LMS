import React from 'react'
import PersistentDrawerLeft from '../../components/Drawer/Drawer'
import { Box } from '@mui/material'
import { Route, Routes } from 'react-router-dom'
import AddCourse from './Add Course/AddCourse'
import AllStudents from './AllStudents/AllStudents'
import AllCousrse from './AllCouse/AllCousrse'
import SingleCouse from './SingleCourse/SingleCouse'

const AdminDeshboard = () => {
    return (
        <>
            <PersistentDrawerLeft screen={
                <Box>
                    <Routes>
                        <Route path='/' element={<AddCourse />} />
                        <Route path='/allcourse' element={<AllCousrse />} />
                        <Route path='/allstudents' element={<AllStudents />} />
                        <Route path='/singlecourse' element={<SingleCouse />} />

                    </Routes>
                </Box>
            } />
        </>
    )
}

export default AdminDeshboard