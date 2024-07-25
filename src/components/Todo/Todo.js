import { ReactComponent as DeleteIcon } from "../../icons/delete.svg";
import IconButton from "../IconButton";

const Todo = ({ text, completed, onToggleCompleted, onDeleteTodo }) => {
  return (
    <>
      <input
        type="checkbox"
        className="TodoList__checkbox"
        checked={completed}
        onChange={onToggleCompleted}
      />
      <p className="TodoList__text">{text}</p>
      {/* <button type="button" className="TodoList__btn" onClick={onDeleteTodo}>
        Удалить
      </button> */}

      <IconButton onClick={onDeleteTodo} aria-label="Удалить todo">
        <DeleteIcon width="32" height="32" fill="#fff" />
      </IconButton>
    </>
  );
};

export default Todo;
