import { useState, useEffect } from "react";
import { fetchArticles } from "../utils/api.js";
import ArticleCard from "./ArticleCard";

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchArticles({ setIsLoading }).then((response) => {
      setArticles(response);
    });
  }, []);

  if (isLoading) {
    return <h3>Loading articles...</h3>;
  }

  return (
    <div>
      <h2>Current list of articles</h2>
      <ul className="article-list">
        {articles.map((article) => {
          return (ArticleCard(article));
        })}
      </ul>
    </div>
  );
};

export default ArticleList;
