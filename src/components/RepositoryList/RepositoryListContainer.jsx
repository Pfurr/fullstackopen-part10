import React from 'react';
import { Picker } from '@react-native-picker/picker';
import { Searchbar } from 'react-native-paper';
import { FlatList, View, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';

import theme from '../../themes';
import RepositoryItem from './RepositoryItem';

const styles = StyleSheet.create({
    separator: {
        height: 10,
    },
    picker: {
        padding: 10,
        fontSize: 14,
        fontWeight: "bold",
        backgroundColor: theme.colors.background
    }
});

const ItemSeparator = () => <View style={styles.separator} />;

class RepositoryListContainer extends React.Component {
    renderHeader = () => {
        const { setSearchText, searchText, orderBy, setOrderBy } = this.props;
        return (
            <View>
                <Searchbar
                    placeholder="Search"
                    onChangeText={(value) => setSearchText(value)}
                    value={searchText}
                />
                <Picker
                    style={styles.picker}
                    selectedValue={orderBy}
                    onValueChange={(value) => setOrderBy(value)}
                >
                    <Picker.Item 
                        label="Latest repositories"
                        value="latest"
                    />
                    <Picker.Item
                        label="Highest rated repositories"
                        value="highestRated"
                    />
                    <Picker.Item
                        label="Lowest rated repositories"
                        value="lowestRated"
                    />
                </Picker>
            </View>
        );
    }
    render() {
        const { repositories } = this.props;

        const repositoryNodes = repositories
        ? repositories.edges.map(edge => edge.node)
        : [];
        return (
            <FlatList
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
                ListHeaderComponent={this.renderHeader}
            />
        );    
    }
}

export default RepositoryListContainer;