import React from 'react';
import './style.css';

export default function Card({ child }) {
    console.log(child);
    return (
        <div className='card'>
            <div className="text">
                <p className="Heading">{child.heading}</p>
                <p className="date">{child.month}</p>
                <p className="Text">{child.text}</p>
                <p className="button">Continue reading...</p>
            </div>
            <div className="image">
                <img src={child.imagelink} alt="" />
            </div>
        </div>
    )
}
