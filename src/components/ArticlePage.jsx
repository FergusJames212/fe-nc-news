import SingleArticle from "./SingleArticle";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
import { useState, useEffect } from "react";
import { fetchComments } from "../utils/api";
import { useParams } from "react-router-dom";

const ArticlePage = () => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { article_id } = useParams();

  useEffect(() => {
    fetchComments({ setIsLoading, article_id }).then((response) => {
      setComments(response);
    });
  }, []);

  return (
    <div>
      <SingleArticle />
      <AddComment setComments={setComments}/>
      <CommentList isLoading={isLoading} comments={comments}/>
    </div>
  );
};

export default ArticlePage;
