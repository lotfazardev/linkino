export interface FeedItemInterface {
  id: number;
  description: string;
  url: string;
};

export interface FeedArrayInterface {
  links: FeedItemInterface[];
};