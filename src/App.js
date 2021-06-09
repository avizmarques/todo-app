import TypingBox from "./components/TypingBox";
import bg from "./assets/bg-desktop-light.jpg";
import "./App.css";

function App() {
  return (
    <div className="App relative">
      <header className="w-full">
        <img src={bg} alt="background" className="w-full" />
      </header>
      <div className="flex flex-col items-center absolute bottom-4 w-full">
        <TypingBox />
      </div>
    </div>
  );
}

export default App;
