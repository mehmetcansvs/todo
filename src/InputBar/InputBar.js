import './InputBar.css';
import React from 'react';


// Input bar component. To-Do's will be written into this component.
export default function InputBar(props) {

    const handleChange = (e) => {
        props.onChange(e.target.value);
    }

    const handleFocus = (e) => {
        e.target.value = '';
    }

    return (
        <input className="InputBar" type="text" onChange={handleChange}
                onFocus={handleFocus}></input>
    )
}