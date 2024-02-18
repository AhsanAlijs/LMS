import React from 'react'
import ResponsiveAppBar from '../../components/Drawer/studentNavbar/StudentsNabar'
import StudentsCard from '../../components/Drawer/StudentCard/StudentsCard'

const StudentDeshBoard = () => {
    return (
        <>
            <ResponsiveAppBar />
            <div className=''>
                <StudentsCard />
            </div>
        </>
    )
}

export default StudentDeshBoard