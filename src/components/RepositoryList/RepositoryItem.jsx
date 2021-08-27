import React from 'react';
import { StyleSheet, Image, View} from 'react-native';

import Text from '../Text';
import theme from "../../themes";
import processCount from '../../utils/processCount';

const styles = StyleSheet.create({
    avatar: {
        height: 65,
        width: 65,
        margin: 10
    },
    container: {
        display: "flex",
        backgroundColor: "white"
    },
    row: {
        flexDirection: "row",
    },
    meta: theme.meta,
    badge: {
        backgroundColor: theme.colors.primary,
        color: "white",
        borderRadius: 8,
        padding: 10,
        width: 120,
        textAlign: "center"
    },
    centered: {
        textAlign: "center"
    },
    repoStats: {
        justifyContent: "space-evenly"
    },
    contentContainer: {
        flexGrow: 1,
        flexShrink: 1,
    },
});

const RepoStat = ({ stat, label }) => {
    return (
        <View style={styles.column} testID={`repoStat-${label}`}>
            <Text style={styles.centered}>{processCount(stat)}</Text>
            <Text style={[styles.meta, styles.centered]}>{label}</Text>
        </View>
    );
};

const RepositoryItem = ({ item }) => {
    return (
    <View style={styles.container} testID="repoItem">
        <View style={styles.row}>
            <Image 
                style={styles.avatar}
                source={{uri: item.ownerAvatarUrl}}
            />
            <View style={styles.contentContainer}>
                <Text>{item.fullName}</Text>
                <Text style={styles.meta}>{item.description}</Text>
                <Text style={styles.badge}>{item.language}</Text>
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