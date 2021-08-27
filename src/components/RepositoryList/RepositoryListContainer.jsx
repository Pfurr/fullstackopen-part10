import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';

import RepositoryItem from './RepositoryItem';

const styles = StyleSheet.create({
    separator: {
        height: 10,
    },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryListContainer = ({ repositories }) => {
    const repositoryNodes = repositories
        ? repositories.edges.map(edge => edge.node)
        : [];

    return <FlatList
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item }) =>
            <Link to={`/repositories/${item.id}`}>
                <RepositoryItem 
                    item={item} 
                    key={item.id}
                />
            </Link>
        }
    />;
};

export default RepositoryListContainer;