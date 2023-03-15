import { useState, useEffect } from "react";
import { fetchComments } from "../utils/api";
import { useParams } from "react-router-dom";
import CommentCard from "./CommentCard";

const CommentList = () => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { article_id } = useParams();

  useEffect(() => {
    fetchComments({ setIsLoading, article_id }).then((response) => {
      setComments(response);
    });
  }, []);

  if (isLoading) {
    return <h3>Loading comments...</h3>;
  }

  return (
    <div>
      <h2>Comments</h2>
      <ul className="comment-list">
        {comments ? (
          comments.map((comment) => {
            return CommentCard(comment);
          })
        ) : (
          <p>there are no comments here...</p>
        )}
      </ul>
    </div>
  );
};

export default CommentList;
