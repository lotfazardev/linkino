export interface FeedItemInterface {
  id: string;
  description: string;
  url: string;
};

export interface FeedArrayInterface {
  links: FeedItemInterface[];
};