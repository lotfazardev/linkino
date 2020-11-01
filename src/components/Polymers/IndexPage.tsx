import React from "react";
import FeedList from "../molecules/FeedList";
import PostForm from "../molecules/PostForm";

const IndexPage = () => {
  return (
    <div>
      <PostForm />
      <FeedList />
    </div>
  );
};

export default IndexPage;
