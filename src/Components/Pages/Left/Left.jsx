import React from 'react';
import './style.css';
import Post from '../Post/Post';

export default function Left({ data }) {
  // console.log(data);
  return (
    <div className='blogcard'>
      <h4 className='heading'>From the firehose</h4>
      <hr />
      <Post data={data} />
    </div>
  )
}
