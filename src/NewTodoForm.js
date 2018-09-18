import React from 'react';

const NewTodoForm = (props) => {
    return (
        <form onSubmit={(event) => props.formSubmitted(event)}>
          <label htmlFor="newTodo">New To-Do</label>
          <input onChange={(event) => props.newTodoChanged(event)} id="newTodo" name="newTodo" value={props.newTodo}/>
          <button type="submit">Add To-Do</button>
        </form>
    )
}

export default NewTodoForm;