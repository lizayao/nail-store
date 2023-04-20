import './App.css';
import React from "react";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={"Bienvenidas"} />
    </div>
  );
}

export default App;
