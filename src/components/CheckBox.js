import { useContext } from "react";
import { ListContext } from "../App";
import { ReactComponent as Check } from "../assets/icon-check.svg";

export default function CheckBox({ todo }) {
  const { list, setList } = useContext(ListContext);

  const toggleChecked = async (id) => {
    const newList = list.map((todo) =>
      todo.id === id ? { ...todo, checked: !todo.checked } : todo
    );
    await setList(newList);
  };

  return (
    <button
      className="focus:outline-none"
      onClick={() => toggleChecked(todo.id)}
    >
      {todo.checked ? (
        <div className="rounded-full h-8 w-8 flex justify-center items-center bg-gradient-to-br from-blue-light to-purple">
          <Check />
        </div>
      ) : (
        <div className="rounded-full border-2 border-grayishBlue-light h-8 w-8" />
      )}
    </button>
  );
}
