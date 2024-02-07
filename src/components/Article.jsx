import moment from "moment";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getSingleArticle } from "../api";
import Loading from "./Loading";

function Article() {
  const { article_id } = useParams();
  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    getSingleArticle(article_id).then((data) => {
      setArticle(data.article);
      setIsLoading(false);
    });
  }, [article_id]);

    if (isLoading) {
      return <Loading />;
    }
    
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
