import './ToDoList.css';
import React from 'react';
import ToDos from '../ToDos/ToDos'

export default function ToDoList(props) {

    const todosList = props.todos.map(element => {
        return <ToDos text={element} onClick={props.onClick}/>
    })
    
    return (
        <div>
            {todosList}
        </div>
    )
}