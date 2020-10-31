import { useQuery } from "react-apollo";
import React from "react";
import { FEED_QUERY } from "../../graphql/query";
import FeedUnorderedList from "../atoms/FeedUnorderedList";
import { GetFeedArrayInterface } from "../../graphql/interface";
import LoadingPage from "../atoms/LoadingPage";
import ErrorBox from "../atoms/ErrorBox";

const FeedList = () => {
  const { loading, error, data } = useQuery<GetFeedArrayInterface>(FEED_QUERY);
  if (loading) return <LoadingPage />;
  if (error) return <ErrorBox errorText={error.message} />;
  return data ? (
    <FeedUnorderedList links={data.feed.links} />
  ) : (
    <ErrorBox errorText={"No data !"} />
  );
};

export default FeedList;
