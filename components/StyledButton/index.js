import React, { useState } from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { LinearGradient } from 'expo-linear-gradient';



const fetchFonts = () => {
    return Font.loadAsync({
      'roboto-regular': require('../..//assets/fonts/favicon/Roboto-Regular.ttf'),
    });
};

const StyledButton = ({ content, onPress }) => {

    const [dataLoaded, setDataLoaded] = useState(false);

    // 'trello yellow' for sign up button background
    const backgroundColor = '#FFDF85';
    // 'dark mode' for sign up button text
    const textColor = '#222222';

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
            <View style={styles.container}>
                <LinearGradient colors={['#FFCC3B', '#FF8FBE']} style={styles.linearGradient}>
                    <TouchableOpacity
                        style={[styles.button]} 
                        onPress={onPress}
                    >
                        <Text style={[styles.text, {color: textColor, fontFamily: 'roboto-regular' }]}>{content}</Text>
                    </TouchableOpacity>
                </LinearGradient>
            </View>
        );
    }
};

export default StyledButton;