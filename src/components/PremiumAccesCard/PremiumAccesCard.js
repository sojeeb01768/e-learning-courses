import React from 'react';
import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const PremiumAccesCard = () => {

    const {user} = useContext(AuthContext)
    console.log(user);

    const courses = useLoaderData();
    console.log(courses);
    const {name} = courses;
    return (
        <div className='border m-4 p-3 rounded'>
            <h5> Name: {user.displayName}</h5>
            <p>Email: {user.email}</p>
            <h2 > Congratulation! You got the access of premium: <span className='text-primary'>{name}</span> </h2>
            <Link to='/'><Button  variant="outline-primary">Go to Home</Button></Link>
            

        </div>
    );
};

export default PremiumAccesCard;