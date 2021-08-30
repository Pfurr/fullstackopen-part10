import { useQuery } from '@apollo/client';

import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = ({ orderBy, searchKeyword }) => {
  let variables;
  switch(orderBy) {
    case "latest": {
      variables = { orderBy: "CREATED_AT", searchKeyword};
      break;
    }
    case "highestRated": {
      variables = { orderBy:"RATING_AVERAGE", orderDirection: "DESC", searchKeyword };
      break;
    }
    case "lowestRated": {
      variables = { orderBy: "RATING_AVERAGE", orderDirection: "ASC", searchKeyword };
      break;
    }
    default:
      variables = { searchKeyword };
  }
  const { data, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables
  });

  return { repositories: data?.repositories, loading };
};

export default useRepositories;