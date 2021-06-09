import { useState } from "react";
import cn from "classnames";

import CheckBox from "./CheckBox";
import { ReactComponent as Close } from "../assets/icon-cross.svg";

export default function TodoItem({ todo, removeTodo }) {
  const [checked, setChecked] = useState(todo.checked);

  return (
    <div className="bg-white h-16 px-6 flex items-center justify-between border-b-2 border-grayishBlue-light">
      <div className="flex items-center">
        <CheckBox checked={checked} setChecked={setChecked} />
        <div
          className={cn(
            "ml-4",
            checked && "text-grayishBlue-dark line-through"
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
