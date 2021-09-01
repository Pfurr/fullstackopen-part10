import React from 'react';
import { FlatList, Pressable, StyleSheet, View } from 'react-native';
import RepositoryItem from './RepositoryItem';
import { useParams } from 'react-router-native';
import * as Linking from 'expo-linking';


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
    reviewContainer: {
        flexDirection: "row"
    },
    reviewHeadingContainer: {
        flexDirection: "row"
    },
    contentContainer: {
        flexGrow: 1,
        flexShrink: 1,
    },
    reviewText: {
        fontWeight:"normal"
    },
    reviewDate: {
        ...theme.meta
    },
    reviewRatingContainer: {
        width: 50,
        height: 50,
        borderRadius:25,
        borderWidth: 2,
        borderColor: theme.colors.primary,
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        marginRight: 10
    },
    reviewRating: {
        color: theme.colors.primary
    }
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

const ReviewItem = ({ review }) => {
    const date = (new Date(review.createdAt)).toLocaleDateString();
    return (
        <View style={[styles.container, styles.reviewContainer]}>
            <View style={styles.reviewRatingContainer}>
                <Text style={styles.reviewRating}>{review.rating}</Text>
            </View>
            <View style={styles.contentContainer}>
                <Text>{review.user.username}</Text>
                <Text style={styles.reviewDate}>{date}</Text>
                <Text style={styles.reviewText}>{review.text}</Text>
            </View>
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
