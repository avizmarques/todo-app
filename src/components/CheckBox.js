import { ReactComponent as Check } from "../assets/icon-check.svg";

export default function CheckBox({ checked, setChecked }) {
  return (
    <div
      onClick={() => {
        setChecked(!checked);
      }}
    >
      {checked ? (
        <div className="rounded-full h-8 w-8 flex justify-center items-center bg-gradient-to-br from-blue-light to-purple">
          <Check />
        </div>
      ) : (
        <div className="rounded-full border-2 border-grayishBlue-light h-8 w-8" />
      )}
    </div>
  );
}
