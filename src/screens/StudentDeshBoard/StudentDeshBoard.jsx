import React from 'react'
import StudentsCard from '../../components/StudentCard/StudentsCard'
import ResponsiveAppBar from '../../components/studentNavbar/StudentsNabar'


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