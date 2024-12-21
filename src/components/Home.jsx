import React from 'react';
import Lottie from 'lottie-react'
import {Link} from 'react-router-dom'
import education from '../assets/education.json'
import { FaArrowRight } from "react-icons/fa";

const Home = () => {
    return (
        <div className='grid md:grid-cols-2 sm:grid-cols-1'>
            <div className=''>
                <Lottie animationData={education}></Lottie>
            </div>
            <div className='my-auto'>
                <button className="btn btn-wide btn-primary"><Link to='/courses'>Explore Courses</Link><FaArrowRight></FaArrowRight></button>
            </div>
        </div>
    );
};

export default Home;