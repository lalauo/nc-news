import moment from "moment";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getSingleArticle } from "../api";
import Loading from "./Loading";
import Comments from "./Comments";
import Votes from "./Votes";

function Article() {
  const { article_id } = useParams();
  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showComments, setShowComments] = useState(false);

  useEffect(() => {
    getSingleArticle(article_id).then((data) => {
      setArticle(data.article);
      setIsLoading(false);
    });
  }, [article_id]);

  if (isLoading) {
    return <Loading />;
  }

  const handleShowComments = () => {
    setShowComments(!showComments);
  };

  return (
    <>
      <div className="single-article">
        <h3>{article.title}</h3>
        <h4>by {article.author}</h4>
        <h5>{article.topic}</h5>
        <h5>{moment(article.created_at).format("MMMM Do YYYY, h:mm a")}</h5>
        <img
          src={article.article_img_url}
          alt={article.topic}
          className="single-article-image"
        />
        <p>{article.body}</p>

        <div>
          <Votes votes={article.votes} article_id={article_id} />
          <p>Comments: {article.comment_count}</p>
        </div>

        <button onClick={handleShowComments}>
          {showComments ? "Hide" : "Show"} Comments
        </button>
        {showComments && <Comments />}
      </div>
    </>
  );
}

export default Article;
