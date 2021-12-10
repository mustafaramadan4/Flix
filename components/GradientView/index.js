import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
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

const GradientView = ({ navigation, children }) => {
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
                <LinearGradient colors={['#FFCC3B', '#FF8FBE']} style={styles.linearGradient}>
                    { children }
                </LinearGradient>
            </>
        );
    }
};

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        padding: 25,
    },
    heading: {
        color: '#222222',
        fontFamily: 'Lato-Bold',
        fontSize: 26,
        fontWeight: 'bold',
        marginTop: 60,
    },
    question: {
        color: '#222222',
        fontFamily: 'Lato-Light',
        fontSize: 32,
    },
});

export default GradientView;