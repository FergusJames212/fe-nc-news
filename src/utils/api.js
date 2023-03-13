import axios from "axios";

const news = axios.create({ baseURL: "https://fergus-news.onrender.com/" },{
  params: {
    _limit: 10
   }});

export const fetchArticles = ({ setIsLoading, setIsError }) => {
  return news.get("/api/articles").then((response) => {
    setIsLoading(false);
    return response.data.articles;
  });
};
