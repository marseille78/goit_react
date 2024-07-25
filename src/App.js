import React, { Component } from "react";
import shortid from "shortid";
// import ColorPicker from './components/ColorPicker';
// import Counter from './components/Counter';
import Container from "./components/Container";
// import Tabs from "./components/Tabs";
import TodoList from "./components/TodoList";
import TodoEditor from "./components/TodoEditor";
import Filter from "./components/Filter";
import Modal from "./components/Modal";
import IconButton from "./components/IconButton";
// import Clock from "./components/Clock";
// import Form from './components/Form';
// import initialTodos from "./todos.json";

// import tabs from "./tabs.json";
import { ReactComponent as AddIcon } from "../src/icons/add.svg";

class App extends Component {
  state = {
    // todos: initialTodos,
    todos: [],
    filter: "",
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  addTodo = (text) => {
    const todo = {
      id: shortid.generate(),
      text,
      completed: false,
    };

    this.setState(({ todos }) => ({
      todos: [todo, ...todos],
    }));

    this.toggleModal();
  };

  deleteTodo = (todoId) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== todoId),
    }));
  };

  toggleCompleted = (todoId) => {
    this.setState(({ todos }) => ({
      todos: todos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  };

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleTodos = () => {
    const { filter, todos } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return todos.filter((todo) =>
      todo.text.toLowerCase().includes(normalizedFilter)
    );
  };

  calculateCompletedTodos = () => {
    const { todos } = this.state;

    return todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0
    );
  };

  componentDidMount = () => {
    console.log("App componentDidMount");

    const todos = JSON.parse(localStorage.getItem("todos"));

    if (todos) {
      this.setState({ todos });
    }
  };

  componentDidUpdate(prevProps, prevState) {
    console.log("App componentDidUpdate");

    if (this.state.todos !== prevState.todos) {
      console.log("Обновилось поле todos");

      localStorage.setItem("todos", JSON.stringify(this.state.todos));
    }
  }

  render() {
    // console.log("App render");
    const { todos, filter, showModal } = this.state;
    const totalTodoCount = todos.length;
    const completedTodoCount = this.calculateCompletedTodos();
    const visibleTodos = this.getVisibleTodos();

    return (
      <Container>
        {/* <Tabs items={tabs} /> */}

        <IconButton onClick={this.toggleModal} aria-label="Добавить todo">
          <AddIcon width="40" height="40" fill="#fff" />
        </IconButton>

        {/* <Clock /> */}
        {/* <button type="button" onClick={this.toggleModal}>
          Открыть модалку
        </button> */}
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <TodoEditor onSubmit={this.addTodo} />
            {/* <h1>Контент модалки</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta
              praesentium ullam eius, minus esse blanditiis maiores dolores
              nihil laboriosam quam consequatur, beatae eligendi similique.
              Illum quo cupiditate incidunt! Aperiam, quam. Ea quae perferendis
              aperiam tempora assumenda, odio at consequatur et nostrum
              excepturi aliquam facilis quo quisquam ut ad numquam vero maxime
              reiciendis animi voluptas molestias. Enim vero nam esse repellat.
              Quos eius non sunt blanditiis nihil voluptate, saepe nam nobis
              tenetur sed doloremque qui ratione? Impedit illo necessitatibus
              nobis doloremque, voluptatem molestias, error provident aliquid
              deleniti ad itaque sit officiis!
            </p>
            <button type="button" onClick={this.toggleModal}>
              Закрыть
            </button> */}
          </Modal>
        )}

        {/* TODO: вынести в отдельный компонент */}

        <div>
          <p>Всего заметок: {totalTodoCount}</p>
          <p>Выполнено: {completedTodoCount}</p>
        </div>

        <Filter value={filter} onChange={this.changeFilter} />

        <TodoList
          todos={visibleTodos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}
        />
      </Container>
    );
  }
}

export default App;

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D8B' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];
