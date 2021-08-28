import React from 'react';
import { View, Pressable, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';


import FormikTextInput from '../FormikTextInput';
import Text from '../Text';
import theme from '../../themes';

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: "white"
    },
    button: theme.button,
    buttonText: theme.buttonText
});

const initialValues = {
    password: '',
    username: ''
};

const validationSchema = yup.object().shape({
    password: yup
        .string()
        .required('password is required.'),
    username: yup
        .string()
        .required('username is required.')
});

const SignInContainer = ({ onSubmit }) => {
    return (
        <Formik 
            initialValues={initialValues} 
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {({handleSubmit}) => 
            <View style={styles.container}>
                <FormikTextInput 
                    name="username"
                    placeholder="Username"
                    testID="username"
                />
                <FormikTextInput 
                    name="password"
                    placeholder="Password"
                    secureTextEntry={true}
                    testID="password"
                />
                <Pressable onPress={handleSubmit} testID="submitButton" style={styles.button}>
                    <Text style={styles.buttonText}>Sign in</Text>
                </Pressable>
            </View>
            }
        </Formik>
    );
};

export default SignInContainer;