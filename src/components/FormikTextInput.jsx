import React from 'react';
import { StyleSheet, View} from 'react-native';
import { useField } from 'formik';
import TextInput from './TextInput';
import Text from './Text';
import theme from '../themes';

const styles = StyleSheet.create({
    errorText: {
        marginTop: 5,
        color: theme.colors.error
    },
    spaced: {
        marginBottom: 20
    }
});

const FormikTextInput = ({ name, ...props }) => {
    const [field, meta, helpers] = useField(name);
    const showError = meta.touched && meta.error;

    return (
        <View style={styles.spaced}>
            <TextInput
                onChangeText={value => helpers.setValue(value)}
                onBlur={() => helpers.setTouched(true)}
                value={field.value}
                error={showError}
                {...props}
            />
            {showError && <Text style={styles.errorText}> {meta.error} </Text>}
        </View>
    );
};

export default FormikTextInput;