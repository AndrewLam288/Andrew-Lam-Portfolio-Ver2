import { GraphQLClient } from 'graphql-request';

export const hygraph = new GraphQLClient(
  import.meta.env.VITE_HYGRAPH_ENDPOINT,
  {
    headers: import.meta.env.VITE_HYGRAPH_TOKEN
      ? { Authorization: `Bearer ${import.meta.env.VITE_HYGRAPH_TOKEN}` }
      : {},
  }
);
