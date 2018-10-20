import React from 'react';

const TodoItem = (props) => {
    return (
        <li>
            <input type="checkbox" onChange={(event) => props.toggleTodoDone(event, props.index)} checked={props.todo.done}/>
            <span className={props.todo.done ? "done" : ""}>{props.todo.title}</span>
            <button onClick={() => props.removeTodo(props.index)}>Remove</button>
        </li>
    )
};

export default TodoItem;