import { useState, createContext } from "react";
import TypingBox from "./components/TypingBox";
import "./App.css";
import TodoList from "./components/TodoList";

export const ListContext = createContext({ list: [], setList: () => {} });

function App() {
  const [todoList, setTodoList] = useState([]);

  // function addTodo(todo) {
  //   setTodoList([...todoList, { ...todo, id: todoList.length + 1 }]);
  // }

  return (
    <ListContext.Provider value={{ list: todoList, setList: setTodoList }}>
      <div className="App">
        <header className="header"></header>
        <div className="relative w-full flex justify-center">
          <div className="w-full px-4 md:px-12 xl:w-1/2 absolute bottom-20">
            <h1 className="text-5xl text-white font-bold mb-8">T O D O</h1>
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
