import React from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import Constants from 'expo-constants';
import theme from '../themes';

const styles = StyleSheet.create({
    container : {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: theme.colors.primary
    },
    appBarTab: {
        padding: 20,
        fontSize: 16,
        color: "white",
        fontWeight: "bold",
        backgroundColor: theme.colors.primary
    }
});

const AppBarTab = ({ children }) => {
    return (
        <Pressable>
            <Text style={styles.appBarTab}>{children}</Text>
        </Pressable>
    );
};

const AppBar = () => {
    const appBarStyles = [styles.container];
    return (
        <View style={appBarStyles}>
            <AppBarTab>Repositories</AppBarTab>
        </View>
    );
};

export default AppBar;