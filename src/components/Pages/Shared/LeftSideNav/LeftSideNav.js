import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://e-learning-server-side-omega.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div>
            <h4>All Category: {categories.length}</h4>
            <div className=''>
                {
                    categories.map(category => <p
                        className='fs-5 fw-semibold mx-4 p-2 rounded-4 font-weight- border shadow-sm p-3 mb-2 bg-white rounded'
                        key={category.id}>
                        <Link className='text-decoration-none p-2' to={`/category/${category.id}`}>{category.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;