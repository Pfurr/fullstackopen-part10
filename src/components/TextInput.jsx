import React from 'react';
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    input: {
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 5,
        padding: 20,
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 20
    }
});

const TextInput = ({ style, ...props }) => {
    const textInputStyle = [styles.input, style];

    return <NativeTextInput style={textInputStyle} {...props}/>;
};

export default TextInput;