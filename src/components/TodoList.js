import { useContext, useState } from "react";
import cn from "classnames";
import { ListContext } from "../App";

import TodoItem from "./TodoItem";
import FilterBar from "./FilterBar";

export default function TodoList() {
  const { list, setList } = useContext(ListContext);

  const [draggedIndex, setDraggedIndex] = useState(null);
  const [draggedOverIndex, setDraggedOverIndex] = useState(null);
  const [newList, setNewList] = useState(list);

  const unchecked = list.filter((todo) => {
    return !todo.checked;
  });

  const onDragStart = (e, i) => {
    e.dataTransfer.effectAllowed = "move";
    setDraggedIndex(i);
  };

  const onDragOver = (i) => {
    setDraggedOverIndex(i);

    if (i === draggedIndex) {
      return;
    }

    const filteredList = [...list].filter(
      (todo, index) => index !== draggedIndex
    );

    const draggedList = [...filteredList];
    draggedList.splice(i, 0, list[draggedIndex]);

    setNewList(draggedList);
  };

  const onDragEnd = () => {
    setList(newList);
    setDraggedOverIndex(null);
    setDraggedIndex(null);
  };

  const clearCompleted = () => {
    const clearedList = list.filter((todo) => !todo.checked);
    setList(clearedList);
  };

  return (
    <div className="w-1/3 rounded-md overflow-hidden">
      <ul>
        {list.map((todo, i) => (
          <li
            draggable
            onDragStart={(e) => onDragStart(e, i)}
            onDragOver={() => onDragOver(i)}
            onDragEnd={() => onDragEnd()}
            className={cn(
              "border-b-2",
              draggedOverIndex === i && "border-grayishBlue-dark"
            )}
          >
            <TodoItem todo={todo} />
          </li>
        ))}
      </ul>
      {list.length > 0 && (
        <div className="bg-white h-16 flex items-center justify-between px-6 text-gray-400">
          <div className="text-sm">{unchecked.length} item(s) left</div>
          <FilterBar />
          <button
            className="text-sm hover:font-black hover:text-gray-800 focus:outline-none"
            onClick={clearCompleted}
          >
            Clear completed
          </button>
        </div>
      )}
    </div>
  );
}
