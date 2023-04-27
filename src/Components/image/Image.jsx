import React from 'react';
import './imagestyle.css';

export default function Image() {
    return (
        <>
            <div className='imagediv'>
                <img src="https://static.vecteezy.com/system/resources/thumbnails/002/106/276/small/geometric-black-and-gold-background-free-vector.jpg" alt="This is blog image" />
                <div className="textdiv">
                    <p aria-disabled = 'true' className='imageHeading'>Title of a longer featured blog post</p>
                    <p className='Text'>Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.</p>
                    <p className='button'>Continue Reading..</p>
                </div>
            </div>
        </>
    )
}
