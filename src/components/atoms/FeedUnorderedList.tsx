import React from "react";
import { ListGroup } from "reactstrap";
import { FeedArrayInterface } from "../../graphql/interface";
import FeedItem from "./FeedItem";

const FeedUnorderedList: React.FC<FeedArrayInterface> = ({ links }) => {
  return (
    <ListGroup className="p-5" flush>
      {links.map((item) => {
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
