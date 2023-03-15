import { useState, useEffect } from "react";
import { fetchArticle } from "../utils/api";
import ArticleCard from "./ArticleCard";
import { useParams } from "react-router-dom";

const SingleArticle = () => {
  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { article_id } = useParams();

  useEffect(() => {
    fetchArticle( article_id ).then((response) => {
      setIsLoading(false);
      setArticle(response);
    });
  }, []);

  if (isLoading) {
    return <h3>Loading article...</h3>;
  }

  return (
    <div className="article-page">
      <ArticleCard article={article}/>  
      <p>{article.body}</p>
      <h5>date posted: {article.created_at}</h5>
    </div>
  );
};

export default SingleArticle;
