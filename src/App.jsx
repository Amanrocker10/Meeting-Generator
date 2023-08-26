import React from "react";
import MeetingGenerator from "./components/MeetingGenerator"
import HomePage from "./components/HomePage";

const App = () => {
  return (
    <div className="App">
      <h1>Meeting Generator</h1>
      <HomePage />
      <MeetingGenerator />
    </div>
  );
};

export default App;
