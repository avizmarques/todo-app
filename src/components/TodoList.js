import { useContext, useState } from "react";
import cn from "classnames";
import { ListContext } from "../App";

import TodoItem from "./TodoItem";
import FilterBar from "./FilterBar";

export default function TodoList() {
  const { list, setList } = useContext(ListContext);

  const activeList = list.filter((todo) => !todo.checked);
  const completedList = list.filter((todo) => todo.checked);

  const [filter, setFilter] = useState("all");
  console.log(filter);

  const [draggedIndex, setDraggedIndex] = useState(null);
  const [draggedOverIndex, setDraggedOverIndex] = useState(null);
  const [newList, setNewList] = useState(list);

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
    setList(activeList);
  };

  return (
    <div>
      <div className="rounded-md overflow-hidden shadow-xl">
        <ul>
          {filter === "active"
            ? activeList.map((todo, i) => (
                <li
                  draggable
                  onDragStart={(e) => onDragStart(e, i)}
                  onDragOver={() => onDragOver(i)}
                  onDragEnd={() => onDragEnd()}
                  className={cn(
                    "border-b",
                    draggedOverIndex === i
                      ? "border-grayishBlue-dark dark:border-blue"
                      : "dark:border-grayishBlue-darkest"
                  )}
                >
                  <TodoItem todo={todo} />
                </li>
              ))
            : filter === "completed"
            ? completedList.map((todo, i) => (
                <li
                  draggable
                  onDragStart={(e) => onDragStart(e, i)}
                  onDragOver={() => onDragOver(i)}
                  onDragEnd={() => onDragEnd()}
                  className={cn(
                    "border-b",
                    draggedOverIndex === i
                      ? "border-grayishBlue-dark dark:border-blue"
                      : "dark:border-grayishBlue-darkest"
                  )}
                >
                  <TodoItem todo={todo} />
                </li>
              ))
            : list.map((todo, i) => (
                <li
                  draggable
                  onDragStart={(e) => onDragStart(e, i)}
                  onDragOver={() => onDragOver(i)}
                  onDragEnd={() => onDragEnd()}
                  className={cn(
                    "border-b",
                    draggedOverIndex === i
                      ? "border-grayishBlue-dark dark:border-blue"
                      : "dark:border-grayishBlue-darkest"
                  )}
                >
                  <TodoItem todo={todo} />
                </li>
              ))}
        </ul>
        {list.length > 0 && (
          <div className="bg-white dark:bg-blue-desaturated h-16 flex items-center justify-center sm:justify-between px-6 text-gray-400">
            <div className="text-sm hidden sm:block">
              {activeList.length} item(s) left
            </div>
            <FilterBar filter={filter} setFilter={setFilter} />
            <button
              className="text-sm hover:font-black hover:text-gray-800 focus:outline-none hidden sm:block dark:hover:text-white"
              onClick={clearCompleted}
            >
              Clear completed
            </button>
          </div>
        )}
      </div>
      {list.length > 0 && (
        <div className="mt-8 mb-8 text-gray-400 text-sm text-center">
          Drag and drop to reorder list
        </div>
      )}
    </div>
  );
}
