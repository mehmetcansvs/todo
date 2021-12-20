import './ToDoList.css';
import React from 'react';
import ToDos from '../ToDos/ToDos'

export default function ToDoList(props) {

    const todosList = props.todos.map(element => {
        return <ToDos text={element} onClick={props.onClick}/>
    })

    const emptyList = () => {
        return <p>The list is empty. Populate it by adding a new to-do.</p>
    }

    
    return (
        <div className='List'>
            {props.todos.length === 0 ? emptyList() : todosList}
        </div>
    )
}