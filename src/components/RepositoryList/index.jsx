import React, { useState } from 'react';
import { useDebounce } from 'use-debounce';

import RepositoryListContainer from './RepositoryListContainer';
import useRepositories from '../../hooks/useRepositories';

  
const RepositoryList = () => {
  const [orderBy, setOrderBy] = useState('latest');
  const [searchText, setSearchText] = useState('');
  const [searchKeyword] = useDebounce(searchText, 500);

  const { repositories, fetchMore } = useRepositories({ orderBy, searchKeyword, first: 8 });

  return (
    <RepositoryListContainer 
      repositories={repositories}
      orderBy={orderBy}
      setOrderBy={setOrderBy}
      searchKeyword={searchText}
      setSearchText={setSearchText}
      onEndReached={fetchMore}
    />
  );
};

export default RepositoryList;