import { useState } from "react";
import TypingBox from "./components/TypingBox";
import bg from "./assets/bg-desktop-light.jpg";
import "./App.css";
import TodoList from "./components/TodoList";

function App() {
  const [todoList, setTodoList] = useState([]);

  function addTodo(todo) {
    setTodoList([...todoList, { ...todo, id: todoList.length + 1 }]);
  }

  return (
    <div className="App">
      <header className="w-full">
        <img src={bg} alt="background" className="w-full" />
      </header>
      <div className="relative">
        <div className="flex flex-col items-center absolute bottom-24 w-full">
          <TypingBox addTodo={addTodo} />
        </div>
      </div>
      <div className="w-full flex flex-col items-center mt-8 relative bottom-20">
        <TodoList todoList={todoList} setTodoList={setTodoList} />
      </div>
    </div>
  );
}

export default App;
