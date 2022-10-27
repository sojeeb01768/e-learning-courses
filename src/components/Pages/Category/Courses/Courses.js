import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { FaRegEye, FaStar } from "react-icons/fa";

const Courses = () => {
    const courses = useLoaderData();
    const { name, title, image_url, tutor, total_view, price, details, rating } = courses;
    // console.log(courses);
    return (
            <div>

                <h2 className='text-center my-2'>{name}</h2>
                <Card className='mb-5 shadow'>
            <Card.Header className='d-flex justify-content-evenly align-items-center' >
                <div className='fs-5 fw-semibold'>
                    Instructor: {tutor.name}
                </div>
                <div className='me-2'>
                    <FaRegEye></FaRegEye>
                    <span> {total_view}</span>
                </div>
            </Card.Header>

            <Card.Img variant="top" src={image_url} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <div className='align-items-center'>
                    <FaStar className='text-danger pb-1'></FaStar>
                    <span className='p-1'> {rating.number}</span>
                </div>
                <Card.Text>
                    {details}
                </Card.Text>
                <div className='d-flex justify-content-between align-items-center'>
                    <p className='border bg-info text-center py-2 text-light w-25 rounded'>
                        Course Fee: {price} TK
                    </p>
                    <Link to='/accesscard'>
                    <button className=' bg-info text-light rounded border py-2 fs-5 fw-semibold'>
                        Get premium Access
                    </button>
                    </Link>
                </div>
            </Card.Body>
        </Card>
            </div>

        
    );
};

export default Courses;