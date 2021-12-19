import './ToDos.css';
import React from 'react';

export default function ToDos(props) {

    const handleClick = () => {
        props.onClick(props.text);
    }

    return(
    <div className='Todo'>
        <p>{props.text}</p>
        <button type='button' onClick={handleClick}>Delete</button>
    </div>)
}