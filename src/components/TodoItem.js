import { useContext } from "react";
import { ListContext } from "../App";
import cn from "classnames";
import CheckBox from "./CheckBox";
import { ReactComponent as Close } from "../assets/icon-cross.svg";

export default function TodoItem({ todo }) {
  const { list, setList } = useContext(ListContext);

  function removeTodo(id) {
    const newList = list.filter((todo) => (todo.id === id ? false : true));
    setList(newList);
  }

  return (
    <div className="bg-white h-16 px-6 flex items-center justify-between border-b-2 border-grayishBlue-light">
      <div className="flex items-center">
        <CheckBox todo={todo} />
        <div
          className={cn(
            "ml-4",
            todo.checked && "text-grayishBlue-dark line-through"
          )}
        >
          {todo.todo}
        </div>
      </div>
      <button
        className="focus:outline-none"
        onClick={() => removeTodo(todo.id)}
      >
        <Close />
      </button>
    </div>
  );
}
