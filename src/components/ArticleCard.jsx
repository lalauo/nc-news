import { useState, useEffect } from "react";
import { getArticles } from "../api";
import moment from "moment";

function ArticleCard() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles().then((data) => {
      console.log(data.articles);
      setArticles(data.articles);
    });
  }, []);

  console.log();

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
                <img src={article.article_img_url} alt={article.topic} />
                <div>
                  <p>{article.votes}</p>
                  <button>👍</button>
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

export default ArticleCard;
