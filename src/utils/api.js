import axios from "axios";

const news = axios.create({ baseURL: "https://fergus-news.onrender.com/" });

export const fetchArticles = () => {
  return news.get("/api/articles").then((response) => {
    // setIsLoading(false);
    return response.data.articles;
  });
};

export const fetchArticle = (article_id) => {
  return news.get(`/api/articles/${article_id}`).then((response) => {
    return response.data.article;
  });
};

export const patchArticleVotes = (article_id) => {
  return news
    .patch(`/api/articles/${article_id}`, {
      inc_votes: 1,
    })
    .then(({ data }) => {
      return data.article;
    });
};
