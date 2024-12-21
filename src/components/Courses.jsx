import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from './Course';
import LeftSideNavbar from './LeftSideNavbar';

const Courses = () => {
    const loaderData = useLoaderData()
    return (
        <div className='flex m-5'>
            <div className='grow-0 mr-3'>
                <LeftSideNavbar></LeftSideNavbar>
            </div>
            <div className='grow grid grid-cols-1 md:grid-cols-3'>
            {loaderData.map(course => <Course key={course.id} course = {course}></Course>)}
            </div>
        </div>
    );
};

export default Courses;