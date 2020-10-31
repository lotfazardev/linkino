import { useQuery } from "react-apollo";
import React from "react";
import { FEED_QUERY } from "../../graphql/query";
import FeedUnorderedList from "../atoms/FeedUnorderedList";
import { GetFeedArrayInterface } from "../../graphql/interface";

const FeedList = () => {
  const { loading, error, data } = useQuery<GetFeedArrayInterface>(FEED_QUERY);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error! ${error.message}</div>;
  return data ? <FeedUnorderedList links={data.feed.links} /> : null;
};

export default FeedList;
