import { useState } from "react";
import cn from "classnames";

import CheckBox from "./CheckBox";

export default function TodoItem({ todo, removeTodo }) {
  const [checked, setChecked] = useState(todo.checked);

  return (
    <div className="bg-white h-16 px-6 flex items-center border-b-2 border-grayishBlue-light">
      <CheckBox checked={checked} setChecked={setChecked} />
      <div
        className={cn("ml-4", checked && "text-grayishBlue-dark line-through")}
      >
        {todo.todo}
      </div>
      <div onClick={() => removeTodo(todo.id)}>X</div>
    </div>
  );
}
