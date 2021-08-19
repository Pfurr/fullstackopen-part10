import React from 'react';
import { Text, StyleSheet, Image, View} from 'react-native';
import theme from "../themes";

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        fontWeight: "bold",
        padding: 5
    },
    avatar: {
        width: 66,
        height: 58,
        margin: 10
    },
    container: {
        display: "flex"
    },
    row: {
        flexDirection: "row",
    },
    column: {
        flexDirection: "column",
        justifyContent: "space-evenly"
    },
    meta: {
        color: "gray",
        fontWeight: "normal",
    },
    badge: {
        backgroundColor: theme.colors.primary,
        color: "white",
        borderRadius: 8,
        padding: 10,
        width: 100,
        textAlign: "center"
    },
    centered: {
        textAlign: "center"
    },
    repoStats: {
        justifyContent: "space-evenly"
    }
});

const processCount = (number) => {
    if (number < 1000) return number;

    return `${(number / 1000).toFixed(1)}k`;
};

const ItemText = ({ children, style }) => {
    const textStyles = [
        styles.text,
        style
    ];
    return <Text style={textStyles}>{children}</Text>;
};

const RepoStat = ({stat, label}) => {
    return (
        <View style={styles.column}>
            <ItemText style={styles.centered}>{processCount(stat)}</ItemText>
            <ItemText style={[styles.meta, styles.centered]}>{label}</ItemText>
        </View>
    );
};

const RepositoryItem = ({ item }) => {
    return (
    <View style={styles.container}>
        <View style={styles.row}>
            <Image 
                style={styles.avatar}
                source={{uri: item.ownerAvatarUrl}}
            />
            <View style={styles.column}>
                <ItemText>{item.fullName}</ItemText>
                <ItemText style={styles.meta}>Description: {item.description}</ItemText>
                <ItemText style={styles.badge}>{item.language}</ItemText>
            </View>
        </View>
        <View style={[styles.row, styles.repoStats]}>
            <RepoStat 
                stat={item.stargazersCount}
                label="Stars"
            />
            <RepoStat 
                stat={item.forksCount}
                label="Forks"
            />
            <RepoStat 
                stat={item.reviewCount}
                label="Reviews"
            />
            <RepoStat 
                stat={item.ratingAverage}
                label="Rating"/>
        </View>
    </View>
    );
};

export default RepositoryItem;