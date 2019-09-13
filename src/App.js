import React from "react";
import DatePicker from "./components/DatePicker";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <div className="App-logo">
          <p>
            <span>🚀</span>
          </p>
        </div>

        <DatePicker />
      </div>
    </div>
  );
}

export default App;
