import gql from "graphql-tag";

export const FEED_QUERY = gql`
  query GetDogs {
    feed {
      links {
        id
        description
        url
      }
    }
  }
`;
