import './SubmitButton.css';
import React from 'react';

// Submit button component. Will be used to push to-dos to list.
export default function SubmitButton(props) {

    return (
        <button className="SubmitButton" type="button" 
                onClick={props.onClick}>Add</button>
    )
}