import { useState, createContext } from "react";
import cn from "classnames";

import { ReactComponent as Moon } from "./assets/icon-moon.svg";
import { ReactComponent as Sun } from "./assets/icon-sun.svg";
import TypingBox from "./components/TypingBox";
import TodoList from "./components/TodoList";
import "./App.css";

export const ListContext = createContext({ list: [], setList: () => {} });

function App() {
  const [todoList, setTodoList] = useState([]);
  const [dark, setDark] = useState(false);

  return (
    <ListContext.Provider value={{ list: todoList, setList: setTodoList }}>
      <div
        className={cn("h-screen", dark ? "dark bg-blue-veryDark" : "bg-gray")}
      >
        <header className="header"></header>
        <div className="relative w-full flex justify-center">
          <div className="w-full px-4 md:px-12 xl:w-1/2 absolute bottom-20">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-5xl text-white font-bold text-left">
                T O D O
              </h1>
              <button
                className="focus:outline-none"
                onClick={() => setDark(!dark)}
              >
                {dark ? <Sun /> : <Moon />}
              </button>
            </div>
            <TypingBox />
          </div>
        </div>
        <div className="w-full flex justify-center relative">
          <div className="w-full px-4 md:px-12 xl:w-1/2 absolute -top-12">
            <TodoList />
          </div>
        </div>
      </div>
    </ListContext.Provider>
  );
}

export default App;
