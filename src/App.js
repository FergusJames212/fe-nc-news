import './App.css';
import { useState, useEffect } from "react";
import Header from "./components/Header";

const [articles, setArticles] = useState([]);

function App() {
  return (
    <div ClassName="App">
<Header />
    </div>
  );
}

export default App;
