import React from 'react';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';
import StyledButton from '../components/StyledButton';

const SignupScreen = ({ navigation }) => {
    const image = require('../assets/movies_background_underlay.jpg');

    return (
        <ImageBackground source={image} resizeMode='cover' style={styles.image}>
            <View style={styles.mainContainer}>
                <Text style={styles.mainTitle}>flix</Text> 
            </View>
            <View style={styles.bottomContainer}>
                <StyledButton content="Sign up" onPress={() => navigation.navigate('Email')} />
                <StyledButton content="Sign in" onPress={() => navigation.navigate('Signin')} />
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
      flex: 3,
      backgroundColor: 'rgba(0,0,0,0.6)',
      alignItems: 'center',
      justifyContent: 'center',
    },
    bottomContainer: {
      flex: 1,
      height: 150,
      backgroundColor: 'rgba(0,0,0,0.6)',
      alignItems: 'center',
      paddingBottom: 30,
    },
    mainTitle: {
      fontSize: 75,
      fontWeight: '500',
      color: 'white',
      fontFamily: 'Futura'
    },
    image: {
      flex: 1,
      justifyContent: 'center',
    },
    loginMessage: {
      color: 'white',
    },
    loginText: {
      textDecorationLine: 'underline',
    }
  });
  

export default SignupScreen;
