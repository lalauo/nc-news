import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getComments } from "../api";
import Loading from "./Loading";
import moment from "moment";

function Comments() {
  const { article_id } = useParams();
  const [articleComments, setArticleComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getComments(article_id).then((data) => {
      setArticleComments(data.comments);
      setIsLoading(false);
    });
  }, [article_id]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <div>
        <ul>
          {articleComments.map((comment) => {
            return (
              <li key={comment.comment_id} className="comment">
                <h3>{comment.author}</h3>
                <h6>
                  {moment(comment.created_at).format("MMMM Do YYYY, h:mm a")}
                </h6>
                <p>{comment.body}</p>
                <section>
                  <button>👍</button>
                  <p>7</p>
                  <button>👎</button>
                </section>
                <button>DELETE</button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Comments;
