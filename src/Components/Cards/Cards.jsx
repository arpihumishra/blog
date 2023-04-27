import React from 'react'
import Card from './card/Card'
import './style.css';
import { ImportExport } from '@mui/icons-material';

export default function Cards() {

    const List = [
        {
            heading: "Featured Post",
            month: "Nov 12",
            text: "This is a wider card with supporting text below as a natural lead-in to additional context",
            imagelink: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=80"
        },

        {
            heading: "Post title",
            month: "Nov 11",
            text: "This is a wider card with supporting text below as a natural lead-in to additional context",
            imagelink: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=80"
        }
    ]

    return (
        <div className='Cards'>
            {
                List.map((item) => {
                    return (
                        <Card child={item} key={item.heading} />
                    );
                })
            }
        </div>
    )
}
