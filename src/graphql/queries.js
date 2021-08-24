import { gql } from '@apollo/client';
import { REPO_DETAILS } from './fragments';

export const GET_REPOSITORIES = gql`
  ${REPO_DETAILS}
  query {
    repositories {
      edges {
        node {
          ...RepoDetails
        }
      }
    }
  }
`;