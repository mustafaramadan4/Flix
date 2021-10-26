import React from 'react';
import {View, Text, ImageBackground, Pressable} from 'react-native';
import styles from './styles';
import { useFonts } from 'expo-font';
import { Roboto_400Regular } from '@expo-google-fonts/roboto';

const StyledButton = ({type, content, onPress}) => {
    // const type = props.type;
    // const content = props.content;
    // const onPress = props.onPress;

    // const backgroundColor = type === 'primary' ? '#171A20CC' : '#FFFFFFA6';
    // const textColor = type === 'primary' ? '#FFFFFF' : '#171A20';

    const backgroundColor = '#C15442';
    const textColor = 'white';

    const [loaded] = useFonts({
        Roboto_400Regular: require('../../assets/fonts/favicon/Roboto-Regular.ttf'),
      });

    onPress = () => { console.log('Sign Up - pressed')};

    return (
        <View style={styles.container}>
            <Pressable 
                style={[styles.button, {backgroundColor: backgroundColor}]} 
                onPress={onPress}
            >
                <Text style={[styles.text, {color: textColor, fontFamily: 'Roboto_400Regular' }]}>{content}</Text>
            </Pressable>
        </View>
    );
};

export default StyledButton;