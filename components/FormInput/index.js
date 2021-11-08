import React, { useState } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { useNavigation } from '@react-navigation/core';

const fetchFonts = () => {
    return Font.loadAsync({
        'Lato': require('../../assets/fonts/Lato/Lato-Regular.ttf'),
        'Lato-Light': require('../../assets/fonts/Lato/Lato-Light.ttf'),
        'Lato-Thin': require('../../assets/fonts/Lato/Lato-Thin.ttf'),
        'Lato-Bold': require('../../assets/fonts/Lato/Lato-Bold.ttf'),
    });
};

const FormInput = (
    {
        value,
        onValueChange,
        placeholderText,
        autoFocus,
        autoCapitalize,
        keyboardType,
        autoComplete,
        textContentType,
        textAlign,
        onSubmitEditing,
        refInner,
        secureTextEntry,
    }) => {
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
                        style={[styles.emailInput, { textAlign: textAlign }]}
                        onChangeText={onValueChange}
                        placeholder={placeholderText}
                        value={value}
                        autoFocus={autoFocus}
                        autoCapitalize={autoCapitalize}
                        autoComplete={autoComplete}
                        autoCorrect={false}
                        keyboardType={keyboardType}
                        returnKeyType={'next'}
                        textContentType={textContentType}
                        placeholderTextColor='rgba(0,0,0,0.3)'
                        onSubmitEditing={onSubmitEditing}
                        ref={refInner}
                        secureTextEntry={secureTextEntry}
                    />
                </View>
            </>
        );
    }
};

const styles = StyleSheet.create({
    formInputContainer: {
        marginTop: 50,
    },
    emailInput: {
        color: '#FFFFFF',
        fontFamily: 'Lato-Bold',
        fontSize: 24,
        // textAlign: 'center',
        // justifyContent: 'flex-start',
        // justifyContent: 'center',
        // textAlign: textAlign,
    },
});

export default FormInput;