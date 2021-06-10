import { useState, createContext } from "react";
import TypingBox from "./components/TypingBox";
import bg from "./assets/bg-desktop-light.jpg";
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
        <header className="w-full">
          <img src={bg} alt="background" className="w-full" />
        </header>
        <div className="relative">
          <div className="flex flex-col items-center absolute bottom-24 w-full">
            <div className="flex w-1/3">
              <h1 className="text-5xl text-white font-bold mb-8">T O D O</h1>
            </div>
            <TypingBox />
          </div>
        </div>
        <div className="w-full flex flex-col items-center mt-8 relative bottom-20">
          <TodoList />
        </div>
      </div>
    </ListContext.Provider>
  );
}

export default App;
