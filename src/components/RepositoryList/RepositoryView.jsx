import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';
import { useParams } from 'react-router-native';
import * as Linking from 'expo-linking';


import Text from '../Text';
import useRepository from '../../hooks/useRepository';
import theme from '../../themes';

const styles = StyleSheet.create({
    button: theme.button,
    whiteText: {
        color: "white"
    }
});

const RepositoryView = () => {
    const { id } = useParams();
    const { repository, loading } = useRepository(id);

    const goToGithub = () => {
        Linking.openURL(repository.url);
    };
    if (loading) {
        return "loading...";
    }
    return (
        <>
            <RepositoryItem item={repository}/>
            <Pressable onPress={goToGithub} style={styles.button}>
                <Text style={styles.whiteText}>Open in GitHub</Text>
            </Pressable>
        </>
    );
};

export default RepositoryView;
