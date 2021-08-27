import { gql } from '@apollo/client';
import { REPO_DETAILS, USER_DETAILS } from './fragments';

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

export const AUTHORIZED_USER = gql`
  ${USER_DETAILS}
  query {
    authorizedUser{
      ...UserDetails
    }
  }
`;

export const GET_REPOSITORY = gql`
  ${REPO_DETAILS}
  ${USER_DETAILS}
  query($id:ID!){
    repository(id: $id){
      ...RepoDetails
      url
      reviews {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              ...UserDetails
            }
          }
        }
      }
    }
  }
`;