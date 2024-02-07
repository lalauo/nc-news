import moment from "moment";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getSingleArticle } from "../api";

function Article() {
  const { article_id } = useParams();
  const [article, setArticle] = useState([]);

  useEffect(() => {
    getSingleArticle(article_id).then((data) => {
      setArticle(data.article);
    });
  }, [article_id]);

  return (
    <>
      <div className="single-article">
        <h2>{article.title}</h2>
        <h3>by {article.author}</h3>
        <h5>{article.topic}</h5>
        <h5>{moment(article.created_at).format("MMMM Do YYYY, h:mm a")}</h5>
        <img
          src={article.article_img_url}
          alt={article.topic}
          className="single-article-image"
        />
        <p>{article.body}</p>
        <p>{article.comment_count}</p>
      </div>
    </>
  );
}

export default Article;
