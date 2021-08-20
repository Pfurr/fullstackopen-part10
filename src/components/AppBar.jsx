import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
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
        backgroundColor: theme.colors.appBar,
    },
    whiteText: {
        color: "white",
    },
    row: {
        flexDirection: "row"
    }

});

const AppBarTab = ({ children, to }) => {
    return (
        <Link style={styles.appBarTab} to={to}>
            <Text style={styles.whiteText}>{children}</Text>
        </Link>
    );
};

const AppBar = () => {
    return (
        <View style={styles.container}>
            <ScrollView horizontal style={styles.row}>
                <AppBarTab to="/">Repositories</AppBarTab>
                <AppBarTab to="/sign-in">Sign In</AppBarTab>
            </ScrollView>
        </View>
    );
};

export default AppBar;