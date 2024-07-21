import React, { Component } from "react";
import ToDo from "../ToDo/ToDo";
import todo from "../../todo.json";

class ToDoList extends Component {
  state = {
    todoList: todo,
  };

  handleCheckCompleted = (idItem) => {
    const { todoList } = this.state;
    this.setState({
      todoList: todoList.map((todo) =>
        todo.id === idItem ? { ...todo, completed: !todo.completed } : todo
      ),
    });
  };

  handleDelete = (idItem) => {
    const { todoList } = this.state;
    this.setState({
      todoList: todoList.filter(({ id }) => id !== idItem),
    });
  };

  render() {
    const { todoList } = this.state;

    return (
      <>
        <h1>My To-Do list</h1>
        <ul className="list-group list-group-flush">
          {todoList.map((todo) => (
            <ToDo
              key={todo.id}
              todo={todo}
              handleCheckCompleted={this.handleCheckCompleted}
              handleDelete={this.handleDelete}
            />
          ))}
        </ul>
      </>
    );
  }
}

export default ToDoList;
