import React, { useState, useEffect } from 'react';

import RepositoryListContainer from './RepositoryListContainer';
import useRepositories from '../../hooks/useRepositories';

  
const RepositoryList = () => {
  const [orderBy, setOrderBy] = useState('latest');
  const { repositories, refetch } = useRepositories();
  useEffect(() => {
    switch(orderBy) {
      case "latest": {
        refetch({ orderBy: "CREATED_AT"});
        break;
      }
      case "highestRated": {
        refetch({ orderBy:"RATING_AVERAGE", orderDirection: "DESC" });
        break;
      }
      case "lowestRated": {
        refetch({ orderBy: "RATING_AVERAGE", orderDirection: "ASC" });
        break;
      }
      default:
        refetch();
    }
  }, [orderBy]);

  return (
    <RepositoryListContainer 
      repositories={repositories}
      orderBy={orderBy}
      setOrderBy={setOrderBy}
    />
  );
};

export default RepositoryList;