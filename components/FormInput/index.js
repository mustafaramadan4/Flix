import React, { useState } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

const fetchFonts = () => {
    return Font.loadAsync({
        'Lato': require('../../assets/fonts/Lato/Lato-Regular.ttf'),
        'Lato-Light': require('../../assets/fonts/Lato/Lato-Light.ttf'),
        'Lato-Thin': require('../../assets/fonts/Lato/Lato-Thin.ttf'),
        'Lato-Bold': require('../../assets/fonts/Lato/Lato-Bold.ttf'),
    });
};

const FormInput = ({ email, onEmailChange }) => {
    const [dataLoaded, setDataLoaded] = useState(false);

    if (!dataLoaded) {
        return (
            <AppLoading
                startAsync={fetchFonts}
                onFinish={() => setDataLoaded(true)}
                onError={ console.warn } 
            />
        )
    } else {
        return (
            <>
                <View style={styles.formInputContainer}>
                    <TextInput 
                        textAlign='center'
                        style={styles.emailInput}
                        onChangeText={onEmailChange}
                        placeholder='type here'
                        value={email}
                        autoFocus
                        autoCapitalize='none'
                        autoComplete='email'
                        autoCorrect={false}
                        keyboardType='email-address'
                        returnKeyType='done'
                        textContentType='emailAddress'
                        placeholderTextColor='rgba(0,0,0,0.5)'
                    />
                </View>
            </>
        );
    }
};

const styles = StyleSheet.create({
    formInputContainer: {
        marginTop: 75,
    },
    emailInput: {
        color: '#FFFFFF',
        fontFamily: 'Lato-Bold',
        fontSize: 24,
        textAlign: 'center',
        justifyContent: 'center',
    },
});

export default FormInput;