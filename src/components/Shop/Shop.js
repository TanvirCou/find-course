import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData/data.json'
import Course from '../Course/Course';
import './Shop.css';
import Cart from '../Cart/Cart';

const Shop = () => {
const [courses, setCourses] = useState([]);
const [cart, setCart] = useState([]);

useEffect(() => {
    setCourses(fakeData);
}, [])

const handleAddCourse = (course) => {
    const newCart = [...cart, course];
    setCart(newCart);
}
    return (
        <div className='shop-details'>
            <div className='course-details'>
                {
                    courses.map(course => <Course handleAddCourse={handleAddCourse} course={course}></Course> )
                }
            </div>
            <div>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;