import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, ImageBackground, StyleSheet, Text, View } from 'react-native';
import StyledButton from './components/StyledButton';

export default function App() {

  const image = require('./assets/movies_background_underlay.jpg');

  return (
    <ImageBackground source={image} resizeMode='cover' style={styles.image}>
      <View style={styles.mainContainer}>
        <Text style={styles.mainTitle}>flixify</Text> 
      </View>
      <View style={styles.bottomContainer}>
        <StyledButton content="Sign up with email"/>
        <Text style={styles.loginMessage}>Already have an account? <Text style={styles.loginText}>Login here</Text></Text> 
        <StatusBar style="auto" />
      </View>
    </ImageBackground>
    // <View style={styles.container}>
      
    // </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomContainer: {
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
