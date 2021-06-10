import { useContext } from "react";
import { ListContext } from "../App";

import TodoItem from "./TodoItem";

export default function TodoList() {
  const { list } = useContext(ListContext);

  const unchecked = list.filter((todo) => {
    return !todo.checked;
  });

  return (
    <div className="w-1/3 rounded-md overflow-hidden">
      {list.map((todo) => (
        <TodoItem todo={todo} />
      ))}
      {list.length > 0 && (
        <div className="bg-white h-16 flex items-center px-6">
          <div className="text-sm">{unchecked.length} item(s) left</div>
        </div>
      )}
    </div>
  );
}
