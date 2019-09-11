import React from "react";
import Frame from "./components/Frame";
import "./App.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span>🚀</span>!
      </p>

      <Frame />
    </div>
  );
}

export default App;
