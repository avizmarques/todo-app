import { useState } from "react";
import CheckBox from "./CheckBox";

export default function TypingBox() {
  const [checked, setChecked] = useState(false);

  return (
    <div className="w-1/3 bg-white rounded-md h-16 flex items-center px-6">
      <CheckBox checked={checked} setChecked={setChecked} />
      <input className="ml-4 focus:outline-none" />
    </div>
  );
}
