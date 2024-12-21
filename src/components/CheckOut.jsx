import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const details = useLoaderData()
    const { fee, name} = details

    return (
        <div>
            <p className='text-2xl mt-20'>You are going to buy the course: </p>
            <br />
            <h3 className='text-5xl'>{name}</h3>
            <p className='text-2xl'>for only</p>
            <h2 className='font-extrabold text-3xl'>{fee}</h2>
            <button className="btn btn-wide btn-primary mt-5 mb-5">Proceed</button>
        </div>
    );
};

export default CheckOut;