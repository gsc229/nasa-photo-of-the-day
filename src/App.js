import React from "react";
import DatePicker from "./components/DatePicker";
import "./App.css";

function App() {
  return (
    <div className="App">
      <p>
        HELLO! I'M FROM APP...Read through the instructions in the README.md
        file to build your NASA app! Have fun <span>🚀</span>!
      </p>

      <DatePicker />
    </div>
  );
}

export default App;
