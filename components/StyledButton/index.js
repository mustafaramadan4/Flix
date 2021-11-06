import React, { useState } from 'react';
import {View, Text, ImageBackground, Pressable} from 'react-native';
import styles from './styles';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

const fetchFonts = () => {
    return Font.loadAsync({
      'roboto-regular': require('../..//assets/fonts/favicon/Roboto-Regular.ttf'),
    });
};

const StyledButton = ({type, content, onPress}) => {
    // const type = props.type;
    // const content = props.content;
    // const onPress = props.onPress;

    // const backgroundColor = type === 'primary' ? '#171A20CC' : '#FFFFFFA6';
    // const textColor = type === 'primary' ? '#FFFFFF' : '#171A20';

    const [dataLoaded, setDataLoaded] = useState(false);

    // 'trello yellow' for sign up button background
    const backgroundColor = '#FFDF85';
    // 'dark mode' for sign up button text
    const textColor = '#222222';

    onPress = () => { console.log('Sign Up - pressed')};
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
                <Pressable 
                    style={[styles.button, {backgroundColor: backgroundColor}]} 
                    onPress={onPress}
                >
                    <Text style={[styles.text, {color: textColor, fontFamily: 'roboto-regular' }]}>{content}</Text>
                </Pressable>
            </View>
        );
    }
};

export default StyledButton;