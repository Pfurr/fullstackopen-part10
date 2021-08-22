import React from 'react';
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';
import theme from '../themes';

const styles = StyleSheet.create({
    input: {
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 5,
        padding: 20,
        fontSize: 16,
        fontWeight: "bold"
    },
    error: {
        borderColor: theme.colors.error
    },
    text: theme.text
});

const TextInput = ({ style, error, ...props }) => {
    const textInputStyle = [
        styles.input,
        styles.text,
        error && styles.error,
        style
    ];

    return <NativeTextInput style={textInputStyle} {...props}/>;
};

export default TextInput;