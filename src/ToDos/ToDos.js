import './ToDos.css';
import React from 'react';

export default function ToDos(props) {

    return(
    <div className='Todo'>
        <p>{props.text}</p>
        <button type='button'>Delete</button>
    </div>)
}