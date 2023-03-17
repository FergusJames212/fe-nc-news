import CommentCard from "./CommentCard";

const CommentList = ({ comments, isLoading }) => {
  if (isLoading) {
    return <h3>Loading comments...</h3>;
  }

  return (
    <div>
      <h2>Comment Section</h2>
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
