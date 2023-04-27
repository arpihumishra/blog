import React from 'react';
import './style.css';

export default function Post({ data }) {
  console.log(data);
  return (
    <div id="postcard">
      <div className="maincontent">
        <CreatPost data={data} />
      </div>
    </div>
  )
}

function CreatPost({ data }) {
  return (
    <>
      {
        data.map((obj) => {
          return (
            <div key={obj.key} id='data'>
              <h4 id='heading'>{obj.title}</h4>
              <p><i>{obj.date}</i> by <a href="#">{obj.author}</a></p>
              <p className="authorcontent">
                {obj.content}
              </p>
            </div>
          );
        })
      }
    </>
  );
}