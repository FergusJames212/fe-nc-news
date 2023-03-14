import axios from "axios";

const news = axios.create({ baseURL: "https://fergus-news.onrender.com/" });

export const fetchArticles = ({ setIsLoading }) => {
  return news.get("/api/articles").then((response) => {
    setIsLoading(false);
    return response.data.articles;
  });
};

export const fetchArticle = ({ setIsLoading, article_id }) => {
  return news.get(`/api/articles/${article_id}`).then((response) => {
    setIsLoading(false);
    return response.data.article;
  });
};
