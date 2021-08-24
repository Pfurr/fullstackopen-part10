import { gql } from '@apollo/client';

export const REPO_DETAILS = gql`
  fragment RepoDetails on Repository {
    id
    fullName
    ownerAvatarUrl
    description
    language
    stargazersCount
    forksCount
    reviewCount
    ratingAverage
  }
`;