import TodoItem from "./TodoItem";

export default function TodoList({ todoList, setTodoList }) {
  function removeTodo(id) {
    const newList = todoList.filter((todo) => (todo.id === id ? false : true));
    setTodoList(newList);
  }

  return (
    <div className="w-1/3 rounded-md overflow-hidden">
      {todoList.map((todo) => (
        <TodoItem todo={todo} removeTodo={removeTodo} />
      ))}
      {todoList.length > 0 && (
        <div className="bg-white h-16 flex items-center px-6">
          <div className="text-sm">{todoList.length} item(s) left</div>
        </div>
      )}
    </div>
  );
}
