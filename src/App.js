import React, { Component } from 'react';
import NewTodoForm from "./NewTodoForm";
import TodoList from "./TodoList";
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      message: "Hello!",
      newTodo: "",
      todos: []
    };
  }

  formSubmitted(event) {
    event.preventDefault();
    this.setState({
      todos: [...this.state.todos, {
        title: this.state.newTodo,
        done: false
      }],
      newTodo: ""
    });
  }

  newTodoChanged(event) {
    this.setState({
      newTodo: event.target.value
    });
  }

  toggleTodoDone(event, index) {
    // Deep copy of todos
    const todos = [...this.state.todos];
    // Pick out todo
    const todo = todos[index];
    // Change "done" - inside the array
    todo.done = event.target.checked;
    this.setState({
      todos
    });
  }

  removeTodo(index) {
    // Deep copy of todos
    const todos = [...this.state.todos];
    // Delete todo
    todos.splice(index, 1);
    // Change state
    this.setState({
      todos
    });
  }

  allDone() {
    // Deep copy of todos
    const todos = [...this.state.todos];
    // Set all to done
    todos.forEach((todo) => {todo.done = true});
    // Change state
    this.setState({
      todos
    });
  }

  render() {
    return (
      <div className="App">
        <h3>{this.state.message}</h3>

        <NewTodoForm
          newTodoChanged={this.newTodoChanged.bind(this)}
          formSubmitted={this.formSubmitted.bind(this)}
          newTodo={this.state.newTodo}
        />
    
        <button onClick={() => this.allDone()}>All done</button>

        <TodoList
          todos={this.state.todos}
          toggleTodoDone={this.toggleTodoDone.bind(this)}
          removeTodo={this.removeTodo.bind(this)}
        />

      </div>
    );
  }
}

export default App;
