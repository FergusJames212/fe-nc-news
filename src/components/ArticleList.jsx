import { useState, useEffect } from "react";
import { fetchArticles } from "../utils/api.js";

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchArticles({ setIsLoading }).then((response) => {
      setArticles(response);
      console.log(articles, "<< articles");
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
          return (
            <li key={article.article_id} className="article-card">
              <h3>{article.title}</h3>
              <h4>posted by: {article.author}</h4>
              <img className="image" src={article.article_img_url} alt="" />
              <p>
                Upvotes: {article.votes}, Number of Comments:{" "}
                {article.comment_count}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ArticleList;
