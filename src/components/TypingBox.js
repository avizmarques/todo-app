import { useState } from "react";
import CheckBox from "./CheckBox";

export default function TypingBox({ addTodo }) {
  const [checked, setChecked] = useState(false);
  const [todo, setTodo] = useState("");

  return (
    <div className="bg-white rounded-md h-16 flex items-center px-6 w-1/3">
      <CheckBox checked={checked} setChecked={setChecked} />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTodo({
            todo,
            checked,
          });
          setTodo("");
          setChecked(false);
        }}
        className="w-full"
      >
        <input
          className="ml-4 focus:outline-none w-full"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        />
      </form>
    </div>
  );
}
