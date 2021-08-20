import React from 'react';
import { View, Pressable, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import FormikTextInput from './FormikTextInput';
import Text from './Text';
import theme from '../themes';

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


const SignIn = () => {
    const onSubmit = (values) => {
        console.log(values);
    };

    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
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