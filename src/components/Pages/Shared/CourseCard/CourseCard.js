import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { FaRegEye, FaStar } from "react-icons/fa";


const CourseCard = ({ course }) => {
    const { _id, title, image_url, tutor, total_view, price, details, rating } = course;
    console.log(course);

    return (
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
                    {
                        details.length > 150 ?
                            <p>{details.slice(0, 150) + '...'} <Link to={`/courses/${_id}`}>Course Details</Link></p>
                            :
                            <p>{details}</p>
                    }
                </Card.Text>
                <h6 className='border bg-info text-center py-2 text-light'>Course Fee: {price} TK</h6>
            </Card.Body>
        </Card>
    );
};

export default CourseCard;