import React from "react";
import {
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
} from "reactstrap";
import { FeedItemInterface } from "../../graphql/interface";

const FeedItem: React.FC<FeedItemInterface> = ({ description, url, id }) => {
  return (
    <ListGroupItem className="feedItems" key={id} tag="a" href={url}>
      <ListGroupItemHeading className="text-primary">{url}</ListGroupItemHeading>
      <ListGroupItemText className="text-muted">{description}</ListGroupItemText>
    </ListGroupItem>
  );
};

export default FeedItem;
