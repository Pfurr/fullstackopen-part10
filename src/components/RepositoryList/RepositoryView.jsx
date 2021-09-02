import React from 'react';
import { FlatList, Pressable, StyleSheet, View } from 'react-native';
import { useParams } from 'react-router-native';
import * as Linking from 'expo-linking';

import RepositoryItem from './RepositoryItem';
import ReviewItem from '../ReviewItem';
import Text from '../Text';
import useRepository from '../../hooks/useRepository';
import theme from '../../themes';

const styles = StyleSheet.create({
    button: {
        ...theme.button,
        margin: 10,
    },
    whiteText: {
        color: "white"
    },
    container: {
        padding: 10,
        backgroundColor: "white",
        marginBottom: 10
    },
    reviewHeadingContainer: {
        flexDirection: "row"
    },
    contentContainer: {
        flexGrow: 1,
        flexShrink: 1,
    },
});

const RepositoryInfo = ({ repository }) => {
    const goToGithub = () => {
        Linking.openURL(repository.url);
    };
    return (
        <View style={styles.container}>
            <RepositoryItem item={repository}/>
            <Pressable onPress={goToGithub} style={styles.button}>
                <Text style={styles.whiteText}>Open in GitHub</Text>
            </Pressable>
        </View>
    );
};

const RepositoryView = () => {
    const { id } = useParams();
    const { repository, loading, fetchMore } = useRepository(id);

    if (loading) {
        return <Text>loading...</Text>;
    }

    const reviews = repository.reviews.edges.map(edge => edge.node);
    return (
        <FlatList
            data={reviews}
            renderItem={({ item }) => <ReviewItem review={item}/>}
            keyExtractor={({ id }) => id}
            ListHeaderComponent={() => <RepositoryInfo repository={repository}/>}
            onEndReachedThreshold={0.2}
            onEndReached={fetchMore}
        />
    );
};

export default RepositoryView;
