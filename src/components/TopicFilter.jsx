import { useState } from "react";

const TopicFilter = ({ topicList, setTopic }) => {
  const [selectedTopic, setSelectedTopic] = useState(undefined);

  const topicSubmit = () => {
    setTopic(selectedTopic);
  };

  return (
    <div>
      <select
        value={selectedTopic}
        onChange={(e) => setSelectedTopic(e.target.value)}
      >
        <option>all</option>
        {topicList.map((topic, index) => {
          return (
            <option key={index} value={topic.slug}>
              {topic.slug}
            </option>
          );
        })}
      </select>
      <button onClick={topicSubmit}>Submit</button>
    </div>
  );
};

export default TopicFilter;
