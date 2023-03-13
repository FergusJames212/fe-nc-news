import axios from "axios";

const news = axios.create({ baseURL: "https://fergus-news.onrender.com/" },{
  params: {
    _limit: 10
   }});

export const fetchArticles = () => {
  return news.get("/api/articles").then((response) => {
    return response.data.articles;
  });
};
