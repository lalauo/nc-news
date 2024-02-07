import { useState, useEffect } from "react";
import { getArticles } from "../api";
import moment from "moment";
import { Link } from "react-router-dom";
import Loading from "./Loading";

function AllArticles() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticles().then((data) => {
      setArticles(data.articles);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <div className="article-card">
        <ul>
          {articles.map((article) => {
            return (
              <li key={article.article_id}>
                <h2>{article.title}</h2>
                <h3>by {article.author}</h3>
                <h5>{article.topic}</h5>
                <h5>
                  {moment(article.created_at).format("MMMM Do YYYY, h:mm a")}
                </h5>
                <img
                  src={article.article_img_url}
                  alt={article.topic}
                  className="article-preview-image"
                />
                <div>
                  <button>
                    <p>{article.votes}</p>👍
                  </button>
                  <Link to={`/nc-news/${article.article_id}`}>
                    Read Article
                  </Link>
                  <p>{article.comment_count}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default AllArticles;
