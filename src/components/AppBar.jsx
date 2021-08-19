import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Link } from 'react-router-native';
import Text from './Text';
import Constants from 'expo-constants';
import theme from '../themes';

const styles = StyleSheet.create({
    container : {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: theme.colors.appBar,
        flexDirection: 'row',
    },
    appBarTab: {
        padding: 20,
        fontSize: 16,
        color: "white",
        fontWeight: "bold",
        backgroundColor: theme.colors.appBar,
    }
});

const AppBarTab = ({ children, to }) => {
    return (
        <Link style={styles.appBarTab} to={to}>
            <Text>{children}</Text>
        </Link>
    );
};

const AppBar = () => {
    return (
        <View style={styles.container}>
            <AppBarTab to="/">Repositories</AppBarTab>
            <AppBarTab to="/sign-in">Sign In</AppBarTab>
        </View>
    );
};

export default AppBar;