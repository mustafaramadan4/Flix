import React from 'react';
import { View, Image, StyleSheet, Platform } from 'react-native';

const SignupProgressBar = ({ progressBarFile }) => {

    return (
        <View>
            <Image 
                source={progressBarFile} 
                style={styles.progressBar}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    progressBar: {
        marginTop: Platform.OS === 'ios' ? 10 : 0,
        // TODO: Look into fixing this (maybe just adjust image file)
        position: 'absolute',
        left: -25,
    },
});

export default SignupProgressBar;