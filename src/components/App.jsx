import { Component } from "react";
import { nanoid } from "nanoid";
import Header from "./Header/Header";
// import Counter from "./Counter/Counter";
import ToDoList from "./ToDoList/ToDoList";
import Modal from "./Modal/Modal";
import FormLogin from "./FormLogin/FormLogin";

class App extends Component {
  state = {
    isShowModal: false,
  };

  showModal = () => {
    this.setState({ isShowModal: true });
  };

  closeModal = () => {
    this.setState({ isShowModal: false });
  };

  createUser = (data) => {
    const newUser = {
      ...data,
      id: nanoid(),
    };
    console.log("newUser :>> ", newUser);
  };

  render() {
    const { isShowModal } = this.state;

    return (
      <div className="container">
        <Header showModal={this.showModal} />
        {/* <Counter /> */}
        <ToDoList />

        {isShowModal && (
          <Modal closeModal={this.closeModal}>
            <FormLogin
              createUser={this.createUser}
              closeModal={this.closeModal}
            />
          </Modal>
        )}
      </div>
    );
  }
}

export default App;
