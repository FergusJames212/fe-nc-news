const CommentCard = (comment) => {
  return (
    <li key={comment.comment_id} className="comment-card">
      <h3>{comment.body}</h3>
      <h4>posted by: {comment.author}</h4>
      <p>Upvotes: {comment.votes},</p>
    </li>
  );
};

export default CommentCard;
