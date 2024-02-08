import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";

import moment from "moment";

import { getArticles, getTopics } from "../api";

import Loading from "./Loading";
import Topics from "./Navigation/Topics";

function AllArticles() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const topicQuery = searchParams.get("topic");

  const setTopic = (topic) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("topic", topic);
    setSearchParams(newParams);
  };

    useEffect(() => {
      getArticles().then((data) => {
        setArticles(data.articles);
        setIsLoading(false);
      });
    }, []);

  useEffect(() => {
    getTopics(topicQuery).then((data) => {
      setArticles(data.articles);
      setIsLoading(false);
    });
  }, [topicQuery]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Topics setTopic={setTopic} />
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
                  <Link to={`/${article.article_id}`}>Read Article</Link>
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
