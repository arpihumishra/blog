import React from 'react';
import './style.css';

export default function Option() {
    const optionList = ["Technology", "Design", "Culture", "Business", "Politics", "Opinion", "Science", "Health", "Style", "Travel"];
    return (
        <div className='list'>
            <Createlist list={optionList} />
        </div>
    )
}

function Createlist({ list }) {
    return (
        <>
            {
                list.map((ele) => {
                    return (
                        <button key={ele}>{ele}</button>
                    );
                })
            }
        </>
    )
}