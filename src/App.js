import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {

  return (
    <div ClassName="App">
      <Header />
      <Home/>
    </div>
  );
}

export default App;
