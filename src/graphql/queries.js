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

export const AUTHORIZED_USER = gql`
  query {
    authorizedUser{
      id
      username
    }
  }
`;

export const GET_REPOSITORY = gql`
  ${REPO_DETAILS}
  query($id:ID!){
    repository(id: $id){
      ...RepoDetails
      url
    }
  }
`;