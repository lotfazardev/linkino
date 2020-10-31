import React from "react";
import FeedUnorderedList from "../atoms/FeedUnorderedList";
import FeedList from "../molecules/FeedList";

const IndexPage = () => {
  return (
    <div>
      <FeedList />
      <FeedUnorderedList />
    </div>
  );
};

export default IndexPage;
