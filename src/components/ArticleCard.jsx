import { Link } from "react-router-dom";
import { patchArticleVotes } from "../utils/api";
import { useState } from "react";

const ArticleCard = ({ article }) => {
  const [userVote, setUserVote] = useState(0);
  const [isVotingErr, setIsVotingErr] = useState(false);

  const handleVote = () => {
    setIsVotingErr(false);
    setUserVote(1);
    patchArticleVotes(article.article_id).catch(() => {
      setUserVote(0);
      setIsVotingErr(true);
    });
  };

  return (
    <li key={article.article_id} className="article-card">
      <Link to={`/article/${article.article_id}`}>
        <h3>{article.title}</h3>
        <h4>posted by: {article.author}</h4>
      </Link>
      <img className="image" src={article.article_img_url} alt="" />
      <p>
        Upvotes: {article.votes + userVote}, Number of Comments:{" "}
        {article.comment_count}
      </p>
      <button onClick={handleVote}>Vote</button>
      {isVotingErr ? <p>Error when upvoting!</p> : <p></p>}
    </li>
  );
};

export default ArticleCard;
