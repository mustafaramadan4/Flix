import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
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

const FormHeading = ({ title, question }) => {
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
                <View style={styles.formTextContainer}>
                    <Text style={styles.heading}>{ title }</Text>
                    <Text style={styles.question}>{ question }</Text>
                </View>
            </>
        );
    }
};

const styles = StyleSheet.create({
    heading: {
        color: '#222222',
        fontFamily: 'Lato-Bold',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 40,
    },
    question: {
        color: '#222222',
        fontFamily: 'Lato-Light',
        fontSize: 30,
    },
});

export default FormHeading;