import React from 'react'
import './style.css';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

export default function Search() {
    return (
        <div className="main">
            <div className="searchbar">
                <SearchOutlinedIcon className='searchicon' />
            </div>
            <div className="login">
                <button className="btn">SIGN UP</button>
            </div>
        </div>
    )
}
