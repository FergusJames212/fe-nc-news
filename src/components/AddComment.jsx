import { useState } from "react";
import { postComment } from "../utils/api";
import { useParams } from "react-router-dom";
import CommentList from "./CommentList";

const AddComment = ({ setComments }) => {
  const [author, setAuthor] = useState("");
  const [body, setBody] = useState("");
  const [check, setCheck] = useState(false);
  const { article_id } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(body!=="" && author!=="") {
        const optimisticComment = {
          author: author,
          body: body,
          votes: 0,
        };
        const newComment = {
          author: author,
          body: body,
        };
        setComments((comments) => {
          return [optimisticComment, ...comments];
        });
        setCheck(false);
        postComment(article_id, newComment).then();
    } else {
        setCheck(true);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Submit a Comment</h2>
        <label htmlFor="comment-author">Author:</label>
        <input
          type="text"
          id="comment-author"
          value={author}
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
        />
        <br />
        <label htmlFor="comment-body">Body:</label>
        <textarea
          type="text"
          id="comment-body"
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
          }}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
          {check ? <p>Please ensure that you use a valid username and fill out a body</p> : <p></p>}
    </div>
  );
};

export default AddComment;
