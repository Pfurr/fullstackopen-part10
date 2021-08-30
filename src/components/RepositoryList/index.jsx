import React, { useState } from 'react';
import { useDebounce } from 'use-debounce';


import RepositoryListContainer from './RepositoryListContainer';
import useRepositories from '../../hooks/useRepositories';

  
const RepositoryList = () => {
  const [orderBy, setOrderBy] = useState('latest');
  const [searchText, setSearchText] = useState('');
  const [searchKeyword] = useDebounce(searchText, 500);

  const { repositories } = useRepositories({ orderBy, searchKeyword });

  return (
    <RepositoryListContainer 
      repositories={repositories}
      orderBy={orderBy}
      setOrderBy={setOrderBy}
      searchKeyword={searchText}
      setSearchText={setSearchText}
    />
  );
};

export default RepositoryList;