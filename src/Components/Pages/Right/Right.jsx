import React from 'react';
import './style.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function Right() {
  return (
    <div className='rightcontent'>
      <About />
      <Archives />
      <Social />
    </div>
  )
}


function About() {
  return (
    <div className="about">
      <h5>About</h5>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt quam aut aliquam ea aspernatur debitis perferendis vel ipsam possimus harum, doloribus facilis quo hic suscipit doloremque voluptatibus officiis. Ipsam, saepe?</p>
    </div>

  );
}

function Archives() {
  const list = ["March 2020", "February 2020", "January 2020", "November 1999", "October 1999", "Septemeber 1999", "August 1999", "July 1999", "June 1999", "May 1999", "April 1999"];
  return (
    <div className='archives'>
      <p className="head">Archives</p>
      {
        list.map((item) => {
          return (
            <a href="#" style={{ display: 'block' }}>{item}</a>
          );
        })
      }
    </div>
  );
}

function Social() {
  return (
    <div className="social">
      <p className="socialheading">Social</p>
      <div className="github">
        <GitHubIcon className='icon' />
        <a href="#" id = "github">Github</a>
      </div>
      <div className="twitter">
        <TwitterIcon className='icon' />
        <a href="#" id = "twitter">Twitter</a>
      </div>
      <div className="facebook">
        <FacebookIcon className='icon' />
        <a href="#" id = "facebook">Facebook</a>
      </div>
    </div>
  );
}