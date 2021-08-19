import React from 'react';
import { Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        fontWeight: "bold"
    }
});

const ItemText = ({ children }) => {
    return <Text style={styles.text}>{children}</Text>;
};

const RepositoryItem = ({ item }) => {
    
    return (
    <>
        <ItemText>Full name: {item.fullName}</ItemText>
        <ItemText>Description: {item.description}</ItemText>
        <ItemText>Language: {item.language}</ItemText>
        <ItemText>Stars: {item.stargazersCount}</ItemText>
        <ItemText>Forks: {item.forksCount}</ItemText>
        <ItemText>Reviews: {item.reviewCount}</ItemText>
        <ItemText>Rating: {item.ratingAverage}</ItemText>
    </>
    );
};

export default RepositoryItem;