import React from "react";
import { Header } from "./components/header";
import { UserInput } from "./components/user-input-container";
import "./App.css";

function App() {
  return (
    <div id="container">
      <Header />
      <div id="main-content">
        <UserInput />
      </div>
    </div>
  );
}

export default App;
