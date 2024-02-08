import "../styles/App.css";
import "../styles/nc-news.css";

import { Routes, Route } from "react-router-dom";

import Header from "./Header";
import AllArticles from "./AllArticles";
import Article from "./Article";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<AllArticles />} />
        <Route path="/:article_id" element={<Article />} />
      </Routes>
    </>
  );
}

export default App;
