import TodoItem from "./TodoItem";

export default function TodoList({ todoList, setTodoList }) {
  function removeTodo(id) {
    const newList = todoList.splice(id - 1);
    setTodoList(newList);
  }

  return (
    <div className="w-1/3 rounded-md overflow-hidden">
      {todoList.map((todo) => (
        <TodoItem todo={todo} removeTodo={removeTodo} />
      ))}
      <div className="bg-white h-16 flex items-center px-6">
        <div className="text-sm">5 items left</div>
      </div>
    </div>
  );
}
