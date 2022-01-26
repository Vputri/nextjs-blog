import gql from "graphql-tag";

const ARTICLES_QUERY = gql`
  query Articles{
    articles{
      pageInfo {
        startCursor
        hasNextPage
        endCursor
      }
      edges {
        node {
          id
          title
          description
          content
          slug
          image
          author{
            name
          }
          Category{
            name
            slug
          }
        }
      }
    }
  }
`;

export default ARTICLES_QUERY;