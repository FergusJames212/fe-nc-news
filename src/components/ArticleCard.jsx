import { Link } from "react-router-dom";

const ArticleCard = (article) => {
  return (
    <Link to={`article/${article.article_id}`}>
      <li key={article.article_id} className="article-card">
        <h3>{article.title}</h3>
        <h4>posted by: {article.author}</h4>
        <img className="image" src={article.article_img_url} alt="" />
        <p>
          Upvotes: {article.votes}, Number of Comments: {article.comment_count}
        </p>
      </li>
    </Link>
  );
};

export default ArticleCard;
