import { useQuery } from "react-apollo";
import React from "react";
import { FeedArrayInterface } from "../../graphql/interface";
import { FEED_QUERY } from "../../graphql/query";

const FeedList = () => {
  const { loading, error, data } = useQuery<FeedArrayInterface>(FEED_QUERY);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error! ${error.message}</div>;
  return <div>{JSON.stringify(data)}</div>;
};

export default FeedList;
