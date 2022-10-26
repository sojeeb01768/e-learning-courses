import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../Shared/CourseCard/CourseCard';

const Home = () => {
    const courses = useLoaderData();

    return (
        <div>
            <h2>Programming Courses Home: {courses.length}</h2>
            {
                courses.map(course=> <CourseCard
                key={course._id}
                course={course}
                ></CourseCard>)
            }
        </div>
    );
};

export default Home;