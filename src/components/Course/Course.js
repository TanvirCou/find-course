import React from 'react';
import './Course.css';

const Course = (props) => {
    const {link_name, advertiser, category, retail_price} = props.course;
    const handleAddCourse = props.handleAddCourse;
    return (
        <div>
            <div className='course'>
                <h3>Course Name: {link_name}</h3>
                <p>By {advertiser}</p>
                <p>Category: {category}</p>
                <h5>${retail_price}</h5>
                <button onClick={() => handleAddCourse(props.course)}>Enroll Now</button>
            </div>
        </div>
    );
};

export default Course;