import React from 'react';
import { render } from '@testing-library/react-native';

import RepositoryListContainer from './RepositoryListContainer';
import processCount from '../../utils/processCount';

describe('RepositoryList', () => {
  describe('RepositoryListContainer', () => {
    it('renders repository information correctly', () => {
      const repositories = {
        totalCount: 8,
        pageInfo: {
          hasNextPage: true,
          endCursor:
            'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
        },
        edges: [
          {
            node: {
              id: 'jaredpalmer.formik',
              fullName: 'jaredpalmer/formik',
              description: 'Build forms in React, without the tears',
              language: 'TypeScript',
              forksCount: 1619,
              stargazersCount: 21856,
              ratingAverage: 88,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars2.githubusercontent.com/u/4060187?v=4',
            },
            cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
          },
          {
            node: {
              id: 'async-library.react-async',
              fullName: 'async-library/react-async',
              description: 'Flexible promise-based React data loader',
              language: 'JavaScript',
              forksCount: 69,
              stargazersCount: 1760,
              ratingAverage: 72,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars1.githubusercontent.com/u/54310907?v=4',
            },
            cursor:
              'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          },
        ],
      };
      const { getAllByTestId } = render(<RepositoryListContainer repositories={repositories}/>);
      // debug();
      const repoItems = getAllByTestId('repoItem');
      expect(repoItems.length).toEqual(2);

      const repoNodes = repositories.edges.map(edge => edge.node);

      expect(repoItems[0]).toHaveTextContent(repoNodes[0].fullName);
      expect(repoItems[0]).toHaveTextContent(repoNodes[0].description);
      expect(repoItems[0]).toHaveTextContent(repoNodes[0].language);    

      expect(repoItems[1]).toHaveTextContent(repoNodes[1].fullName);
      expect(repoItems[1]).toHaveTextContent(repoNodes[1].description);
      expect(repoItems[1]).toHaveTextContent(repoNodes[1].language);

      const forkCounts = getAllByTestId('repoStat-Forks');
      expect(forkCounts.length).toEqual(2);
      expect(forkCounts[0]).toHaveTextContent(processCount(repoNodes[0].forksCount));
      expect(forkCounts[1]).toHaveTextContent(processCount(repoNodes[1].forksCount));

      const stargazersCounts = getAllByTestId('repoStat-Stars');
      expect(stargazersCounts.length).toEqual(2);
      expect(stargazersCounts[0]).toHaveTextContent(processCount(repoNodes[0].stargazersCount));
      expect(stargazersCounts[1]).toHaveTextContent(processCount(repoNodes[1].stargazersCount));

      const ratingAverages = getAllByTestId('repoStat-Rating');
      expect(ratingAverages.length).toEqual(2);
      expect(ratingAverages[0]).toHaveTextContent(processCount(repoNodes[0].ratingAverage));
      expect(ratingAverages[1]).toHaveTextContent(processCount(repoNodes[1].ratingAverage));

      const reviews = getAllByTestId('repoStat-Reviews');
      expect(reviews.length).toEqual(2);
      expect(reviews[0]).toHaveTextContent(processCount(repoNodes[0].reviewCount));
      expect(reviews[1]).toHaveTextContent(processCount(repoNodes[1].reviewCount));
    });
  });
});