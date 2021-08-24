import React from 'react';
import { View, Pressable, StyleSheet } from 'react-native';
import { useHistory } from 'react-router-native';
import { Formik } from 'formik';
import * as yup from 'yup';

import FormikTextInput from './FormikTextInput';
import Text from '../Text';
import theme from '../../themes';
import useSignIn from '../../hooks/useSignIn';

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    button: {
        backgroundColor: theme.colors.primary,
        color: "white",
        textAlign: "center",
        borderRadius: 5,
        padding: 20
    }
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

const SignIn = () => {
    const [signIn] = useSignIn();
    const history = useHistory();

    const onSubmit = async (values) => {
        const { username, password } = values;
        try {
            await signIn({ username, password });
            history.push('/');
        }
        catch (error) {
            console.log(error);
        }
    };

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
                />
                <FormikTextInput 
                    name="password"
                    placeholder="Password"
                    secureTextEntry={true}
                />
                <Pressable onPress={handleSubmit}>
                    <Text style={styles.button}>Sign in</Text>
                </Pressable>
            </View>
            }
        </Formik>
    );
};

export default SignIn;