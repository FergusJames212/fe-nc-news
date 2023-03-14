import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import ArticlePage from "./components/ArticlePage";

function App() {
  return (
    <div ClassName="App">
      <Header />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="article/:article_id" element={<ArticlePage />} />
      </Routes>
    </div>
  );
}

export default App;
