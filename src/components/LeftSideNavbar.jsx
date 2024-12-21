import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNavbar = () => {
    const [courses, setCourses] = useState([])

    useEffect(() => {
        fetch('https://assignment-ten-sever.vercel.app/courses')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    return (
        <div>
            <h1 className='mb-5'>All Courses: {courses.length}</h1>
            <div>
                {
                    courses.map(course => <p key={course.id}><Link to={`/courses/${course.id}`}><button className="btn btn-primary mb-5">{course.name}</button></Link></p>)
                }
            </div>
        </div>
    );
};

export default LeftSideNavbar;