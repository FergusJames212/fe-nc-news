import axios from "axios";

const news = axios.create({ baseURL: "https://fergus-news.onrender.com/" });

export const fetchArticles = ({ setIsLoading }) => {
  return news.get("/api/articles").then((response) => {
    setIsLoading(false);
    return response.data.articles;
  });
};
