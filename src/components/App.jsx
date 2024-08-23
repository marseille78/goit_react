import { useState } from "react";
import { nanoid } from "nanoid";

import Header from "./Header/Header";
import ToDoList from "./ToDoList/ToDoList";
import Modal from "./Modal/Modal";
import FormLogin from "./FormLogin/FormLogin";
import Search from "./Search/Search";
import ContentInfo from "./ContentInfo/ContentInfo";
import Counter from "./Counter/Counter";

const App = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [searchText, setSearchText] = useState("");

  const showModal = () => {
    setIsShowModal(true);
  };

  const closeModal = () => {
    setIsShowModal(false);
  };

  const createUser = (data) => {
    const newUser = {
      ...data,
      id: nanoid(),
    };
    console.log("newUser :>> ", newUser);
  };

  const handleSearch = (searchText) => {
    setSearchText(searchText);
  };

  return (
    <div className="container">
      <Header showModal={showModal} />
      <Search handleSearch={handleSearch} />
      <ContentInfo searchText={searchText} />
      {/* <ToDoList /> */}
      {isShowModal && (
        <Modal closeModal={closeModal}>
          <FormLogin closeModal={closeModal} createUser={createUser} />
        </Modal>
      )}
      <Counter />
    </div>
  );
};

export default App;
