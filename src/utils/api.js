import axios from "axios";

const news = axios.create({ baseURL: "https://fergus-news.onrender.com/" });

export const fetchArticles = (topic) => {
  if (topic.topic === "all") {
    return news.get("/api/articles").then((response) => {
      return response.data.articles;
    });
  } else {
    return news.get(`/api/articles`, {params: topic}).then((response) => {
      return response.data.articles;
    });
  }

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

export const fetchComments = ({ setIsLoading, article_id }) => {
  return news.get(`/api/articles/${article_id}/comments`).then((response) => {
    setIsLoading(false);
    return response.data.comments;
  });
};

export const fetchTopics = () => {
  return news.get("/api/topics").then((response) => {
    return response.data.topics;
  });

export const postComment = ( article_id, newComment ) => {
  console.log(article_id, "<< article_id")
  console.log(newComment, "newComment")
  return news
    .post(`/api/articles/${article_id}/comments`, newComment)
    .then(({data}) => {
      return data.comment;
    });
};
