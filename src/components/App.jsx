import "../App.css";
import "../nc-news.css";
import Header from "./Header";
import Navigation from "./Navigation";
import { Routes, Route } from "react-router-dom";
import AllArticles from "./AllArticles";
import Article from "./Article";

function App() {
  return (
    <>
      <Navigation />
      <Header />
      <Routes>
        <Route path="/nc-news" element={<AllArticles />} />
        <Route path="/nc-news/:article_id" element={<Article />} />
      </Routes>
    </>
  );
}

export default App;
