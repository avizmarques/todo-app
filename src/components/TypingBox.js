import { useState, useContext } from "react";
import { ListContext } from "../App";
import CheckBox from "./CheckBox";

export default function TypingBox() {
  const [checked, setChecked] = useState(false);
  const [todo, setTodo] = useState("");

  const { list, setList } = useContext(ListContext);
  const newTodo = { todo, checked, id: list.length + 1 };

  const addTodo = (e) => {
    e.preventDefault();
    setList([...list, newTodo]);
    setTodo("");
    setChecked(false);
  };

  return (
    <div className="bg-white dark:bg-blue-desaturated dark:text-grayishBlue rounded-md h-16 flex items-center px-6 w-full">
      <CheckBox todo={newTodo} />
      <form onSubmit={(e) => addTodo(e)} className="w-full">
        <input
          className="ml-4 focus:outline-none w-full bg-transparent"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        />
      </form>
    </div>
  );
}
