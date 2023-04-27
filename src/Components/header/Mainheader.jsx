import React from 'react'
import Subscribe from './subscribe/Subscribe'
import Blogtitle from './blogtitle/blogtitle'
import Search from './search/search'
import './style.css';

export default function Mainheader() {
    return (
        <>
            <div className='header'>
                <Subscribe />
                <Blogtitle />
                <Search />
            </div>
            <hr />
        </>
    )
}
