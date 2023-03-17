import { useState, useEffect } from "react";
import { fetchArticles } from "../utils/api.js";
import ArticleCard from "./ArticleCard";

const ArticleList = (topic) => {
  console.log(topic, "topic")
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchArticles(topic).then((response) => {
      setIsLoading(false);
      setArticles(response);
    });
  }, [topic]);

  if (isLoading) {
    return <h3>Loading articles...</h3>;
  }

  return (
    <div>
      <h2>Current list of articles</h2>
      <ul className="article-list">
        {articles.map((article) => {
          return <ArticleCard article={article} key={article.article_id}/>;
        })}
      </ul>
    </div>
  );
};

export default ArticleList;
