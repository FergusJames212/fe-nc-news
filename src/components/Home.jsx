import { useState, useEffect } from "react";
import ArticleList from "./ArticleList";
import TopicFilter from "./TopicFilter";
import {fetchTopics} from "../utils/api";

const Home = () => {
  const [topic, setTopic] = useState(undefined);
  const [topicList, setTopicList] = useState([]);

  useEffect(() => {
    fetchTopics().then((response) => {
      setTopicList(response);
    });
  }, []);

  return (
    <div>
      <TopicFilter topicList={topicList} setTopic={setTopic} />
      <ArticleList topic={topic}/>
    </div>
  );
};

export default Home;
