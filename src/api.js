import axios from "axios";

export const getArticles = () => {
  return axios
    .get("https://news-api-9mot.onrender.com/api/articles")
    .then((response) => {
      return response.data;
    });
};

export const getSingleArticle = (ID) => {
  return axios
    .get(`https://news-api-9mot.onrender.com/api/articles/${ID}`)
    .then((response) => {
      return response.data;
    });
};

export const getComments = (ID) => {
  return axios
    .get(`https://news-api-9mot.onrender.com/api/articles/${ID}/comments`)
    .then((response) => {
      return response.data;
    });
};
