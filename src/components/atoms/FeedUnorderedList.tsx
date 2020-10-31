import React from "react";
import { ListGroup } from "reactstrap";
import { FeedItemInterface } from "../../graphql/interface";
import FeedItem from "./FeedItem";

const FeedUnorderedList = () => {
  const testArray: FeedItemInterface[] = [
    {
      id: "ckgwgddb3g5gp0977jexzotan",
      description: "this is simple test 1",
      url: "https://google.com",
    },
    {
      id: "ckgwgddb3g5asdd77jexzotan",
      description: "this is simple test 2",
      url: "https://yahoo.com",
    },
    {
      id: "ckgwgddb3g5gd3577jexzotan",
      description: "this is simple test 2",
      url: "https://bing.com",
    },
  ];
  
  return (
    <ListGroup className="p-5" flush>
      {testArray.map((item) => {
        return (
          <FeedItem
            key={item.id}
            id={item.id}
            description={item.description}
            url={item.url}
          />
        );
      })}
    </ListGroup>
  );
};

export default FeedUnorderedList;
