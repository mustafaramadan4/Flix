import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
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

const EmailScreen = () => {
    const [dataLoaded, setDataLoaded] = useState(false);

    const [email, setEmail] = useState('');

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
            <LinearGradient colors={['#FFCC3B', '#FF8FBE']} style={styles.linearGradient}>
                <View style={styles.formTextContainer}>
                    <Text style={styles.heading}>Welcome!</Text>
                    <Text style={styles.question}>What's your email?</Text>
                    <View style={styles.formInputContainer}>
                        <TextInput 
                            textAlign={'center'}
                            style={styles.emailInput}
                            onChange={e => setEmail(e.target.value)}
                            placeholder='type here'
                            value={email}
                            autoFocus
                        />
                    </View>
                </View>
            </LinearGradient>
        );
    }
};

const styles = StyleSheet.create({
    formTextContainer: {
        flex: 1,
        // background: linear-gradient(169.61deg, #FFCC3B -2.5%, #FF8FBE 102.4%);
    },
    linearGradient: {
        flex: 1,
        padding: 25,
    },
    heading: {
        color: '#222222',
        fontFamily: 'Lato-Bold',
        fontSize: 26,
        fontWeight: 'bold',
        marginTop: 125,
    },
    question: {
        color: '#222222',
        fontFamily: 'Lato-Light',
        fontSize: 32,
    },
    formInputContainer: {
        marginTop: 100,
    },
    emailInput: {
        color: '#222222',
        opacity: 0.5,
        fontFamily: 'Lato-Light',
        fontSize: 32,
        textAlign: 'center',
        justifyContent: 'center',
    }
});

export default EmailScreen;