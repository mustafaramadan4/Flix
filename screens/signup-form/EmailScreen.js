import React, { useState } from 'react';
import { Image, View, Text, StyleSheet, TextInput, TouchableOpacity, Platform } from 'react-native';
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

const EmailScreen = ({ navigation }) => {
    const [dataLoaded, setDataLoaded] = useState(false);

    const [email, setEmail] = useState('');

    const nextButtonJSX = <TouchableOpacity style={styles.nextButton} activeOpacity={0.5}>
                            <Image source={require('../../assets/icons/next_button.png')}/>
                        </TouchableOpacity>;

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
                    <Image 
                        source={require('../../assets/icons/progress_bar1.png')} 
                        style={styles.progressBar}
                    />
                    <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate('Signup')}>
                        <Image 
                            source={require('../../assets/icons/back_button.png')}
                            style={styles.backButton}
                        />
                    </TouchableOpacity>
                    <View style={styles.formTextContainer}>
                        <Text style={styles.heading}>Welcome!</Text>
                        <Text style={styles.question}>What's your email?</Text>
                        <View style={styles.formInputContainer}>
                            <TextInput 
                                textAlign='center'
                                style={styles.emailInput}
                                onChangeText={setEmail}
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
                        { email.length > 0 && nextButtonJSX }
                    </View>
                </LinearGradient>
            </>
        );
    }
};

const styles = StyleSheet.create({
    formTextContainer: {
        flex: 1,
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
        marginTop: 60,
    },
    question: {
        color: '#222222',
        fontFamily: 'Lato-Light',
        fontSize: 32,
    },
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
    nextButton: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 60,
    },
    progressBar: {
        marginTop: Platform.OS === 'ios' ? 10 : 0,
    },
    backButton: {
        marginTop: 45,
    }
});

export default EmailScreen;